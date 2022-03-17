require('dotenv').config();
const mysql = require ('mysql2');

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password:process.env.DB_PASSWORD
});

module.exports = con.promise();