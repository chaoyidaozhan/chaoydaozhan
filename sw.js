self.addEventListener('fetch', event => {
    if(/\.jpg$/.test(event.request.url)) {
        event.respondWith(fetch('./chaoyidaozhan/images/unicorn.jpg'))
    }
})