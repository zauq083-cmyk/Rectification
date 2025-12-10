self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("wallet-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/wallet-page.html",
        "/style.css",
        "/script.js"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
