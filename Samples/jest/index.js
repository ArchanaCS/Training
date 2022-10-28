const express = require("express");
const app = express();
app.use(express.json());
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "snowbird",
});

con.connect(function (err) {
  if (err) throw err;
});

app.post("/test", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username == "Ravi" && password == "1234") {
    let sql =
      "select id from tblusers where txtUserName='" +
      username +
      "' and txtPassword='" +
      password +
      "';";
    con.query(sql, (err, result) => {
      res.json(result);
    });
  }
});

module.exports = app;
