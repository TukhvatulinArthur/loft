import Swiper, { Navigation, Thumbs } from "swiper";

const mainSlider = document.querySelector(".main__slider");
const cardSlider = document.querySelector(".card__slider");
const cardSliderThumbs = document.querySelector(".card__slider-thumbs");

if (mainSlider) {
  new Swiper(mainSlider, {
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if (cardSlider && cardSliderThumbs) {
  const sliderThumbs = new Swiper(cardSliderThumbs, {
    spaceBetween: 10,
    slidesPerView: 3,
    direction: "horizontal",
    breakpoints: {
      640: {
        slidesPerView: 4,
      },
    },
  });
  new Swiper(cardSlider, {
    modules: [Thumbs, Navigation],
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: sliderThumbs,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
