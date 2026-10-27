'use strict';

const http = require('node:http');
const crypto = require('node:crypto');
const {WebSocketServer,WebSocket} = require('ws');

const DEFAULT_LIMITS=Object.freeze({
  maxRooms:4,maxPeersPerRoom:8,maxConnections:40,maxFrameBytes:16*1024,
  maxBufferedBytes:256*1024,ratePerSecond:20,burst:40,
  outboundBytesPerSecond:8192,outboundBurstBytes:131072,
  unauthenticatedTimeoutMs:15000,heartbeatMs:20000
});
const CHANNEL=/^did-coop\/[a-f0-9]{32}$/;
const PEER=/^[a-f0-9]{32}$/;
const object=value=>value!==null && typeof value==='object' && !Array.isArray(value);
const requestId=value=>typeof value==='string' && /^[\x20-\x7e]{1,128}$/.test(value);

function boundedDepth(value) {
  const pending=[{value,depth:0}];
  while(pending.length) {
    const item=pending.pop();
    if(item.depth>32)return false;
    if(item.value && typeof item.value==='object')
      for(const child of Object.values(item.value))pending.push({value:child,depth:item.depth+1});
  }
  return true;
}

async function createRelayServer({host='127.0.0.1',port=0,limits={}}={}) {
  const config={...DEFAULT_LIMITS,...limits};
  for(const [name,value] of Object.entries(config)) {
    if(!Object.hasOwn(DEFAULT_LIMITS,name) || !Number.isSafeInteger(value) || value<1)
      throw new Error('Invalid relay limit: '+name);
  }
  if(!Number.isInteger(port) || port<0 || port>65535)throw new Error('Invalid relay port');
  const peers=new Map(),rooms=new Map();
  let stopping=false;
  let outboundTokens=config.outboundBurstBytes,outboundRefilledAt=performance.now();
  const health=JSON.stringify({ok:true,protocol:'did-relay-1',version:'1.0.0'});
  const server=http.createServer({maxHeaderSize:8192},(req,res)=>{
    res.setHeader('Cache-Control','no-store');
    res.setHeader('Content-Type','application/json');
    if(req.method==='GET' && req.url==='/healthz') {
      res.writeHead(stopping?503:200);res.end(health);
    } else {res.writeHead(404);res.end('{"error":"not_found"}');}
  });
  server.requestTimeout=5000;
  server.headersTimeout=5000;
  server.keepAliveTimeout=5000;
  server.maxConnections=config.maxConnections+8;
  const wss=new WebSocketServer({noServer:true,clientTracking:false,
    maxPayload:config.maxFrameBytes,perMessageDeflate:false});

  function sendEncoded(peer,text) {
    peer.socket.send(text,error=>{if(error)peer.socket.terminate();});
  }
  function transmit(peer,frame) {
    if(!peers.has(peer.id) || peer.socket.readyState!==WebSocket.OPEN)return false;
    const text=JSON.stringify(frame),size=Buffer.byteLength(text);
    if(size>config.maxFrameBytes || peer.socket.bufferedAmount+size>config.maxBufferedBytes) {
      peer.socket.close(4011,'slow_consumer');return false;
    }
    sendEncoded(peer,text);
    return true;
  }
  function deny(peer,code,closeCode=1008) {
    if(peer.rejected)return;
    peer.rejected=true;
    transmit(peer,{type:'error',code});
    peer.socket.close(closeCode,code);
  }
  function forward(sender,recipients,frame) {
    const text=JSON.stringify(frame),size=Buffer.byteLength(text);
    // Adding trusted routing metadata must never turn a sender's large frame
    // into a slow-consumer error on an innocent recipient.
    if(size>config.maxFrameBytes)return deny(sender,'frame_too_large',1009);
    const targets=[];
    for(const peer of recipients) {
      if(!peers.has(peer.id) || peer.socket.readyState!==WebSocket.OPEN)continue;
      if(peer.socket.bufferedAmount+size>config.maxBufferedBytes)
        peer.socket.close(4011,'slow_consumer');
      else targets.push(peer);
    }
    // Reserve the complete fanout before sending any copy. Server frames are
    // unmasked and uncompressed, hence 2 or 4 header bytes for these payloads.
    const cost=(size+(size<126?2:4))*targets.length;
    const now=performance.now();
    outboundTokens=Math.min(config.outboundBurstBytes,
      outboundTokens+(now-outboundRefilledAt)*config.outboundBytesPerSecond/1000);
    outboundRefilledAt=now;
    if(cost>outboundTokens)return deny(sender,'transfer_limit',4011);
    outboundTokens-=cost;
    for(const peer of targets)sendEncoded(peer,text);
  }
  function removePeer(peer) {
    if(!peers.delete(peer.id))return;
    clearTimeout(peer.joinTimer);
    const room=peer.room;
    peer.room=null;
    if(!room || room.deleting)return;
    if(room.host===peer) {
      room.deleting=true;
      rooms.delete(room.channel);
      for(const member of room.members.values()) {
        member.room=null;
        if(member!==peer) {
          transmit(member,{type:'presence',channel:room.channel,joined:[],left:[{peerId:peer.id}]});
          member.socket.close(1001,'host_left');
        }
      }
      room.members.clear();
    } else {
      room.members.delete(peer.id);
      for(const member of room.members.values())
        transmit(member,{type:'presence',channel:room.channel,joined:[],left:[{peerId:peer.id}]});
    }
  }
  function subscribe(peer,frame) {
    if(typeof frame.channel!=='string' || !CHANNEL.test(frame.channel) ||
      typeof frame.hostPeerId!=='string' || !PEER.test(frame.hostPeerId) ||
      typeof frame.create!=='boolean' || !requestId(frame.requestId))return deny(peer,'invalid_frame');
    if(peer.room)return deny(peer,'already_subscribed');
    let room=rooms.get(frame.channel);
    if(frame.create) {
      if(frame.hostPeerId!==peer.id || room)return deny(peer,'forbidden');
      if(rooms.size>=config.maxRooms)return deny(peer,'room_limit');
      room={channel:frame.channel,host:peer,members:new Map(),deleting:false};
      rooms.set(frame.channel,room);
    } else {
      if(!room)return deny(peer,'room_not_found');
      if(room.host.id!==frame.hostPeerId)return deny(peer,'forbidden');
      if(room.members.size>=config.maxPeersPerRoom)return deny(peer,'room_full');
    }
    clearTimeout(peer.joinTimer);
    peer.room=room;
    room.members.set(peer.id,peer);
    transmit(peer,{type:'ack',requestId:frame.requestId,ok:true});
    const members=[...room.members.keys()].map(peerId=>({peerId}));
    transmit(peer,{type:'presence',channel:room.channel,joined:members,left:[]});
    for(const member of room.members.values())if(member!==peer)
      transmit(member,{type:'presence',channel:room.channel,joined:[{peerId:peer.id}],left:[]});
  }
  function message(peer,bytes,isBinary) {
    if(stopping || peer.rejected)return;
    if(isBinary)return deny(peer,'invalid_frame');
    const now=performance.now();
    peer.tokens=Math.min(config.burst,peer.tokens+(now-peer.refilledAt)*config.ratePerSecond/1000);
    peer.refilledAt=now;
    if(peer.tokens<1)return deny(peer,'rate_limit',4011);
    peer.tokens-=1;
    let frame;
    try{frame=JSON.parse(bytes.toString('utf8'));}catch{return deny(peer,'invalid_frame');}
    if(!object(frame) || !boundedDepth(frame) || typeof frame.type!=='string')return deny(peer,'invalid_frame');
    if(frame.type==='subscribe')return subscribe(peer,frame);
    const room=peer.room;
    if(!room)return deny(peer,'not_subscribed');
    if(!object(frame.data))return deny(peer,'invalid_frame');
    if(frame.type==='publish') {
      if(room.host!==peer || frame.channel!==room.channel)return deny(peer,'forbidden');
      // The caller's `from` is ignored; identities come only from live sockets.
      forward(peer,[...room.members.values()].filter(member=>member!==peer),
        {type:'message',channel:room.channel,from:peer.id,data:frame.data});
    } else if(frame.type==='send') {
      if(typeof frame.to!=='string' || !PEER.test(frame.to))return deny(peer,'invalid_frame');
      const target=room.members.get(frame.to);
      if(!target || (peer!==room.host && target!==room.host))return deny(peer,'forbidden');
      forward(peer,[target],{type:'direct',from:peer.id,data:frame.data});
    } else return deny(peer,'invalid_frame');
  }

  wss.on('connection',socket=>{
    let id;
    do{id=crypto.randomBytes(16).toString('hex');}while(peers.has(id));
    const peer={id,socket,room:null,tokens:config.burst,refilledAt:performance.now(),alive:true,rejected:false};
    peers.set(id,peer);
    peer.joinTimer=setTimeout(()=>deny(peer,'join_timeout'),config.unauthenticatedTimeoutMs);
    peer.joinTimer.unref();
    socket.on('pong',()=>{peer.alive=true;});
    socket.on('message',(bytes,binary)=>message(peer,bytes,binary));
    socket.on('close',()=>removePeer(peer));
    // ws emits an error for oversized payloads before closing with code 1009.
    socket.on('error',()=>{});
    transmit(peer,{type:'welcome',peerId:id,maxMessageSize:config.maxFrameBytes});
  });
  server.on('upgrade',(req,socket,head)=>{
    if(stopping || peers.size>=config.maxConnections) {
      socket.end('HTTP/1.1 503 Service Unavailable\r\nConnection: close\r\nContent-Length: 0\r\n\r\n');return;
    }
    if(req.method!=='GET' || !['/','/ws'].includes(req.url)) {
      socket.end('HTTP/1.1 404 Not Found\r\nConnection: close\r\nContent-Length: 0\r\n\r\n');return;
    }
    wss.handleUpgrade(req,socket,head,ws=>wss.emit('connection',ws,req));
  });
  const heartbeat=setInterval(()=>{
    for(const peer of peers.values()) {
      if(!peer.alive) {peer.socket.terminate();continue;}
      peer.alive=false;
      if(peer.socket.readyState===WebSocket.OPEN)peer.socket.ping();
    }
  },config.heartbeatMs);
  heartbeat.unref();
  try {
    await new Promise((resolve,reject)=>{
      server.once('error',reject);
      server.listen(port,host,()=>{server.removeListener('error',reject);resolve();});
    });
  } catch(error) {clearInterval(heartbeat);wss.close();throw error;}
  const address=server.address();
  const publicHost=host==='0.0.0.0'?'127.0.0.1':host.includes(':')?'['+host+']':host;
  let closePromise;
  return {port:address.port,url:'ws://'+publicHost+':'+address.port,close:()=>{
    if(closePromise)return closePromise;
    stopping=true;clearInterval(heartbeat);
    for(const peer of peers.values()) {clearTimeout(peer.joinTimer);peer.socket.close(1001,'service_shutdown');}
    const force=setTimeout(()=>{for(const peer of peers.values())peer.socket.terminate();},1000);
    force.unref();
    closePromise=Promise.all([
      new Promise(resolve=>wss.close(resolve)),
      new Promise(resolve=>{server.close(resolve);server.closeIdleConnections();})
    ]).then(()=>{clearTimeout(force);});
    return closePromise;
  }};
}

module.exports={createRelayServer,DEFAULT_LIMITS};
