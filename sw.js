self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('', { status: 503, statusText: "Service Unavailable" });
    })
  );
});
