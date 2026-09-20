const CACHE='ethusdc-net-risk-v2';
const APP=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 if(e.request.mode==='navigate'){
  e.respondWith(caches.match('./index.html').then(r=>r||fetch(e.request).then(resp=>{const c=resp.clone();caches.open(CACHE).then(x=>x.put('./index.html',c));return resp})));
  return;
 }
 const u=new URL(e.request.url);
 if(u.origin===self.location.origin)e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const c=resp.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return resp})));
});