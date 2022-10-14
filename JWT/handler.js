"use strict";
const jwt = require("jsonwebtoken");
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "snowbird",
});
con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});

module.exports.login = async (event) => {
  let request = JSON.parse(event.body);
  let username = request.username;
  let password = request.password;
  var token = "";
  console.log("step1");
  let sql =
    "select id from tblusers where txtUserName='" +
    username +
    "' and txtPassword='" +
    password +
    "'";
  console.log("uname:", sql);
  let result = await new Promise((resolve, reject) => {
    console.log("step2");
    con.query(sql, function (err, result) {
      console.log("step3");
      if (err) resolve(err);
      else {
        console.log("step4");
        token = jwt.sign(JSON.stringify(result), "secretkey");
        console.log(token);
        resolve(token);
      }
    });
  });
  return token;
};

module.exports.middleware = async (event, context) => {
  console.log("middleware");

  let token = event.headers.token;
  console.log("token:", token);
  let verified = await new Promise((resolve, reject) => {
    console.log("hi");
    jwt.verify(token, "secretkey", (err, decoded) => {
      console.log("hello");
      if (err) {
        resolve(false);
      }

      resolve(true);
    });
  });
  if (!verified) {
    console.log("verfied", verified);
    context.end();
    return { statusCode: 403, body: "Not verifed" };
  }
};

module.exports.sampleapi = async (event) => {
  return {
    body: JSON.stringify({ message: "New Api called" }),
  };
};
