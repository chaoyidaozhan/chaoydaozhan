var cacheName = 'helloWorld'
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            //缓存
            cache.addAll([
                './sw.js',
                './images/unicorn.jpg'
            ])
        })
    )
})

//读取缓存
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(res => {
            if(response) {
                return response;
            }
            return fetch(event.request);
        })
    )
})