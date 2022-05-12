const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
var mysql = require("mysql");
const { isNull } = require("util");
const jwt = require("jsonwebtoken");
const { send } = require("express/lib/response");
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



function verifyToken(req, res, next){
  
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
 
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


}

// user validate
app.post("/uservalidate", function (req, res) {
  var a;
  var uname = req.body.username;
  var pass = req.body.password;
    var sql =
      "select id from tblusers where txtUsername='" +
      uname +
      "' and txtPassword='" +
      pass +
      "'; ";
    console.log(sql);
    con.query(sql, function (err, result) {
      if (result.length>0) {
        const usr=result[0];
        jwt.sign({user:usr},"secretkey",(err,token)=>{
          if(err)
          {
            res.send(err);
          }
          else{
            res.json({"token":token})
          }
        })
      } else {
        res.json({"token":""});
      }

      res.send(result);
      // a = result[0];
      // if (a == undefined) {
      //   res.send("check user");
      // } else {
      //   res.send("user exist");
      // }
    });
  });

// product fecth
  app.post('/productfetch',verifyToken,function (req, res) {
    
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

app.listen(8000, (req, res) => {
  console.log("Connected!!!");
});
