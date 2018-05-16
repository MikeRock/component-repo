const version = '0'
const static = []
let cacheName = 'cache'
self.addEventListener('install',(e) => {
const version = new URL(location).searchParams.get('version');
cacheName += version 
console.log(version,"CURRENT VERSION")
const param = atob(new URL(location).searchParams.get('param'));
const paramObj = JSON.parse(param)
e.waitUntil(caches.open(cacheName).then(cache => {
    return cache.addAll(['/',...paramObj]).then(() => {
        console.log(`INSTALL COMPLETED`)
    })
}))
})
self.addEventListener('activate',(e) => {
  e.waitUntil(
    caches.open(cacheName)
      .then(cache => Promise.all(
        static.map(url => {
          // cache-bust using a random query string
          return fetch(`${url}?${Math.random()}`).then(response => {
            // fail on 404, 500 etc
            if (!response.ok);
            else return cache.put(url, response);
          })
        })
      ))
  );
})
self.addEventListener("fetch", function(e) {
    if (e.request.method !== 'GET') {
      console.log('WORKER: fetch e ignored.', e.request.method, e.request.url);
      return;
    }
    e.respondWith(
      caches.match(e.request).then((cached) => {
        if(cached) console.log(`GOT ${cached.url} FROM CACHE`)
          let networked = fetch(e.request)
            .then(fetchedFromNetwork, unableToResolve)
            .catch(unableToResolve);
          return cached || networked;
  
          function fetchedFromNetwork(response) {
            let cacheCopy = response.clone();

            caches.open(cacheName).then((cache) => {
                cache.put(e.request, cacheCopy);
              })
              .then(function() {
                console.log('WORKER: fetch response stored in cache.', e.request.url);
              });
            return response;
          }
  
          function unableToResolve () {
            console.log('WORKER: fetch request failed in both cache and network.');
            return new Response('<h1>Service Unavailable</h1>', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/html'
              })
            });
          }
        })
    );
  });