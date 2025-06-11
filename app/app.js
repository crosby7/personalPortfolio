import {loadPage, hamburgerMenu} from "../services/services.js";

function openHamburger() {
  hamburgerMenu.classList.toggle("openHamburger");
}

function initializeListeners() {
  window.addEventListener("hashchange", loadPage);
  loadPage();

  document.getElementById("hamburgerMenu").addEventListener("click", openHamburger);
}

// on ready, initialize the listeners
document.addEventListener("DOMContentLoaded", function () {
  initializeListeners();

  // svg animation
  const bg1 = document.querySelector('.portBg1');
  const bg2 = document.querySelector('.portBg2');

  window.addEventListener('mousemove', function (e) {
    const percent = e.clientX / window.innerWidth;

    // first background goes right as mouse moves left
    if (bg1) {
      bg1.style.transform = `translateX(${(1 - percent) * 30}px)`;
    }
    // second background goes left as mouse moves right
    if (bg2) {
      bg2.style.transform = `translateX(${-percent * 30}px)`;
    }
  });
});