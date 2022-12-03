import noUiSlider from "noUiSlider";

const slider = document.querySelector(".rangeSlider");
const startRange = document.querySelector(".catalog__widget-price_start");
const endRange = document.querySelector(".catalog__widget-price_end");

if (slider) {
  noUiSlider.create(slider, {
    start: [parseInt(startRange.textContent.replace(/ /g, "")), parseInt(endRange.textContent.replace(/ /g, ""))],
    step: 1000,
    connect: true,
    range: {
      min: parseInt(`${slider.dataset.min}`),
      max: parseInt(`${slider.dataset.max}`),
    },
  });
  slider.noUiSlider.on("update", function () {
    const [start, end] = slider.noUiSlider.get(true);

    startRange.textContent = start.toFixed().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
    endRange.textContent = end.toFixed().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
  });
}
