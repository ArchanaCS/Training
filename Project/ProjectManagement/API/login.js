const express=require('express');
const app=express();
var mysql=require('mysql');
app.use(express.json());
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password1234",
        database: "project"

    });
    con.connect(function(err)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Connected");
        }
    })
    /*User validate API */

    app.post('/uservalidate',function(req,res)
    {
       var uname=req.body.username;
       var pass=req.body.password;
      
       var sql="select refUserRole from tblusers where txtUserName='"+uname+"' and txtPassword='"+pass+"';"
       
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
        });
    
       
  

    app.listen(8080,()=>
    {
        console.log("Server is running");
    })
