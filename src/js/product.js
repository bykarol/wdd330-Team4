import { getLocalStorage, setLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

console.log(dataSource.findProductById(productId));

const product = new ProductDetails(productId, dataSource);
product.init();

// function addProductToCart(product) {
//   let cartItems = getLocalStorage("so-cart");
//   let arrCart = new Array();
//   // Make sure the cart stays in an array
//   if (cartItems != null && Array.isArray(cartItems)) {
//     cartItems.forEach((item) => {
//       arrCart.push(item);
//     });
//   }
//   // Add new item to the total cart
//   arrCart.push(product);
//   // Finally, persist the cart
//   setLocalStorage("so-cart", arrCart);
// }

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
