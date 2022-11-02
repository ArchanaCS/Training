const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
var mysql = require("mysql");
var jwt = require("jsonwebtoken");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "snowbird",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  console.log(JSON.stringify(bearerHeader));
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    jwt.verify(bearerToken, "secert key", (err, authData) => {
      if (err) res.sendStatus(403);
      else {
        res.send(
          "Verifytoken function called and authenticated from sampleapi..."
        );
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log("login");
  let sql =
    "select id from tblusers where txtUserName='" +
    username +
    "' and txtPassword='" +
    password +
    "';";
  con.query(sql, (err, result) => {
    if (err) throw err;
    else {
      console.log(result);
      var resu = result[0];
      if (result != null) {
        jwt.sign({ user: resu }, "secert key", function (err, token) {
          console.log(token);
          res.send(token);
        });
      }
    }
  });
});

app.post("/sampleapi", verifyToken, (req, res) => {
  console.log("Called sampleapi after authentication of token");
  // res.send("Called sampleapi after authentication of token")
});

app.listen(8000, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port 8000");
});
