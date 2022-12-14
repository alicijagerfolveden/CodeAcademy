const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5_000;
const URI = process.env.URI;
const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

const client = new MongoClient(URI);

app.use(express.json());
app.use(cors());
// copy-paste project, work with it
app.get("/", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/", async (req, res) => {
  try {
    const connection = await client.connect();
    const dbRes = await connection.db(DB).collection(DBCOLLECTION).insertOne({
      orderPlacedDate: "2022-10-15",
      orderDoneDate: "2022-10-17",
      products: "t-shirt",
    });
    await connection.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/orders", async (req, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .sort({ orderPlacedDate: 1 })
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/:product", async (req, res) => {
  try {
    const { product } = req.params;
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find({ products: product })
      .toArray();
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));
