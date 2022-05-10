const express = require('express');
const app = express();

app.use(express.json());
var mysql = require("mysql");
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password1234",
        database: "ecommercetasks"
    });
// country fetch
app.post('/countryfetch', function (req, res) {
    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
        }
        var sql = "select txtCountryName, id from tblcountry; ";

        con.query(sql, function (err, result) {

            if (err) {
                console.log(err);
            }
            else {
                console.log("Data inserted!!!!");
                res.send(result);
            }
        });
    });
})
// state fetch
app.post('/statefetch', function (req, res) {
    var a = req.body.id;
    console.log(a);
    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
        }
        var sql = "select txtStateName from tblstate  where refCountryName='" + a + "'; ";
        console.log(sql);
        con.query(sql, function (err, result) {

            if (err) {
                console.log(err);
            }
            else {
                console.log("Data from state retrieved!!!!");
                res.send(result);
            }
        });
    });
})
// user insert

app.post('/userinsert', function (req, res) {
   
    var uname=req.body.username;
    var pass=req.body.password;
    var fname=req.body.firstname;
    var pin=req.body.pin;
    var phone=req.body.phone;
   
    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
        }
        var sql = "insert into tblusers (txtUsername,txtPassword,txtFirstName,txtPincode,txtPhoneNo) values ('"+uname+"','"+pass+"','"+fname+"','"+pin+"','"+phone+"');";
        console.log(sql);
        con.query(sql, function (err, result) {

            if (err) {
                console.log(err);
            }
            else {
                console.log("Data from state retrieved!!!!");
                res.send(result);
            }
        });
    });
})
app.listen(8080, () => {
    console.log("Server is running!!!!");
})