const express = require('express');
const app = express();
var mysql = require("mysql");
app.use(express.json());
var con = mysql.createConnection(
     {
          host: "localhost",
          user: "root",
          password: "password",
          database: "assignstudent"

     });

app.post('/test', function (req, res) 
{
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
          var sql = "select id,StdName,district from tblstudentdetail;";

          con.query(sql, function (err, result) 
          {

               if (err) 
               {
                    console.log(err);
               }
               else 
               {
                    console.log("table created");
                    //console.log(result);
                    res.send(result);
               }

          });
     })
})
     app.listen(8080, () => 
     {
          console.log("Server is running!!!!");
     })
