const categoriesSlider = new Swiper('.categories__swiper', {
  // Optional parameters
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.categories-slider__button--next',
    prevEl: '.categories-slider__button--prev',
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
   autoHeight: true,
   slidesPerView: 4,
   spaceBetween: 27,
});
const unreleasedSlider = new Swiper('.unreleased__swiper', {
  // Optional parameters
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.unreleased-slider__button--next',
    prevEl: '.unreleased-slider__button--prev',
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
   autoHeight: true,
   slidesPerView: 5,
   spaceBetween: 30,
});
