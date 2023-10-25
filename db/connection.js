const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: '127.0.0.1',
  // username
  user: "root",
  // password
  password: "mysql123",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
