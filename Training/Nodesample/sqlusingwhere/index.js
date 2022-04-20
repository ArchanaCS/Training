const express=require('express');
const app=express();
app.use(express.json());
var mysql = require("mysql");
var con = mysql.createConnection(
    {
    host: "localhost",
    user: "root",
    password: "password",
    database: "assignstudent"
  });
app.post('/test',function(req,res)
{
    var a=6;
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
    var sql = "select id,StdName,district from tblstudentdetail where id='"+a+"'";

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