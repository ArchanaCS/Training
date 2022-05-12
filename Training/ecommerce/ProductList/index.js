const express = require('express');
const app = express();
app.use(express.json());
var mysql = require("mysql");
const jwt = require("jsonwebtoken");
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password1234",
        database: "ecommercetasks"
    });
    function verifyToken(req, res, next){
        // req.header.token;
        const bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader !== "undefined") {
          //"Bearer 5015885085484809959059"
          const bearerToken = bearerHeader.split(" ")[1];
          jwt.verify(bearerToken,"secretkey",(err, authData)=>{
            if(err)
              res.sendStatus(403)
            else{
              next();
            }
          })
        }else{
          res.sendStatus(403);
        }
        // jwt.verify(true next else 403) 
      
      }
      
// product fetch
app.post('/productfetch', verifyToken,function (req, res) {
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