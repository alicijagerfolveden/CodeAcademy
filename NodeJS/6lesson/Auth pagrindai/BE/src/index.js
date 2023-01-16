const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();
const { serverPort } = require("./config");
const { mysqlConfig } = require("./config");

const auth = require("./routes/v1/auth");
const content = require("./routes/v1/content");

app.use(express.json());
app.use(cors());

app.use("/v1/auth/", auth);
app.use("/v1/content/", content);

app.get("/", async (req, res) => {
  const con = await mysql.createConnection(mysqlConfig);
  await con.end();
  res.send({ message: "Server is running" });
});

app.post("/table", async (req, res) => {
  try {
    const name = req.body.name;

    const con = await mysql.createConnection(mysqlConfig);

    await con.execute(
      `CREATE table ${name}(id int AUTO_INCREMENT, PRIMARY KEY (id), email varchar(255), password varchar(255))`
    );

    await con.end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error();
  }
  res.send("Table was created").end();
});

app.delete("/table", async (req, res) => {
  try {
    const name = req.body?.name.trim();

    const con = await mysql.createConnection(mysqlConfig);

    await con.execute(`DROP TABLE ${name}`);

    await con.end();
  } catch (error) {
    res.status(500).send({ error }).end;
    return console.error({ error });
  }
  res.send("Table was deleted").end();
});

// app.all("*", (req, res) => {
//   res.status(404).send({ error: "Page not found" });
// });

app.listen(serverPort, () => console.log(`Listening on port ${serverPort}`));
