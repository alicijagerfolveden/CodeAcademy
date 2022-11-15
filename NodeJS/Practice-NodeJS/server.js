const express = require("express");
const cors = require("cors");
const { appendFile } = require("fs");

require("dotenv").config();

const PORT = +process.env.PORT || 5_000;

const app = express();

app.use(express.json());
app.use(cors());

const fruits = [
  { name: "apple", color: "red", isSweet: false },
  { name: "banana", color: "yellow", isSweet: true },
];
app.get("/", (req, res) => {
  res.end("OK");
});

app.get("/fruits", (req, res) => {
  res.send(fruits).end();
});

app.post("/new-fruit", (req, res) => {
  const { name, color, isSweet } = req.body;

  const isBoolean = (value) => {
    return typeof value === "boolean";
  };

  if (typeof name !== "string") {
    res.status(400).send({ message: "Invalid fruits name" });
    return;
  }
  if (typeof color !== "string") {
    res.status(400).send({ message: "Invalid fruits color" });
    return;
  }
  if (!isBoolean(isSweet)) {
    res
      .status(400)
      .send({ message: "Invalid fruits sweetness. Write boolean" });
    return;
  }

  const fruit = { name, color, isSweet };
  fruits.push(fruit);
  res.end();
});

app.get("/fruit/:fruitId", (req, res) => {
  res.send(fruits[req.params.fruitId]).end();
});

app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));
