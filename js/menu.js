document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector(".header");
  const logo = document.querySelector(".header__logo");
  const menu = document.querySelector(".header__burger");
  const controls = document.querySelector(".header__controls");

  menu.addEventListener("click", () => {
    header.classList.toggle("header__state_active");
    logo.classList.toggle("none");
    controls.classList.toggle("none");
  })
})
