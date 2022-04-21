const express = require('express');
const app = express();
app.use(express.json());
var mysql = require("mysql");
const { isNull } = require('util');
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "ecommercetasks"
    });

// user validate
app.post('/uservalidate', function (req, res) {
    var a;
    var uname=req.body.username;
    var pass=req.body.password;
    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
             }
        var sql = "select txtUsername,txtPassword from tblusers where txtUsername='" + uname + "' and txtPassword='" + pass + "'; ";
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Validated!!!!");
            }

            console.log(result);
            // a = result[0];
            // if (a == undefined) {
            //     res.send("");
            // }
            // else {

            //     res.send("");
            // }
        });
    });
})
app.listen(8080, (req, res) => {
    console.log("Connected!!!");
})
