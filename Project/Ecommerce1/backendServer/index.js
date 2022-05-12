const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
var mysql = require("mysql");
const { isNull } = require("util");
const jwt = require("jsonwebtoken");
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
const res= require("express/lib/response");
const dotenv = require('dotenv');
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

  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return res.send("Successfully Verified");
        }else{
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
  // console.log("Req "+(req));
  // const bearerHeader = req.headers["authorization"];
  // console.log(bearerHeader);
  // if (typeof bearerHeader !== "undefined") {
 
  //   const bearerToken = bearerHeader.split(" ")[1];
  //   jwt.verify(bearerToken,"secretkey",(err, authData)=>{
  //     if(err)
      
  //       res.sendStatus(403)
  //     else{
  //       next();
  //     }
  //   })
  // }else{
    res.sendStatus(403);
  }





// user validate
app.post("/uservalidate", function (req, res) {
  
  var uname = req.body.username;
  var pass = req.body.password;
    var sql =
      "select id,txtUsername from tblusers where txtUsername='" +
      uname +
      "' and txtPassword='" +
      pass +
      "'; ";
    console.log(sql);
    con.query(sql, function (err, result) {
      console.log(result);
      if (result.length>0) {
       console.log("result  "+ JSON.stringify(result));
        const usr=result[0];
        console.log("usr  "+JSON.stringify(usr));
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        console.log(jwtSecretKey);
      //  jwt.sign({user:usr},jwtSecretKey,(err,token)=>{
      //     if(err)
      //     {
      //       res.send(err);
            
      //     }
      //     else{
      //       res.json({"token":token})
      //       console.log("token  "+token);
      //     }
      //   })
      // } else {
      //   res.json({"token":""});
      //   console.log("token  "+token);
      // }

      const token = jwt.sign(usr, jwtSecretKey);
   console.log(token);
    //res.send(token);
   
      }
      res.send(token);
      else {
          res.json({"token":""});
          console.log("token  "+token);
        }
      // a = result[0];
      // if (a == undefined) {
      //   res.send("check user");
      // } else {
      //   res.send("user exist");
      // }
    });
   // res.send(result);
    
  });

// product fecth
  app.get('/productfetch',verifyToken,function (req, res) {
    
   
        var sql = "select id,txtProdName,bDeleteFlag from tblproduct; ";
        console.log("req in api "+req);
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

    dotenv.config();
  
    let PORT = process.env.PORT || 8000;
app.listen(PORT, (req, res) => {
  console.log("Connected!!!");
});
