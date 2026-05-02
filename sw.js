const CACHE = 'anatomy-atlas-v1';

const PRECACHE = [
    './',
    './index.html',
    './manifest.json',
    './images/body-overview.png',
    './images/brain-detail.png',
    './images/cns-pns-overview.png',
    './images/region-abdomen.png',
    './images/region-back.png',
    './images/region-chest.png',
    './images/region-head.png',
    './images/region-neck.png',
    './images/region-pelvis.png',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE).then(c => c.addAll(PRECACHE))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cached =>
            cached || fetch(event.request).then(response => {
                const clone = response.clone();
                caches.open(CACHE).then(c => c.put(event.request, clone));
                return response;
            }).catch(() => caches.match('./index.html'))
        )
    );
});
