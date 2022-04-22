const express=require('express');
const app=express();
app.use(express.json());
var mysql = require("mysql");
var con = mysql.createConnection(
    {
    host: "localhost",
    user: "root",
    password: "password",
    database: "ecommercetasks"
  });
app.post('/test',function(req,res)
{
    var a=req.body.refuserid;
    con.connect(function (err) 
{
    if (err) 
    {
        console.log(err);
    }
    else
    {
        console.log("Connected");
    }
    var sql = "select refUser,txtOrderNo,txtOrderAmount from tblorderhdr where refuser='"+a+"';";

    con.query(sql, function (err, result) 
    {
        
        if (err) {
            console.log(err);
        }
        else {
            console.log("Data retrieved!!!!");
            res.send(result);
        }

    });
});
   
})
app.listen(8080,()=>
{
     console.log("Server is running!!!!");
})