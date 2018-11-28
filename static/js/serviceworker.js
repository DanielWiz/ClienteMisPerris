// var cacheName = 'PerrosCache';
// var filesToCache = [
//     './',
//     '.', 
//     '/',
//     './adopcion.html',
//     './base.html',
//     './index.html',
//     './login.html',
//     './logout.html',
//     './perros_detalles.html',
//     './registro.html',
//     '/static/js/carusel.js',
//     '/static/js/menu.js',
//     '/static/js/serviceworker.js',
//     '/static/img/logo.png',
//     '/static/img/perro1.jpg',
//     '/static/img/perro2.jpg',
//     '/static/img/perro3.jpg',
//     '/static/img/pg1.jpg',
//     '/static/img/pg2.jpg',
//     '/static/img/pg3.jpg',
//     '/static/usuarios/adopcion.css',
//     '/static/usuarios/carusel.css',
//     '/static/usuarios/detalles.css',
//     '/static/usuarios/login.css',
//     '/static/usuarios/menu.css',
//     '/static/usuarios/registro.css',
//     '/static/usuarios/tablas.css',
//    ];
  
// self.addEventListener('install', function(e) {
//   console.log('[ServiceWorker] Install');
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       console.log('[ServiceWorker] Caching app shell');
//       return cache.addAll(filesToCache);
//     })
//   );
// });

// self.addEventListener('activate', function(e) {
//     console.log('[ServiceWorker] Activate');
// });

// self.addEventListener('activate', function(e) {
//     console.log('[ServiceWorker] Activate');
//     e.waitUntil(
//       caches.keys().then(function(keyList) {
//         return Promise.all(keyList.map(function(key) {
//           if (key !== cacheName) {
//             console.log('[ServiceWorker] Removing old cache', key);
//             return caches.delete(key);
//           }
//         }));
//       })
//     );
//     return self.clients.claim();
// });

// self.addEventListener('fetch', function(e) {
//    console.log('[ServiceWorker] Fetch', e.request.url);
//    e.respondWith(
//         caches.match(e.request).then(function(response) {
//         return response || fetch(e.request);
//         })
//     );
// });


var staticCacheName = 'PaginasCache';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  var requestUrl = new URL(event.request.url);
    if (requestUrl.origin === location.origin) {
      if ((requestUrl.pathname === '/')) {
        event.respondWith(caches.match('/'));
        return;
      }
    }
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/registro'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  var requestUrl = new URL(event.request.url);
    if (requestUrl.origin === location.origin) {
      if ((requestUrl.pathname === '/')) {
        event.respondWith(caches.match('/registro'));
        return;
      }
    }
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
});
  