var cacheName = 'helloWorld'
self.addEventListener('install', event => {
    event.waitUtil(
        caches.open(cacheName)
        .then(cache => {
            cache.addAll([
                '/sw.js',
                '/images/unicorn.jpg'
            ])
        })
    )
})