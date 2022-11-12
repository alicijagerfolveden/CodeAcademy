const express = require("express");

require("dotenv").config();

const PORT = +process.env.PORT || 5_000;

const users = [];

const app = express();

app.use(express.json());

app.get("/user/:userID", (req, res) => {
  const { userID } = req.params;

  const user = users.find((curUser) => curUser.userID === userID);

  console.log(users);

  res.send(user).end();
});

app.post("/create-user", (req, res) => {
  console.log(req.body);

  const { age, firstName, userID } = req.body;

  const isNumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value);
  };

  if (
    typeof firstName !== "string" ||
    typeof userID !== "string" ||
    !isNumber(age)
  ) {
    res.status(400).send({ message: "Invalid data provided" }).end(); //rekomenduojama 3 if'us daryti, kad galima būtų parašyti "{parametro} data invalid"

    return;
  }

  const user = { age, firstName, userID };

  users.push(user);

  res.end();
});

app.listen(PORT, () => console.log(`Server is on ${PORT} port`));
