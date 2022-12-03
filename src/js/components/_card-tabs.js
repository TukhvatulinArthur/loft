const tabsWrapper = document.querySelector(".card__info-tabs-wrapper");

if (tabsWrapper) {
  tabsWrapper.addEventListener("click", function (e) {
    if (e.target.classList.contains("tab")) {
      const tab = e.target;
      const tabs = tabsWrapper.querySelectorAll(".tab");
      const tabContent = tabsWrapper.querySelectorAll(".content__inner");

      //Пробегаемся по всем табам(button'ам) и если таб не тот на который мы нажали удали у него класс
      tabs.forEach((item) => {
        if (item !== tab) {
          item.classList.remove("_active");
        } else {
          item.classList.add("_active");
        }
      });

      //Пробегаемся по всем контентам табов и если дата атрибут нажатого таба совпадает с дата атрибутом контента добавь ему класс
      tabContent.forEach((item) => {
        if (item.dataset.tabContent === tab.dataset.tabTarget) {
          item.classList.add("_active");
        } else {
          item.classList.remove("_active");
        }
      });
    }
  });
}
