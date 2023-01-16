const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();

app.use(express.json());

const serverPort = +process.env.serverPort;

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port || 25_060,
  database: process.env.database,
};

app.post("/table-pets", async (req, res) => {
  const name = req.body?.name.trim();
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(
      `CREATE table ${name}(id int AUTO_INCREMENT, PRIMARY KEY (id), name varchar(20), dob varchar(20), client_email varchar(55), isArchieved BOOLEAN)`
    );

    await con.end();
  } catch (error) {
    res.status(500).send({ error }).end;
    return console.error({ error });
  }
  res.send(`Table ${name} was created`).end();
});

app.delete("/table", async (req, res) => {
  try {
    const name = req.body?.name.trim();

    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(`DROP TABLE ${name}`);

    await con.end();
  } catch (error) {
    res.status(500).send({ error }).end;
    return console.error({ error });
  }
  res.send("Table was deleted").end();
});

app.listen(serverPort, () =>
  console.log(`Server is running on ${serverPort} port`)
);
