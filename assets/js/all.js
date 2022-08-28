"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); // Swiper

var swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var swiper2 = new swiper2(".mySwiper2", {
  slidesPerView: "4",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
//# sourceMappingURL=all.js.map
