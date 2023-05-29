document.addEventListener('DOMContentLoaded', () => {


  const body = document.querySelector("body");

  const header = document.querySelector(".header");
  const logo = document.querySelector(".header__logo");
  const menu = document.querySelector(".header__burger");
  const controls = document.querySelector(".header__controls");

  const links = document.querySelectorAll(".navigation__link");

  menu.addEventListener("click", () => {
    menu.classList.toggle("header__burger_active");
    header.classList.toggle("header__state_active");
    logo.classList.toggle("none");
    controls.classList.toggle("header__controls_hidden");
    body.classList.toggle("body__overflow_hidden");
  })

  links.forEach(link => {
    link.addEventListener("click", () => {

      if (window.innerWidth < 950) {
        menu.classList.toggle("header__burger_active");
        header.classList.toggle("header__state_active");
        logo.classList.toggle("none");
        controls.classList.toggle("header__controls_hidden");
        document.querySelector(".menuToggle__input").checked = false;
        body.classList.toggle("body__overflow_hidden");
      }

    })
  })
})
