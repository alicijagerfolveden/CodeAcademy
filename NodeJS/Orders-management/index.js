import express from "express";
import dotenv from "dotenv";
import { ordersController } from "./src/controller/orders-controller.js";

dotenv.config();

const app = express();
const PORT = +process.env.PORT || 5_000;

app.use(express.json());

app.use("/orders", ordersController);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
