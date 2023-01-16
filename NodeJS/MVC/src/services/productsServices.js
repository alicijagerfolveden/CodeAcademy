import { Product } from "../models/Product.js";

const products = [
  new Product(16, "book", true),
  new Product(10, "car", false),
  new Product(21, "pen", true),
];

export const getProducts = (_, res) => {
  res.send({ products }).end();
};
