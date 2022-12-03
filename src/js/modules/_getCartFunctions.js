import { cartTotal, cartQty, headerCartQty } from "./_DOMvars.js";

export const getCartTotalSum = (productsInStorage) => {
  const result = productsInStorage.reduce((acc, item) => {
    return (acc += item.sum);
  }, 0);
  cartTotal.textContent = result;
};

export const getCartTotalQty = (productsInStorage) => {
  const result = productsInStorage.reduce((acc, item) => {
    return (acc += item.qty);
  }, 0);
  cartQty.textContent = result;
};

export const getCartHeaderTotalQty = (productsInStorage) => {
  const result = productsInStorage.reduce((acc, item) => {
    return (acc += item.qty);
  }, 0);
  headerCartQty.textContent = result;
};

export const getCartNoun = (number, one, two, five) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};
