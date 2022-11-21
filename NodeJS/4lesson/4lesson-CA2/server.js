const express = require("express");

const app = express();

require("dotenv").config();

const PORT = +process.env.PORT || 5_001;

app.use(express.json());

const data = require("./data.js");

app.get("/data", (_, res) => {
  res.send(data).end;
});

app.get("/data/:car", (req, res) => {
  const { car } = req.params;

  const filteredByCar = data.filter(
    (curCar) => curCar.car.toLowerCase() === car.toLowerCase()
  );

  console.log(filteredByCar);

  res.send(filteredByCar).end();
});

app.get("/user/:id", (req, res) => {
  const id = +req.params.id;
  const user = data.find((user) => user.id === id);
  res.send(user).end();
});

app.get("/emails", (_, res) => {
  const emails = data.map((user) => user.email);

  res.send(emails).end();
});

app.get("/gender/:gender", (req, res) => {
  const gender = req.params.gender;

  const getGenderUsers = data.filter(
    (user) => user.gender.toLowerCase() === gender
  );

  const filteredUsers = getGenderUsers.map(
    (user) => `${user.first_name} ${user.last_name}`
  );

  res.send(filteredUsers).end();
});
app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));
