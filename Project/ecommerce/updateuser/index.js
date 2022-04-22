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
app.post('/updateuser',function(req,res)
{
    var id=req.body.uid;
    var pw=req.body.pass;
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
    var sql = "update tblusers set txtPassword='"+pw+"' where id='"+id+"';";

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