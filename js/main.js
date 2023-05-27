document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const subtitle = document.querySelector('.hero__subtitle');
  const connect = document.querySelector('.connect');
  const connectLinks = document.querySelector(".connect__links");

  alignButton()
  connect.classList.remove("none");

  window.addEventListener('resize', () => {
    let fixBtnAlign;
    clearTimeout(fixBtnAlign);
    fixBtnAlign = setTimeout(function () {
      alignButton();
    }, 100);
  })


  function alignButton() {
    if (screen.width > 650) {
      connect.style.top = (subtitle.offsetTop + subtitle.offsetHeight) * 1.1 + 'px';
      connect.style.left = screen.width > 1280 ? header.offsetLeft + 'px' : header.offsetLeft + 10 + 'px';
    } else {
      connect.style.left = 0;
    }
  }


  connect.addEventListener("click", () => {
    connectLinks.classList.toggle("connect__links_hidden");
  })


  const about = document.querySelector('.about');
  let prevScrollpos = window.pageYOffset;

  window.addEventListener('scroll', () => {

    const header = document.querySelector('.header');

    console.log(header);

    if (!header.classList.contains("header__state_active")) {

      const aboutPosition = about.getBoundingClientRect().top + window.scrollY;
      const headerPosition = header.getBoundingClientRect().top + window.scrollY;
      connectLinks.classList.add("connect__links_hidden");


      if (headerPosition >= aboutPosition - 78) {
        header.classList.add("header__state_dark");
      } else {
        header.classList.remove("header__state_dark");
      }

      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        header.classList.remove("header__state_hidden");
      } else {
        header.classList.add("header__state_hidden");
      }
      prevScrollpos = currentScrollPos;

    }


  });
});


