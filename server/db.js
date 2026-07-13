require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pulse",
  password: process.env.DB_PASSWORD,
  port: 5433,
});

module.exports = pool;
