$(function() {
  console.log('Hello Bootstrap5');
});

// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 4,
  spaceBetween: 1,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  
})
