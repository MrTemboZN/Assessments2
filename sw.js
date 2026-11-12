// Caches the app and the detection model so it opens fast after the first visit.
const C = 'exam-guard-v1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png'])));
  self.skipWaiting();
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // Question files: always fetch fresh (lecturer may update them)
  if (u.pathname.endsWith('.json') && u.origin === location.origin && !u.pathname.endsWith('manifest.json')) return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
      if (r.ok || r.type === 'opaque') { const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); }
      return r;
    }))
  );
});
