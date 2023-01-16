require("dotenv").config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  serverPort: +process.env.serverPort || 5_000,
  mysqlConfig: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: process.env.port || 25_060,
    database: process.env.database,
  },
};
