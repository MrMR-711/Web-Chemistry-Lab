/*
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements. See the NOTICE file
distributed with this work for additional information regarding
copyright ownership. The ASF licenses this file to you under
the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may
obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
  navigator.serviceWorker.register('../sw.js')
    .then(() => console.log("Service Worker ثبت شد."))
    .catch(err => console.error("خطا در ثبت Service Worker:", err));
}

// چک کردن زبان ذخیره شده هنگام لود اولیه
document.addEventListener('DOMContentLoaded', function() {
  const preferredLang = localStorage.getItem('preferredLang');
  const currentPath = window.location.pathname;

  if(preferredLang === 'fa' && !currentPath.includes('./fa')) {
    window.location.replace('./');
  }
  else if(preferredLang === 'en' && currentPath.includes('./')) {
    window.location.replace('../');
  }
});
