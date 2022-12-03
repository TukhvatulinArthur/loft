document.querySelector(".menu-burger").addEventListener("click", function () {
  document.querySelector(".header__menu").classList.add("_active");
});
document.querySelector(".header__menu-button-close").addEventListener("click", function () {
  document.querySelector(".header__menu").classList.remove("_active");
});
