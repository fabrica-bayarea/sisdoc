require("dotenv").config();
const { Pool } = require("pg");
const { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } = process.env;

module.exports = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  ssl: { rejectUnauthorized: false },
});
