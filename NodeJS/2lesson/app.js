const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const cars = [{ name: "BMW" }, { name: "VW" }, { name: "Porsche" }];

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/cars", (req, res) => {
  console.log(cars);
  res.send(cars);
});

app.post("/create-car", (req, res) => {
  console.log(req.body);

  const { name } = req.body;

  const car = { name };

  cars.push(car);

  res.end();
});
app.listen(8080, () => console.log("The server is running on port 8080"));
