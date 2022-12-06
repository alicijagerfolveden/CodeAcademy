const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5_000;
const URI = process.env.URI;
const DB = process.env.DB;
const DBCOLLECTIONUSERS = process.env.DBCOLLECTIONUSERS;
const DBCOLLECTIONSERVICES = process.env.DBCOLLECTIONSERVICES;

const client = new MongoClient(URI);

app.use(express.json());
app.use(cors());

app.get("/users", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTIONUSERS)
      .find()
      .toArray();
    await connection.close();
    return res.send(data).end();
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/memberships", async (_, res) => {
  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTIONSERVICES)
      .find()
      .sort({ price: 1 })
      .toArray();
    await connection.close();
    return res.send(data).end();
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/memberships", async (req, res) => {
  const { name, price, description } = req.body;

  const isString = (value) => {
    return typeof value === "string";
  };

  if (!name || !price || !description) {
    return res.status(400).send("Not all parameters are provided").end();
  }

  if (typeof price !== "number") {
    return res.status(400).send(`${price} is not a number`).end();
  }

  if (!isString(name) || !isString(description)) {
    return res
      .status(400)
      .send(`${name} or ${description} is not a string`)
      .end();
  }

  try {
    const connection = await client.connect();
    const newMembership = await connection
      .db(DB)
      .collection(DBCOLLECTIONSERVICES)
      .insertOne({
        name,
        price,
        description,
      });
    await connection.close();
    return res.send(newMembership).end();
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/users", async (req, res) => {
  const { name, surname, email, service_id } = req.body || {};

  const isString = (value) => {
    return typeof value === "string";
  };

  if (!name || !surname || !email || !service_id) {
    return res.status(400).send("Not all parameters are provided").end();
  }

  if (!isString(name) || !isString(surname) || !isString(email)) {
    return res
      .status(400)
      .send(`${name}, ${surname} or ${email} is not a string`)
      .end();
  }

  try {
    const connection = await client.connect();
    const dbRes = await connection
      .db(DB)
      .collection(DBCOLLECTIONUSERS)
      .insertOne({
        name,
        surname,
        email,
        service_id,
      });
    await connection.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/memberships/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTIONSERVICES)
      .find({ _id: ObjectId(id) })
      .toArray();
    await connection.close();
    return res.send(data).end();
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.delete("/memberships/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("ID was not provided.").end();
    return;
  }

  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(DBCOLLECTIONSERVICES)
      .deleteOne({ _id: ObjectId(id) });

    await con.close();

    res.send(data).end();
  } catch (error) {
    res.send({ error }).end();
    throw Error(error);
  }
});

app.get("/users/:order", async (req, res) => {
  const { order } = req.params;

  if (order === "asc") {
    try {
      const connection = await client.connect();
      const data = await connection
        .db(DB)
        .collection(DBCOLLECTIONUSERS)
        .find()
        .sort({ name: 1 })
        .toArray();
      await connection.close();
      return res.send(data).end();
    } catch (err) {
      res.status(500).send({ err });
    }
  } else {
    try {
      const connection = await client.connect();
      const data = await connection
        .db(DB)
        .collection(DBCOLLECTIONUSERS)
        .find()
        .sort({ name: -1 })
        .toArray();
      await connection.close();
      return res.send(data).end();
    } catch (err) {
      res.status(500).send({ err });
    }
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));
