"use strict";

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "snowbird",
});
con.connect(function (err) {
  if (err) {
  } else {
  }
});

module.exports.login = async (event) => {
  let request = JSON.parse(event.body);
  let username = request.username;
  let password = request.password;

  let sql =
    "select id from tblusers where txtUserName='" +
    username +
    "' and txtPassword='" +
    password +
    "'";
  console.log("uname:", sql);
  let result = await new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) resolve(err);
      else {
        console.log(result);
        resolve(result);
      }
    });
  });
  return { body: JSON.stringify(result) };
};

