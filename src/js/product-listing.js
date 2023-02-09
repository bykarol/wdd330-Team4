import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const caterogy = getParam('category');
const prod = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const listp = new ProductList("tents", prod, listElement);

listp.init();