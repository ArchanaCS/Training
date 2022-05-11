const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
var mysql = require("mysql");
const { isNull } = require("util");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password1234",
  database: "ecommercetasks",
});
con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});
// user validate
app.post("/uservalidate", function (req, res) {
  var a;
  var uname = req.body.username;
  var pass = req.body.password;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  //res.send("hello world");

  
    var sql =
      "select id from tblusers where txtUsername='" +
      uname +
      "' and txtPassword='" +
      pass +
      "'; ";
    console.log(sql);
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("Validated!!!!");
      }

      res.send(result);
      // a = result[0];
      // if (a == undefined) {
      //   res.send("check user");
      // } else {
      //   res.send("user exist");
      // }
    });
  });

app.listen(8000, (req, res) => {
  console.log("Connected!!!");
});
