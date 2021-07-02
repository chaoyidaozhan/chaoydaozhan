var cacheName = 'helloWorld'
// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(cacheName)
//         .then(cache => {
//             //缓存
//             cache.addAll([
//                 './sw.js',
//                 './images/unicorn.jpg'
//             ])
//         })
//     )
// })

// //读取缓存
// self.addEventListener('fetch', event => {
//     event.respondWith(
//         caches.match(event.request)
//         .then(res => {
//             if(res) {
//                 return res;
//             }
//             return fetch(event.request);
//         })
//     )
// })

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request) 
        .then((res) => {
            if(res) {
                return res
            }
            var requestToCache = e.request.clone()
            return fetch(requestToCache).then(res => {
                if(!res || res.status !== 200) {
                    return res
                }

                var responseToCache = response.clone();

                caches.open(cacheName).then(
                    cache => {
                        cache.put(requestToCache, responseToCache)
                    }
                )
                
                return response
            })
        })
    )
})
