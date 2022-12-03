let productsInStorage = [];

if (localStorage.getItem("productsInStorage")) {
  productsInStorage = JSON.parse(localStorage.getItem("productsInStorage"));
}

export { productsInStorage };
