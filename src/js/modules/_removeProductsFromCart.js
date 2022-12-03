import { cartProducts, cartProductsWrapper, cartEmpty, cartQty, cartWord } from "./_DOMvars.js";
import { productsInStorage } from "./_getProductsInStorage.js";
import { getCartTotalSum, getCartTotalQty, getCartNoun, getCartHeaderTotalQty } from "./_getCartFunctions.js";

if (cartProducts) {
  cartEmpty.textContent = `Ваша корзина пуста! Добавьте сюда что нибудь`;

  if (cartProducts.children.length === 0) {
    cartEmpty.style.display = "block";
    cartQty.parentNode.remove();
  } else {
    cartEmpty.style.display = "none";
  }

  cartProductsWrapper.addEventListener("click", function (e) {
    if (e.target.classList.contains("cart__product-remove")) {
      const index = productsInStorage.findIndex((item) => {
        if (item.id === e.target.closest(".cart__product").dataset.id) {
          return true;
        }
      });
      productsInStorage.forEach((item) => {
        if (item.id === e.target.closest(".cart__product").dataset.id) {
          productsInStorage.splice(index, 1);
          e.target
            .closest(".cart__products-wrapper")
            .querySelectorAll(".cart__product")
            .forEach((item) => {
              if (item.dataset.id === e.target.closest(".cart__product").dataset.id) {
                item.remove();
              }
            });
          localStorage.setItem("productsInStorage", JSON.stringify(productsInStorage));
        }
      });

      getCartTotalSum(productsInStorage);
      getCartTotalQty(productsInStorage);
      getCartHeaderTotalQty(productsInStorage);
      cartWord.textContent = getCartNoun(parseInt(cartQty.textContent), "предмет", "предмета", "предметов");

      if (cartProducts.children.length === 0) {
        cartEmpty.style.display = "block";
        cartQty.parentNode.remove();
      } else {
        cartEmpty.style.display = "none";
      }
    }
  });
}
