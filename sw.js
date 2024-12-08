//asignar nombre y version de la cache
const CACHE_NAME = 'Alexis Palma Zapote';
//ficheros a cachear
var urlsToCache = [
    './',
    './css/style.css',
    './img/favicon1.png',
    './motos/36c7a7f449fc511a0093efba580f7826.webp',
    './motos/mt.jpg',
    './motos/r6.jpg',
    './img/facebookr.jpeg',
    './img/whatsapp.jpeg',
    './img/twitter.jpeg',
    './img/APZ.10.png',
    './img/APZ.9.png',
    './img/APZ.8.png',
    './img/APZ.7.png',
    './img/APZ.6.png',
    './img/APZ.5.png',
    './img/APZ.4.png',
    './img/APZ.3.png',
    './img/APZ.2.png',
    './img/APZ.1.png',
];



self.addEventListener('install',e=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
            .then(() =>{
                self.skipWaiting();
        });
        })
        .catch(err => console.log('no se ha registrado el cache' , err))
    );
});                         

//Evento fetch
self.addEventListener('fetch', e => {

	e.respondWith(
		caches.match(e.request)
		.then(res =>{
			if(res){
				return res;
			}
			return fetch(e.request);
		})
	);
});       