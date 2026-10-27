'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const {createRelayServer} = require('../relay.cjs');

const room = () => 'did-coop/' + crypto.randomBytes(16).toString('hex');

async function setup(t,limits={}) {
  const relay=await createRelayServer({host:'127.0.0.1',port:0,limits});
  t.after(()=>relay.close());
  return relay;
}

async function connect(relay) {
  const ws=new WebSocket(relay.url);
  const messages=[];
  const listeners=new Set();
  let closed=null;
  ws.addEventListener('message',event=>{
    messages.push(JSON.parse(event.data));
    for(const notify of listeners)notify();
  });
  const closing=new Promise(resolve=>ws.addEventListener('close',event=>{
    closed={code:event.code,reason:event.reason}; resolve(closed);
    for(const notify of listeners)notify();
  }));
  await new Promise((resolve,reject)=>{
    ws.addEventListener('open',resolve,{once:true});
    ws.addEventListener('error',()=>reject(new Error('WebSocket handshake failed')),{once:true});
  });
  const next=(predicate,timeout=1500)=>new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{listeners.delete(check);reject(new Error('Missing expected relay frame'));},timeout);
    function check() {
      const index=messages.findIndex(predicate);
      if(index>=0) {clearTimeout(timer);listeners.delete(check);resolve(messages.splice(index,1)[0]);}
      else if(closed) {clearTimeout(timer);listeners.delete(check);reject(new Error('Socket closed before expected frame: '+closed.code));}
    }
    listeners.add(check);check();
  });
  const welcome=await next(x=>x.type==='welcome');
  assert.match(welcome.peerId,/^[a-f0-9]{32}$/);
  return {ws,next,messages,closing,id:welcome.peerId,send:value=>ws.send(JSON.stringify(value))};
}

async function subscribe(client,channel,hostPeerId,create=false) {
  const requestId=crypto.randomUUID();
  client.send({type:'subscribe',channel,hostPeerId,create,requestId});
  const ack=await client.next(x=>x.type==='ack' && x.requestId===requestId);
  assert.equal(ack.ok,true);
}

async function hostRoom(relay) {
  const host=await connect(relay),channel=room();
  await subscribe(host,channel,host.id,true);
  return {host,channel};
}

test('health i prywatne trasowanie zachowują prawdziwą tożsamość i rolę hosta', async t=>{
  const relay=await setup(t);
  const health=await fetch(relay.url.replace('ws:','http:')+'/healthz');
  assert.equal(health.status,200);
  assert.deepEqual(await health.json(),{ok:true,protocol:'did-relay-1',version:'1.0.0'});
  const {host,channel}=await hostRoom(relay),guest=await connect(relay);
  assert.notEqual(host.id,guest.id);
  await subscribe(guest,channel,host.id);
  const presence=await host.next(x=>x.type==='presence' && x.joined?.some(p=>p.peerId===guest.id));
  assert.equal(presence.channel,channel);
  guest.send({type:'send',to:host.id,from:'fake-host',data:{type:'ready',value:true}});
  const direct=await host.next(x=>x.type==='direct');
  assert.equal(direct.from,guest.id);
  assert.deepEqual(direct.data,{type:'ready',value:true});
  host.send({type:'publish',channel,from:'fake',data:{type:'state',revision:2}});
  const state=await guest.next(x=>x.type==='message');
  assert.equal(state.from,host.id);
  assert.equal(state.channel,channel);
  host.send({type:'send',to:guest.id,data:{type:'joined',ok:true}});
  assert.equal((await guest.next(x=>x.type==='direct')).from,host.id);
});

test('gość nie publikuje stanu ani nie przejmuje roli istniejącego hosta', async t=>{
  const relay=await setup(t),{host,channel}=await hostRoom(relay);
  const guest=await connect(relay);
  await subscribe(guest,channel,host.id);
  guest.send({type:'publish',channel,from:host.id,data:{type:'state',revision:999}});
  assert.equal((await guest.next(x=>x.type==='error')).code,'forbidden');
  assert.equal((await guest.closing).code,1008);
  assert.ok(!host.messages.some(x=>x.type==='message' && x.data?.revision===999));
  const impostor=await connect(relay);
  impostor.send({type:'subscribe',channel,hostPeerId:host.id,create:true,requestId:'fake-create'});
  assert.equal((await impostor.next(x=>x.type==='error')).code,'forbidden');
});

test('kanały i direct są izolowane; nieprzypisany klient nie może wysyłać', async t=>{
  const relay=await setup(t),a=await hostRoom(relay),b=await hostRoom(relay);
  a.host.send({type:'send',to:b.host.id,data:{secret:'only-room-a'}});
  assert.equal((await a.host.next(x=>x.type==='error')).code,'forbidden');
  assert.ok(!b.host.messages.some(x=>x.type==='direct'));
  const guest1=await connect(relay),guest2=await connect(relay);
  await subscribe(guest1,b.channel,b.host.id);
  await subscribe(guest2,b.channel,b.host.id);
  guest1.send({type:'send',to:guest2.id,data:{secret:'no-client-side-dm'}});
  assert.equal((await guest1.next(x=>x.type==='error')).code,'forbidden');
  assert.ok(!guest2.messages.some(x=>x.type==='direct'));
  const unassigned=await connect(relay);
  unassigned.send({type:'send',to:b.host.id,data:{secret:'unassigned'}});
  assert.equal((await unassigned.next(x=>x.type==='error')).code,'not_subscribed');
});

test('limit 8 obejmuje hosta i nie pozwala dziewiątemu socketowi dołączyć', async t=>{
  const relay=await setup(t),{host,channel}=await hostRoom(relay);
  for(let i=0;i<7;i++) await subscribe(await connect(relay),channel,host.id);
  const ninth=await connect(relay);
  ninth.send({type:'subscribe',channel,hostPeerId:host.id,create:false,requestId:'full'});
  assert.equal((await ninth.next(x=>x.type==='error')).code,'room_full');
  assert.equal((await ninth.closing).code,1008);
});

test('utrata hosta kończy pokój i stare zaproszenie nie odtwarza go', async t=>{
  const relay=await setup(t),{host,channel}=await hostRoom(relay),guest=await connect(relay);
  await subscribe(guest,channel,host.id);
  host.ws.close(1000);
  await host.closing;
  const left=await guest.next(x=>x.type==='presence' && x.left?.some(p=>p.peerId===host.id));
  assert.equal(left.channel,channel);
  assert.equal((await guest.closing).code,1001);
  const stale=await connect(relay);
  stale.send({type:'subscribe',channel,hostPeerId:host.id,create:false,requestId:'old'});
  assert.equal((await stale.next(x=>x.type==='error')).code,'room_not_found');
});

test('limity ramki, rate i niezapisanego połączenia zamykają sockety', async t=>{
  const relay=await setup(t,{burst:3,ratePerSecond:1,unauthenticatedTimeoutMs:120});
  const {host,channel}=await hostRoom(relay);
  for(let i=0;i<3;i++)host.send({type:'publish',channel,data:{sequence:i}});
  assert.equal((await host.next(x=>x.type==='error')).code,'rate_limit');
  assert.equal((await host.closing).code,4011);
  const large=await connect(relay);
  large.ws.send('x'.repeat(16385));
  assert.equal((await large.closing).code,1009);
  const idle=await connect(relay);
  assert.equal((await idle.closing).code,1008);
});

test('limity pokoi i połączeń są sprawdzane przed przydzieleniem kolejnych zasobów', async t=>{
  const relay=await setup(t,{maxRooms:1,maxConnections:2});
  await hostRoom(relay);
  const extra=await connect(relay);
  extra.send({type:'subscribe',channel:room(),hostPeerId:extra.id,create:true,requestId:'new-room'});
  assert.equal((await extra.next(x=>x.type==='error')).code,'room_limit');
  await extra.closing;
  const pending=await connect(relay);
  await assert.rejects(connect(relay),/handshake/);
  pending.ws.close();
});

test('nieprawidłowe typy i głęboki JSON nie zatrzymują procesu brokera', async t=>{
  const relay=await setup(t);
  const malformed=await connect(relay);
  malformed.send({type:'subscribe',channel:{toString:'invalid'},hostPeerId:malformed.id,create:true,requestId:'bad-type'});
  assert.equal((await malformed.next(x=>x.type==='error')).code,'invalid_frame');
  const {host,channel}=await hostRoom(relay);
  let nested={};for(let i=0;i<80;i++)nested={nested};
  host.send({type:'publish',channel,data:nested});
  assert.equal((await host.next(x=>x.type==='error')).code,'invalid_frame');
  const later=await hostRoom(relay);
  assert.ok(later.host.id);
});

function paddedFrame(frame,jsonBytes) {
  const result=structuredClone(frame);
  result.data.padding='';
  result.data.padding='x'.repeat(jsonBytes-Buffer.byteLength(JSON.stringify(result)));
  assert.equal(Buffer.byteLength(JSON.stringify(result)),jsonBytes);
  return result;
}

test('powiększona koperta odrzuca nadawcę zamiast zamykać poprawnego odbiorcę', async t=>{
  const relay=await setup(t),{host,channel}=await hostRoom(relay),guest=await connect(relay);
  await subscribe(guest,channel,host.id);
  const request=paddedFrame({type:'send',to:host.id,data:{}},16384);
  const forwarded={type:'direct',from:guest.id,data:request.data};
  assert.equal(Buffer.byteLength(JSON.stringify(forwarded)),16388);
  guest.send(request);
  assert.equal((await guest.next(x=>x.type==='error')).code,'frame_too_large');
  assert.equal((await guest.closing).code,1009);
  assert.equal(host.ws.readyState,WebSocket.OPEN);
  assert.ok(!host.messages.some(x=>x.type==='direct'));
  const healthy=await connect(relay);
  await subscribe(healthy,channel,host.id);
  const publish=paddedFrame({type:'publish',channel,data:{}},16384);
  host.send(publish);
  assert.equal((await host.next(x=>x.type==='error')).code,'frame_too_large');
  assert.equal((await host.closing).code,1009);
  assert.equal((await healthy.closing).code,1001);
  assert.ok(!healthy.messages.some(x=>x.type==='message'));
});

test('globalny budżet transferu liczy cały fanout atomowo, wszystkie pokoje i odnawia tokeny', async t=>{
  const relay=await setup(t,{outboundBytesPerSecond:1000,outboundBurstBytes:5000});
  const a=await hostRoom(relay),a1=await connect(relay),a2=await connect(relay);
  await subscribe(a1,a.channel,a.host.id);await subscribe(a2,a.channel,a.host.id);
  const b=await hostRoom(relay),b1=await connect(relay);
  await subscribe(b1,b.channel,b.host.id);
  // Four fanouts cost 4 * 2 * (496 JSON + 4 WebSocket header) = 4000 bytes.
  const outgoing=paddedFrame({type:'message',channel:a.channel,from:a.host.id,data:{}},496);
  for(let i=0;i<4;i++) {
    a.host.send({type:'publish',channel:a.channel,data:outgoing.data});
    await a1.next(x=>x.type==='message');await a2.next(x=>x.type==='message');
  }
  // A different room consumes 300 more, leaving about 700 bytes in the shared bucket.
  const initial=paddedFrame({type:'direct',from:b1.id,data:{}},296);
  b1.send({type:'send',to:b.host.id,data:initial.data});
  await b.host.next(x=>x.type==='direct');
  // One 400-byte copy fits; the whole 800-byte fanout must nevertheless be refused.
  const denied=paddedFrame({type:'message',channel:a.channel,from:a.host.id,data:{}},396);
  a.host.send({type:'publish',channel:a.channel,data:denied.data});
  assert.equal((await a.host.next(x=>x.type==='error')).code,'transfer_limit');
  assert.equal((await a.host.closing).code,4011);
  await a1.closing;await a2.closing;
  assert.ok(!a1.messages.some(x=>x.type==='message'));
  assert.ok(!a2.messages.some(x=>x.type==='message'));
  // This room cannot obtain a fresh bucket. The offender closes; its host stays open.
  const later=paddedFrame({type:'direct',from:b1.id,data:{}},896);
  b1.send({type:'send',to:b.host.id,data:later.data});
  assert.equal((await b1.next(x=>x.type==='error')).code,'transfer_limit');
  assert.equal((await b1.closing).code,4011);
  assert.equal(b.host.ws.readyState,WebSocket.OPEN);
  assert.ok(!b.host.messages.some(x=>x.type==='direct'));
  await new Promise(resolve=>setTimeout(resolve,350));
  const resumed=await connect(relay);
  await subscribe(resumed,b.channel,b.host.id);
  resumed.send({type:'send',to:b.host.id,data:later.data});
  assert.equal((await b.host.next(x=>x.type==='direct')).from,resumed.id);
  assert.equal(b.host.ws.readyState,WebSocket.OPEN);
});

test('wolny odbiorca opuszcza fanout bez zamykania poprawnego hosta', async t=>{
  const relay=await setup(t,{maxBufferedBytes:512}),{host,channel}=await hostRoom(relay);
  const slow=await connect(relay);
  await subscribe(slow,channel,host.id);
  host.send({type:'publish',channel,data:{padding:'x'.repeat(600)}});
  const closed=await slow.closing;
  assert.equal(closed.code,4011);
  assert.equal(closed.reason,'slow_consumer');
  assert.equal(host.ws.readyState,WebSocket.OPEN);
  const replacement=await connect(relay);
  await subscribe(replacement,channel,host.id);
  host.send({type:'publish',channel,data:{type:'state',revision:2}});
  assert.equal((await replacement.next(x=>x.type==='message')).data.revision,2);
  assert.equal(host.ws.readyState,WebSocket.OPEN);
});
