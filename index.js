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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log("Service Worker ثبت شد."))
    .catch(err => console.error("خطا در ثبت Service Worker:", err));
}
