import { productsInStorage } from "./_getProductsInStorage.js";
import { cartProducts, cartProductsMobile, cartQty, cartWord, headerCartQty } from "./_DOMvars.js";
import { getCartTotalSum, getCartTotalQty, getCartNoun, getCartHeaderTotalQty } from "./_getCartFunctions.js";

const renderProductsInCart = (productsInStorage) => {
  productsInStorage.forEach((item) => {
    const renderCardsInCartHTML = `
          <li class="cart__product" data-id="${item.id}">
                  <picture class="cart__product-picture">
                    <source srcset="img/cards/${item.img}.webp" type="image/webp" />
                    <img class="cart__product-img" src="img/cards/${item.img}.jpg" loading="lazy" alt="${item.title}" />
                  </picture>
                  <div class="cart__product-info-column">
                    <div class="cart__product-info-row">
                      <div class="cart__product-title">${item.title}</div>
                      <div class="cart__product-info-price">
                        <div class="cart__product-discount ${item.discount ? "" : "_none"}">${item.discountAmount}</div>
                        <div class="cart__product-oldprice ${item.discount ? "" : "_none"}">${item.oldsum}</div>
                        <div class="cart__product-price">${item.sum}</div>
                      </div>
                    </div>
                    <div class="cart__product-info-inner">
                      <div class="cart__product-colour-title">
                        <span>Цвет:</span><span class="cart__product-colour">${item.colour}</span>
                        <div class="cart__product-colour-print ${item.colourClass}"></div>
                      </div>
                      <div class="cart__product-qty-title">Количество:<span class="cart__product-qty">${item.qty}</span></div>
                      <div class="cart__product-size-title">Размер(Ш×Д×В): <span class="cart__product-size">
                      ${item.size.width} СМ × ${item.size.depth} СМ × ${item.size.height} СМ</span></div>
                    </div>
                  </div>
                  <div class="cart__product-remove-wrapper">
                    <button class="cart__product-remove"></button>
                  </div>
                </li>`;
    const renderCardsInCartMobileHTML = `
      <li class="cart__product_mobile cart__product" data-id="${item.id}">
      <div class="cart__product-info-row_mobile">
        <picture class="cart__product-picture_mobile cart__product-picture">
          <source srcset="img/cards/${item.img}.webp" type="image/webp" />
          <img class="cart__product-img_mobile cart__product-img" src="img/cards/${item.img}.jpg" loading="lazy" alt="${item.title}" />
        </picture>
        <div class="cart__product-info-column_mobile">
          <div class="cart__product-title_mobile">${item.title}</div>
          <div class="cart__product-info-price_mobile">
            <span class="cart__product-qty_mobile cart__product-qty">${item.qty}</span>
            <div class="cart__product-price_mobile cart__product-price">${item.sum}</div>
            <div class="cart__product-oldprice_mobile cart__product-oldprice">${item.oldsum}</div>
          </div>
        </div>
      </div>
      <div class="cart__product-info-column_mobile">
        <div class="cart__product-colour-title_mobile cart__product-colour-title">
          <span>Цвет:</span><span class="cart__product-colour_mobile cart__product-colour">${item.colour}</span>
          <div class="cart__product-colour-print_mobile cart__product-colour-print ${item.colourClass}"></div>
        </div>
        <div class="cart__product-size-title_mobile cart__product-size-title">
          Размер(Ш×Д×В): <span class="cart__product-size_mobile cart__product-size">${item.size.width} СМ × ${item.size.depth} СМ × ${item.size.height} СМ</span>
        </div>
      </div>
      <div class="cart__product-remove-wrapper_mobile ">
        <button class="cart__product-remove_mobile cart__product-remove"></button>
      </div>
    </li>`;

    if (cartProducts) {
      cartProducts.insertAdjacentHTML("beforeend", renderCardsInCartHTML);
      getCartTotalSum(productsInStorage);
      getCartTotalQty(productsInStorage);
      cartWord.textContent = getCartNoun(parseInt(cartQty.textContent), "предмет", "предмета", "предметов");
    }

    if (cartProductsMobile) {
      cartProductsMobile.insertAdjacentHTML("beforeend", renderCardsInCartMobileHTML);
    }
  });
};

renderProductsInCart(productsInStorage);
getCartHeaderTotalQty(productsInStorage);
