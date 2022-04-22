const express = require('express');
const app = express();
app.use(express.json());
var mysql = require("mysql");
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "ecommercetasks"
    });
// country fetch
app.post('/addproduct', function (req, res) {
    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
        }
        var sql = "insert into tblproduct (txtProdName,txtProdPrice)values('ring',45),('chain',34);";

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


app.listen(8080, () => {
    console.log("Server is running!!!!");
})