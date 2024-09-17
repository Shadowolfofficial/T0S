const CACHE_NAME = "my-pwa-cache";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/vid.mp4",
  "/manifest.json",
  "/og.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
