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
// Dashboard topbar
app.post('/topbarpart1', function (req, res) {
    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
        }
        var sql = "select count(id) as productcount from tblproduct ;";

        con.query(sql, function (err, result) 
        {

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
app.post('/topbarpart2', function (req, res) {
    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
        }
        var sql = "select count(id) as ordercount from tblorderhdr;";

        con.query(sql, function (err, result) 
        {

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

app.post('/orderamtgraph', function (req, res) {
    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
        }
        var sql = "SELECT date(dtCreatedOn), SUM(txtOrderAmount) AS OrderAmount FROM tblorderhdr  GROUP BY date(dtCreatedOn);";

        con.query(sql, function (err, result) 
        {

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

app.post('/ordercountgraph', function (req, res) {
    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
        }
        var sql = "select date(dtCreatedOn),count(id) from tblorderhdr group by(dtCreatedOn);";

        con.query(sql, function (err, result) 
        {

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


app.listen(8080, () => {
    console.log("Server is running!!!!");
})