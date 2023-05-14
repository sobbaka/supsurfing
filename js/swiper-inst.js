import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const swiperInst = new Swiper('.swiper-inst', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,

  // // Navigation arrows
  navigation: {
    nextEl: '.swiper-inst-next',
    prevEl: '.swiper-inst-prev',
  },

});
