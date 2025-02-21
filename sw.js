self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/index.css",
        "/index.js",
        "/icons/Chemistry-Lab-icon-192x192.png",
        "/icons/Chemistry-Lab-icon-512x512.png"
      ]);
    })
  );
  console.log("Service Worker نصب شد.");
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
