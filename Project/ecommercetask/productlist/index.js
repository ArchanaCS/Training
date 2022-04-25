const express=require('express');
const app=express();
app.use(express.json());
var mysql=require('mysql');
const { createConnection } = require('net');

var con=mysql.createConnection(
{
    host: "localhost",
    user: "root",
    password: "password1234",
    database: "ecommercetasks"

});

app.post('/',function(req,res)
{
      con.connect(function(err)
      {
          if(err)
          {
              console.log(err);
          }
          else
          {
              console.log("connected");
          }
          var sql="select txtProdName,txtProdPrice,dtUpdatedOn,dtCreatedOn from tblproduct;";
          con.query(sql,function(err,result)
          {
                 if(err)
                 {
                     console.log(err);
                 }
                 else{
                     res.send(result);
                 }
          })

      })
})
app.listen(8080,()=>
{
     console.log("server running");
});