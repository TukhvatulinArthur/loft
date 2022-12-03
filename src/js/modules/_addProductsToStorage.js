import { products } from "./_products.js";
import { productsInStorage } from "./_getProductsInStorage.js";
import { cardsList, headerBottom, header, headerTop } from "./_DOMvars.js";
import { getCartHeaderTotalQty } from "./_getCartFunctions.js";

if (cardsList) {
  cardsList.addEventListener("click", function (e) {
    if (e.target.classList.contains("cards__item-cart-button")) {
      e.preventDefault();
      products.forEach((item) => {
        if (e.target.closest(".cards__item").dataset.id === item.id) {
          const index = productsInStorage.findIndex((item) => {
            if (item.id === e.target.closest(".cards__item").dataset.id) {
              return true;
            }
          });

          if (index === -1) {
            productsInStorage.push(item);
            item.sum = item.price;
            item.oldsum = item.oldprice;
          } else {
            productsInStorage.forEach((el) => {
              if (el.id === item.id) {
                el.qty += 1;
                el.sum += el.price;
                el.oldsum += el.oldprice;
              }
            });
          }

          localStorage.setItem("productsInStorage", JSON.stringify(productsInStorage));
          getCartHeaderTotalQty(productsInStorage);
          const notification = document.createElement("div");
          notification.innerHTML = "Товар добавлен в корзину!";
          notification.classList.add("notification");
          header.style.minHeight = `${headerBottom.offsetHeight + headerTop.offsetHeight}px`;
          headerBottom.classList.add("_show");
          headerBottom.classList.remove("_hidden");
          document.body.insertAdjacentElement("beforeend", notification);
          setTimeout(() => {
            notification.remove();
          }, 1400);
        }
      });
    }
  });
}
