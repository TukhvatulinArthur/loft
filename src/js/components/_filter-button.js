const catalogFilter = document.querySelector(".catalog__filter");

if (catalogFilter) {
  document.querySelector(".catalog__sort-filter-button").addEventListener("click", function () {
    catalogFilter.classList.add("_active");
  });

  document.querySelector(".catalog__filter-close-button").addEventListener("click", function () {
    catalogFilter.classList.remove("_active");
  });

  document.querySelector(".catalog__widget-show-more").addEventListener("click", function () {
    document.querySelectorAll(".catalog__widget-label-wrapper").forEach((item) => {
      if (item.classList.contains("_none")) {
        item.classList.remove("_none");
      }
    });
    this.classList.add("_none");
  });
}
