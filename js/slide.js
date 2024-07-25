var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  slidesPerView:2,
  spaceBetween:15,
  breakpoints: {
    // when window width is >= 320px
    991: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
});