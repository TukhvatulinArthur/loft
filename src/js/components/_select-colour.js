const select = document.querySelector(".card__select-colour");

if (select) {
  select.addEventListener("change", function (e) {
    const options = select.querySelectorAll("option");
    options.forEach((item) => {
      if (item.value === this.value) {
        this.classList.add(`${item.value}`);
      } else {
        this.classList.remove(`${item.value}`);
      }
    });
  });
}
