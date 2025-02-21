document.addEventListener("DOMContentLoaded", function() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const isLightTheme = savedTheme === "light";

  document.body.classList.toggle("light-theme", isLightTheme);
  document.getElementById("theme-toggle").checked = savedTheme === "dark";

  // تنظیم رنگ اولیه برای متا تگها
  const initialColor = isLightTheme ? "#e2e2e2" : "#0f172a"; // رنگ جدید برای حالت روز
  document.querySelector('meta[name="theme-color"]').setAttribute("content", initialColor);
  document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", savedTheme === "dark" ? "black-translucent" : "default");
  document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", initialColor);
  document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", initialColor);
});

document.getElementById("theme-toggle").addEventListener("change", function() {
  const newTheme = this.checked ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  document.body.classList.toggle("light-theme", newTheme === "light");

  // تغییر متا تگها
  const color = newTheme === "light" ? "#e2e2e2" : "#0f172a"; // رنگ جدید برای حالت روز
  // آپدیت theme-color برای مرورگرهای معمولی و PWA
  document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
  // آپدیت برای مرورگرهای اپل (Safari)
  document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", newTheme === "dark" ? "black-translucent" : "default");
  // آپدیت برای مرورگرهای مایکروسافت (Edge)
  document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", color);
  document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", color);
});

// کش کردن منابع در زمان نصب
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/index.css',
          '/index.js',
          '/icon-192.png',
          '/icon-512.png'
        ]);
      })
    );
  });
  
  // پاسخ به درخواستها از کش یا شبکه
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });