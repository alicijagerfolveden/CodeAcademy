import { Router } from "express";
import { createOrder, getOrders } from "../services/orders-service.js";

export const ordersController = Router();

ordersController.get("/", (_, res) => {
  const orders = getOrders();

  res.send({ orders }).end();
});

ordersController.post("/", (req, res) => {
  const { name, orderedAt, completedAt, products, totalPrice } = req.body;

  const { order, error } = createOrder({
    name,
    orderedAt,
    completedAt,
    products,
    totalPrice,
  });

  if (!order || error) {
    res.status(400).send({ error: error.message }).end();

    return;
  }

  res.send({ message: `Order ${name} was created` }).end();
});
