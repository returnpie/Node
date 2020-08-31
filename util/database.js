const mysql = require("mysql2");

const poll = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node",
  password: "2pie1363",
});

module.exports = poll.promise();
