const mysql = require("mysql2/promise");
const express = require("express");

require("dotenv").config();

const PORT = +process.env.port || 25_060;

const app = express();

app.use(express.json());

const mysqlConfig = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};

app.get("/", async (_, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    await con.end();
    res.send(`Connected to database`).end();
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});
app.post("/table", async (req, res) => {
  //   const name = req.body?.name.trim();
  const name = "shirts";
  try {
    const con = await mysql.createConnection(mysqlConfig);

    await con.execute(
      `CREATE table ${name}(id int AUTO_INCREMENT, PRIMARY KEY (id), brand varchar(10), model varchar(20), size varchar(3), price DECIMAL (4, 2))`
    );

    await con.end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error();
  }
  res.send("Table was created").end();
});

app.post("/shirts", async (req, res) => {
  const brand = req.body.brand.trim();
  const model = req.body.model.trim();
  const size = req.body.size.toUpperCase().trim();
  const price = req.body.price;

  if (!brand || !model || !size || !price) {
    res.status(400).send("Please input all data: brand, model, size, price!");
  }

  try {
    const con = await mysql.createConnection(mysqlConfig);

    await con.execute(
      `INSERT INTO shirts (brand, model, size, price) VALUES ('${brand}', '${model}', '${size}', '${price}')`
    );

    await con.end();

    res.status(201).send("Data inserted into table");
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

app.get("/shirts", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);

    const result = await con.execute(
      `SELECT * FROM shirts WHERE price ORDER BY price ASC LIMIT 10`
    );

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

app.get("/shirts/:size", async (req, res) => {
  const size = req.params.size.toLocaleUpperCase().trim();

  const exsistingSizes = ["S", "M", "L"];

  // if (size !== exsistingSizes) {
  //   res.status(400).send({ error: "Provided size does not exsist" }).end();
  //   return;
  // }

  const query = `SELECT * FROM shirts WHERE size='${size}' ORDER BY price ASC`;

  try {
    const con = await mysql.createConnection(mysqlConfig);

    const result = await con.execute(query);

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

app.get("/shirts/:size/:limit", async (req, res) => {
  const size = req.params.size.toLocaleUpperCase();
  const limit = req.params.limit;

  const query =
    size && limit
      ? `SELECT * FROM shirts WHERE size='${size}' ORDER BY price ASC LIMIT ${limit}`
      : `SELECT * FROM shirts`;

  try {
    const con = await mysql.createConnection(mysqlConfig);

    const result = await con.execute(query);

    await con.end();

    res.send(result[0]).end();
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

app.get("*", (_, res) => {
  res.status(404).send("404! This is an invalid URL.");
});
app.listen(PORT, () => console.log(`Server is on ${PORT} port`));
