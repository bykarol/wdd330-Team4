import { getLocalStorage } from "./utils.mjs";

const cartItems = getLocalStorage("so-cart");
const totalDiv = document.querySelector(".cart-footer");
const totalPrice = document.querySelector(".cart-total");

if (window.localStorage.length == 0) {
  totalDiv.classList.add("hide");
} else {
  totalDiv.classList.remove("hide");
  totalPrice.innerHTML = `Total: $${displayTotal(cartItems)}`;
}

export default function displayTotal(items) {
  let sum = 0.0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i].FinalPrice;
  }
  return sum.toFixed(2);
}
