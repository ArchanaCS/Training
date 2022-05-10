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
// product fetch
app.post('/productfetch', function (req, res) {
    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
        }
        var sql = "select id,txtProdName,bDeleteFlag from tblproduct; ";

        con.query(sql, function (err, result) {

            if (err) {
                console.log(err);
            }
            else {
                console.log("Product retrieved!!!!");
                res.send(result);
            }
        });
    });
})


app.listen(8080, () => {
    console.log("Server is running!!!!");
})