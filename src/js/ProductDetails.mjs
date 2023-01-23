export default class ProductDetails {

  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  init() {
    function addProductToCart(product) {
      let cartItems = getLocalStorage("so-cart");
      let arrCart = new Array();
      // Make sure the cart stays in an array
      if (cartItems != null && Array.isArray(cartItems)) {
        cartItems.forEach((item) => {
          arrCart.push(item);
        });
      }
      // Add new item to the total cart
      arrCart.push(product);
      // Finally, persist the cart
      setLocalStorage("so-cart", arrCart);
    }

    // add to cart button event handler
    async function addToCartHandler(e) {
      const product = await dataSource.findProductById(e.target.dataset.id);
      addProductToCart(product);
    }

    // add listener to Add to Cart button
    document
      .getElementById("addToCart")
      .addEventListener("click", addToCartHandler);

  }

}