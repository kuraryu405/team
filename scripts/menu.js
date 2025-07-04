// hamburger.js
document.addEventListener("DOMContentLoaded", () => {
  const navArea = document.getElementById("navArea");
  const btn     = document.querySelector(".toggle-btn");
  const mask    = document.getElementById("mask");

  btn.addEventListener("click", () => {
    navArea.classList.toggle("open");
  });
  mask.addEventListener("click", () => {
    navArea.classList.toggle("open");
  });
});