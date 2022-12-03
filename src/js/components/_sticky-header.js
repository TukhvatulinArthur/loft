let lastScroll = 0;

const headerBottom = document.querySelector(".header__bottom");
const headerTop = document.querySelector(".header__top");
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  //Текущее положение скролла больше предыдущего, не содержит класс хидден и срабатывает после прохождения двух скроллов (200 единиц)
  if (document.documentElement.scrollTop > lastScroll && !headerBottom.classList.contains("_show") && document.documentElement.scrollTop > 200) {
    header.style.minHeight = `${headerBottom.offsetHeight + headerTop.offsetHeight}px`;
    headerBottom.classList.remove("_hidden");
    headerBottom.classList.add("_show");
  }

  //Текущее положение скролла меньше предыдущего и содержит класс хидден
  if (document.documentElement.scrollTop < lastScroll && headerBottom.classList.contains("_show")) {
    headerBottom.classList.add("_hidden");
    headerBottom.classList.remove("_show");
  }
  if (document.documentElement.scrollTop < 200) {
    header.style.minHeight = ``;
    headerBottom.classList.remove("_show");
    headerBottom.classList.remove("_hidden");
  }
  lastScroll = document.documentElement.scrollTop;
});
