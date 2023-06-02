document.addEventListener('DOMContentLoaded', () => {

  const blockHero = document.querySelector('.hero');
  const connect = document.querySelector('.connect');
  const header = document.querySelector('.header');
  const subtitle = document.querySelector('.hero__subtitle');
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const blockHeroHeight = blockHero.offsetHeight;
  const connectPositionTop = (subtitle.offsetTop + subtitle.offsetHeight) * 1.1 + 'px';
  //const connectPositionBottom = screenHeight - 100 + "px";
  const connectPositionBottom = screenHeight > 950 ? screenHeight - 100 + "px" : screenHeight - 150 + "px";



  connect.setAttribute('data-istop', 'true');


  function initialPosition() {
    if (screenWidth > 650) {
      connect.style.left = screen.width > 1280 ? header.offsetLeft + 'px' : header.offsetLeft + 10 + 'px';
      connect.style.top = window.pageYOffset < blockHeroHeight ? connectPositionTop : connectPositionBottom;
      if (window.pageYOffset > blockHeroHeight) connect.dataset.istop = 'false';

    } else {
      connect.style.left = 0;
      //connect.style.top = connectPositionBottom;
    }
  }

  initialPosition();
  connect.classList.remove("none");


  function moveConnect(startPos, finalPos) {
    connect.animate(
      [
        { top: startPos },
        { top: finalPos }
      ],
      {
        duration: 2000, // Animation duration in milliseconds
        easing: "ease",
        fill: "forwards"
      }
    );
  }

  window.addEventListener('scroll', () => {
    if (screenWidth > 650) {
      if (window.pageYOffset > blockHeroHeight - 200) {
        if (connect.dataset.istop === 'true') moveConnect(connectPositionTop, connectPositionBottom);
        connect.dataset.istop = 'false';
      } else {
        if (connect.dataset.istop === 'false') moveConnect(connectPositionBottom, connectPositionTop);
        connect.dataset.istop = 'true';
      }
    }
  });
})
