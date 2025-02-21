function applyTheme(theme) {
  const isLightTheme = theme === "light";
  document.body.classList.toggle("light-theme", isLightTheme);
  
  const color = isLightTheme ? "#e2e2e2" : "#0f172a"; // رنگ برای حالت روز و شب
  document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
  document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", theme === "dark" ? "black-translucent" : "default");
  document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", color);
  document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", color);
}

// اجرا هنگام بارگذاری صفحه برای اطمینان از اینکه Title Bar همیشه هماهنگ است
function loadTheme() {
  let savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
}

// اجرا هنگام بارگذاری هر صفحه
document.addEventListener("DOMContentLoaded", loadTheme);
window.addEventListener("pageshow", function (event) {
  if (event.persisted) { // اگر صفحه از کش لود شده بود، دوباره تم را اعمال کن
      loadTheme();
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("Service Worker ثبت شد."))
    .catch(err => console.error("خطا در ثبت Service Worker:", err));
}
