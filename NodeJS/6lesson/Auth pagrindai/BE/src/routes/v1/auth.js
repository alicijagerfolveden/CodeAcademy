const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { mysqlConfig, jwtSecret } = require("../../config");

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

router.get("/registered-users", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const exsistingUsers = await con.execute(`SELECT * FROM users`);

    await con.end();

    return res.send(exsistingUsers).end();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: "Something is wrong" });
  }
});

router.post("/register", async (req, res) => {
  let userData = req.body;
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: "Incorect data provided" });
  }

  try {
    const hashedPassword = bcrypt.hashSync(userData.password);

    const con = await mysql.createConnection(mysqlConfig);
    const [data] = await con.execute(
      `INSERT INTO users (email, password) VALUES (${mysql.escape(
        userData.email
      )}, '${hashedPassword}')`
    );
    await con.end();

    return res.send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Please try again" });
  }
});

router.post("/login", async (req, res) => {
  let userData = req.body;
  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: "Incorect email or password" });
  }
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const [data] = await con.execute(
      `SELECT * FROM users WHERE email = ${mysql.escape(userData.email)}`
    );
    await con.end();

    if (data.lenth === 0) {
      return res.status(400).send({ err: "Incorrect email or password" });
    }

    const isAuthed = bcrypt.compareSync(userData.password, data[0].password);

    if (isAuthed) {
      const token = jwt.sign(
        { id: data[0].id, email: data[0].email },
        "abc123"
      );

      return res.send({ msg: "Successfully logged in", token });
    }
    return res.status(400).send({ err: "Incorrect email or password" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Please try again" });
  }
});

module.exports = router;
