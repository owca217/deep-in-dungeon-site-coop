'use strict';

const {createRelayServer}=require('./relay.cjs');

async function main() {
  const value=process.env.PORT || '10000';
  if(!/^\d+$/.test(value) || Number(value)<1 || Number(value)>65535)throw new Error('Invalid PORT');
  const relay=await createRelayServer({host:'0.0.0.0',port:Number(value)});
  // No invitation, peer identifiers, messages, or account keys are logged.
  console.log('Deep in Dungeon relay ready; protocol did-relay-1; port '+relay.port);
  let stopping=false;
  const stop=()=>{
    if(stopping)return;
    stopping=true;
    relay.close().then(()=>{process.exitCode=0;}).catch(()=>{process.exitCode=1;});
  };
  process.once('SIGTERM',stop);
  process.once('SIGINT',stop);
}

main().catch(()=>{console.error('Relay startup failed.');process.exitCode=1;});
