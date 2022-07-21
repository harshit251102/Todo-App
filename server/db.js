const Pool = require("pg").Pool;

const pool = new Pool({
  user: "YOUR_USERNAME",
  password: "YOUR_PASSWORD",
  host: "localhost",
  port: 5432,
  database: "sqltodo"
});

module.exports = pool;