const express=require('express');
const app=express();
var mysql=require('mysql');
app.use(express.json());
var con=mysql.createConnection(
{
    host:"localhost",
    user:"root",
    password:"password1234",
    database:"ecommercetasks"
    
})
app.post('/uservalidate',function(req,res)
{
   con.connect(function(err)
   {
       var uname=req.body.username;
       var pass=req.body.password;
       if(err)
       {
           console.log(err);
       }
       else
       {
           console.log("connected");
       }
       var sql="select id from tblusers where txtUsername='"+uname+"' and txtPassword='"+pass+"';";
       con.query(sql,function(err,result)
       {
           if(err)
           {
               console.log(err);
           }
           else
           {
               res.send(result);
           }

       })
   })
});
app.listen(8080,function()
{
    console.log("server is running!!!");
});