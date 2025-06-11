import { loadPage, hamburgerMenu } from "../services/services.js";

function openHamburger() {
  hamburgerMenu.classList.toggle("openHamburger");
}

function initializeListeners() {
  window.addEventListener("hashchange", loadPage);
  loadPage();

  document
    .getElementById("hamburgerMenu")
    .addEventListener("click", openHamburger);
}

// on ready, initialize the listeners
document.addEventListener("DOMContentLoaded", function () {
  initializeListeners();

  // svg animation
  const bg = document.querySelector(".backgroundSvg");

  window.addEventListener("mousemove", function (e) {
    const percent = e.clientX / window.innerWidth;
    const percentY = e.clientY / window.innerHeight;

    const translateX = (1 - percentX) * 50;
    const translateY = (1 - percentY) * 50;

    bg.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
});
