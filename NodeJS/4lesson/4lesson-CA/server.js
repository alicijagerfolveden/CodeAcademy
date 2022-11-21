const express = require("express");

const app = express();

require("dotenv").config();

const PORT = +process.env.PORT || 5_001;

app.use(express.json());

const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};

app.get("/cars", (_, res) => {
  res.send(cars).end;
});

app.get("/cars/:brand", (req, res) => {
  const brand = req.params.brand;

  const brandModels = cars[brand];

  res.send(brandModels).end();
});

app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));
