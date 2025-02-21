self.addEventListener("install", (event) => {
  console.log("Service Worker نصب شد.");
});

self.addEventListener("fetch", (event) => {
  console.log("درخواست دریافت شد:", event.request.url);
});
