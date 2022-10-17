
const otpGenerator = require("otp-generator");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
var mysql = require("mysql");
var nodemailer = require("nodemailer");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crm",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/otpgenerate", (req, res) => {
  let otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
  });
  let sql = "update tblusers set txtOTP='" + otp + "' where id =4;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("value inserted");
  });

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "archanacs154@gmail.com",
      pass: "ixeebzxtnirvxogh",
    },
  });

  var mailOptions = {
    from: "archanacs154@gmail.com",
    to: "archanacs158@gmail.com",
    subject: "OTP Verification",
    text: "Your OTP is " + otp,
  };
  email = req.body.email;

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send(otp);
  });
});











app.post("/login", (req, res) => {
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;
  let sql =
    "select id from tblusers where txtEmail='" +
    username +
    "' and txtPassword='" +
    password +
    "';";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("result", sql);
    res.send(result);
  });
});
app.listen(8000, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port 8000");
});
