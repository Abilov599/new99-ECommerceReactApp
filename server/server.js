const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let myData = [
  {
    id: 1,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 2,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 3,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 4,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 5,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 6,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 7,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 8,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 9,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 10,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 11,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 12,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 13,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 14,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 15,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 16,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 17,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 18,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 19,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 20,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 21,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 22,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 23,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 24,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 25,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 26,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 27,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 28,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 29,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 30,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 31,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 32,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 33,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 34,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 35,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 36,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 37,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
  {
    id: 38,
    name: "braclet",
    price: 21,
    discountPrice: 19.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/28_600x.png?v=1667235503",
  },
  {
    id: 39,
    name: "chaynik",
    price: 79.0,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/e_600x.png?v=1666963293",
  },
  {
    id: 40,
    name: "bag",
    price: 33,
    discountPrice: 39.99,
    img: "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/handmade-product_8_600x.png?v=1669045164",
  },
];

app.get("/myData", (req, res) => {
  res.send(myData);
});

app.listen(port, () => console.log(`http://localhost:${port}/myData/`));
