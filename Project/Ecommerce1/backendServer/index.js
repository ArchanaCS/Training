const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
var mysql = require("mysql");
const { isNull } = require("util");
const jwt = require("jsonwebtoken");
var token = jwt.sign({ foo: "bar" }, "shhhhh");
const res = require("express/lib/response");
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

function verifyToken(req, res, next) {
  console.log("Req " + JSON.stringify(req.body));
  const bearerHeader = req.headers["authorization"];
  console.log(JSON.stringify(bearerHeader));
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    jwt.verify(bearerToken, "secretkey", (err, authData) => {
      if (err) res.sendStatus(403);
      else {
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}

// user validate
app.post("/uservalidate", function (req, res) {
  var uname = req.body.username;
  var pass = req.body.password;
  var sql =
    "select id,txtUsername from tblusers where txtUsername='" +
    uname +
    "' and txtPassword='" +
    pass +
    "'; ";
  console.log(sql);
  con.query(sql, function (err, result) {
    console.log(result.length);
    if (result.length > 0) {
      console.log("result  " + JSON.stringify(result));
      const usr = result[0];
      console.log("usr  " + JSON.stringify(usr));
      jwt.sign({ user: usr }, "secretkey", (err, token) => {
        console.log("error=>" + err);
        console.log("toke=>" + token);
        if (err) res.send(err);
        res.json({ token: token });
        //console.log("token  "+token);
      });
    } else {
      res.json({ token: "" });
    }

    // res.send(result);

    // a = result[0];
    // if (a == undefined) {
    //   res.send("check user");
    // } else {
    //   res.send("user exist");
    // }
  });
});

// product fecth
app.post("/productfetch", verifyToken, function (req, res) {
  console.log("productfetch");
  var sql = "select id,txtProdName,txtProdPrice from tblproduct; ";
  console.log("req in api " + req);
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("Product retrieved!!!!");
      res.send(result);
    }
  });
});

app.listen(8000, (req, res) => {
  console.log("Connected!!!");
});
