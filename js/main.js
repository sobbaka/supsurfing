document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const subtitle = document.querySelector('.hero__subtitle');
  const connect = document.querySelector('.connect');
  const connectLinks = document.querySelector(".connect__links");

  connect.style.left = header.offsetLeft + 'px';
  connect.style.top = (subtitle.offsetTop + subtitle.offsetHeight) * 1.1 + 'px';


  connect.addEventListener("click", () => {
    connectLinks.classList.toggle("connect__links_hidden");
  })




  const about = document.querySelector('.about');
  let prevScrollpos = window.pageYOffset;

  window.addEventListener('scroll', () => {
    const aboutPosition = about.getBoundingClientRect().top + window.scrollY;
    const headerPosition = header.getBoundingClientRect().top + window.scrollY;

    connectLinks.classList.add("connect__links_hidden");

    if (headerPosition >= aboutPosition - 78) {
      header.classList.add("header__state_dark");
      //header.style.backgroundColor = 'rgba(54, 53, 53, 0.418)';
    } else {
      header.classList.remove("header__state_dark");
      //header.style.backgroundColor = 'transparent';
    }

    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.classList.remove("header__state_hidden");
      //header.style.top = "25px";
    } else {
      header.classList.add("header__state_hidden");
      //header.style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  });



  // let prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   let currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     header.style.top = "25px";
  //   } else {
  //     header.style.top = "-80px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // }
});


