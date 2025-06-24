self.addEventListener('install', function(event) {
    console.log('Instalando!');
    event.waitUntil(
        caches.open('cache-v1.01').then(function(cache) {
            return cache.addAll([
                '/',
                '/index',
                '/img/logo.png',
                '/css/estilos.css',
                '/cronogramas',
                '/artigos',
                '/contatos'
                // '/autor.html'                
            ]);     
        })   
    ); 
});
  

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })   
    ); 
});
  