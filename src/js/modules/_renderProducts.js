import { products } from "./_products.js";
import { cardsList } from "./_DOMvars.js";

const renderCards = (products) => {
  products.forEach((item) => {
    const renderCardHTML = `
      <li class="cards__item" data-id="${item.id}">
      <a class="cards__item-link" href="card.html">
        <div class="cards__item-top">
          <ul class="cards__item-labels">
            <li class="cards__item-label cards__item-label_discount ${item.discount ? "" : "_none"}">${item.discountAmount}</li>
          </ul>
          <button class="cards__item-favourite" type="button"><img src="./img/icons/wishlist.svg" alt="Иконка добавить в избранное" /></button>
        </div>
        <div class="cards__item-middle">
          <picture>
            <source srcset="img/cards/${item.img}.webp" type="image/webp" />
            <img src="img/cards/${item.img}.jpg" loading="lazy" alt="${item.title}" />
          </picture>
        </div>
        <div class="cards__item-bottom">
          <div class="cards__item-title">${item.title}</div>
          <div class="cards__item-category">${item.category}</div>
          <div class="cards__item-price-wrapper">
            <div class="cards__item-newprice">${item.price}</div>
            <div class="cards__item-oldprice ${item.discount ? "" : "_none"}">${item.oldprice}</div>
          </div>
          <div class="cards__item-hover">
            <div class="cards__item-size-title">Размеры</div>
            <div class="cards__item-size-row">
              <div class="cards__item-size-column">
                <div class="cards__item-size-dimension">Ширина</div>
                <div class="cards__item-size-number">${item.size.width} см</div>
              </div>
              <div class="cards__item-size-column">
                <div class="cards__item-size-dimension">Глубина</div>
                <div class="cards__item-size-number">${item.size.depth} см</div>
              </div>
              <div class="cards__item-size-column">
                <div class="cards__item-size-dimension">Высота</div>
                <div class="cards__item-size-number">${item.size.height} см</div>
              </div>
            </div>
            <button class="cards__item-cart-button" type="button">Добавить в корзину</button>
          </div>
        </div>
      </a>
    </li>`;
    if (cardsList) {
      cardsList.insertAdjacentHTML("beforeend", renderCardHTML);
    }
  });
};

renderCards(products);
