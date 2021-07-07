// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// const workboxSw =  new self.WorkboxSw()

// workboxSw.router.registerRoute(
//     'https://test.org/css/(.*)',
//     workboxSw.strategies.cacheFirst()
// )

self.addEventListener('fetch', e => {
    if(e.request.headers.get('save-data')) {
        if(e.request.url.includes('fonts.googleapis.com')) {
            e.respondWith(
                new Response('', {status: 417, statusText: 'Ignore fonts to save data'})
            )
        }
    }
})

// self.addEventListener('fetch', e => {
//     if(/\.jpg$|.png$/.test(e.request.url)) {
//         var supportWebp = false;
//         if(e.request.headers.has('accept')) {
//             supportWebp = e.request.headers
//             .get('accept').includes('webp');
//         }

//         if(supportWebp) {
//             var req = e.request.clone();
//             var returnUrl = req.url.substr(0, req.url.lastIndexOf('.')) + '.webp';
//             e.respondWith(
//                 fetch(returnUrl, {
//                     mode: 'no-cors'
//                 })
//             )
//         }
//     }
// })

// self.addEventListener('fetch', (e) => {
//     if(/\.jpg$/.test(e.request.url)) {
//         e.respondWith(
//             new Response('<p>This is a response that comes from your service worker!</p>', {
//                 headers: {'Content-Type': 'text/html'}
//             })
//         )
//     }
// })


// var cacheName = 'helloWorld'

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

// self.addEventListener('fetch', e => {
//     e.respondWith(
//         caches.match(e.request) 
//         .then((res) => {
//             if(res) {
//                 return res
//             }
//             var requestToCache = e.request.clone()
//             return fetch(requestToCache).then(res => {
//                 if(!res || res.status !== 200) {
//                     return res
//                 }

//                 var responseToCache = res.clone();

//                 caches.open(cacheName).then(
//                     cache => {
//                         cache.put(requestToCache, responseToCache)
//                     }
//                 )
                
//                 return res
//             })
//         })
//     )
// })
