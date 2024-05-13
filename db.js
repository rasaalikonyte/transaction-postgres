const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "transactions-database",
  password: "postgres",
  port: 5432,
});

module.exports = pool;
