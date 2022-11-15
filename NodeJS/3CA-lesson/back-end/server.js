const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = +process.env.PORT || 5_000;
const users = ["Alicija", "Andzhey"];
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send(users).end();
});

app.post("/", (res, req) => {
  const { name } = req.body;

  users.push(name);

  res.send(users).end();
});

app.listen(PORT, () => console.log(`Server is on ${PORT} port`));
