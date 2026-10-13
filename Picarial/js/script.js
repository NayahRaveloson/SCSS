const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

window.addEventListener("scroll", function () {
  if (header) {
    header.classList.toggle("header--scrolled", window.scrollY > 10);
  }
});

if (burger && menu) {
  burger.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("header__menu--open");

    burger.setAttribute("aria-expanded", isOpen);
    burger.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("header__menu--open");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Ouvrir le menu");
    });
  });

  document.addEventListener("click", function (event) {
    if (!header.contains(event.target)) {
      menu.classList.remove("header__menu--open");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Ouvrir le menu");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      menu.classList.remove("header__menu--open");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Ouvrir le menu");
    }
  });
}
