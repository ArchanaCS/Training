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
    });

    app.post('/orderfetch',function(req,res)
    {
        con.connect(function(err)
        {
             if(err)
             {
                 console.log(err)
             }
             else
             {
                 console.log("connected!!")
             }
             var sql="select id,txtOrderNo,txtOrderAmount,dtCreatedOn,dtUpdatedOn from tblorderhdr;";
             con.query(sql,function(err,result)
             {
                     if(err)
                     {
                         console.log(err)
                     }
                     else
                     {
                        res.send(result);
                     }
             })

        });

    })

    app.listen(8080,()=>
    {
           console.log("server is running");
    });