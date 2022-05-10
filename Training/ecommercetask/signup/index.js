const express=require('express');
const app=express();
var sql=require("mysql");
app.use(express.json());
var con=sql.createConnection(
{
    host:"localhost",
    user:"root",
    password:"password1234",
    database:"ecommercetasks"

});

app.post('/cntryfetch',function(req,res)
{
   con.connect(function(err)
   {
      if(err)
      {
         console.log(err);
      }
      else
      {
         console.log("Connected!!!")
      }
      var sql="select id,txtCountryName from tblcountry;";
      con.query(sql,function(err,result)
      {
          if(err)
          {
              console.log(err);
          }
          else
          {
              console.log(result);
              res.send(result);
          }

      })
   })
});

app.post('/statefetch',function(req,res)
{
    var cid=req.body.id;
   con.connect(function(err)
   {
          if(err)
          {
              console.log(err);
          }
          else
          {
               console.log("connected")
          }
          var sql="select id,txtStateName from tblstate where  refCountryName='"+cid+"';";
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
   })
});
app.post('/userinsert',function(req,res)
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
         var sql="insert into tblusers (txtUsername,txtFirstName,txtPassword,dtCreatedOn,dtUpdatedOn,txtPincode,txtPhoneNo) values ('shiva','shivani','q1w2e','2022-04-22','2022-04-22','234','3242');";
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

})
app.listen(8080,function(req,res)
{
    console.log("Server is running!!");
})