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
  loop: true,
  loopedSlides: 15,
  grabCursor: true,
  speed: 1500,
  autoplay: {
    delay: 0, 
    waitForTransition: false 
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
