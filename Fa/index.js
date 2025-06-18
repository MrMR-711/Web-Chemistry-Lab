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

  const color = isLightTheme ? "#e2e2e2" : "#0f172a";
  document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
  document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", theme === "dark" ? "black-translucent" : "default");
  document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", color);
  document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", color);
}

function loadTheme() {
  let savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
}

document.addEventListener("DOMContentLoaded", loadTheme);
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    loadTheme();
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js')
    .then(() => console.log("Service Worker ثبت شد."))
    .catch(err => console.error("خطا در ثبت Service Worker:", err));
}

document.addEventListener('DOMContentLoaded', function () {
  var savedLang = localStorage.getItem('language');
  if (savedLang === 'en') {
    window.location.href = '../';
  }
});