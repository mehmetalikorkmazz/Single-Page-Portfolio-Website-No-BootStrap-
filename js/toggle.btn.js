let toggleBtn = document.getElementById("toggle-btn");
let body = document.body;
let darkMode = localStorage.getItem("dark-mode");

function enableDarkMode() {
  body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
}

function disableDarkMode() {
  body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
}

if (darkMode === "enabled") {
  enableDarkMode();
}

document.querySelector("#toggle-btn").addEventListener("click", function () {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
