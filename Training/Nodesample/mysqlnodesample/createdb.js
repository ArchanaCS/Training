var mysql=require('mysql');

var con=mysql.createConnection(
    {
          host:"localhost",
          user:"root",
          password:"password",
          
          
    });

    con.connect(function(err)
    {
         if(err)
         {
             console.log(err)
         }
         else
         {
             console.log("connected!!!")
         }
             con.query("create database testdbcon", function (err, result)
              {
                if (err) 
                {
                    console.log(err);
                }
                else
                {
                   console.log("Database created");
                }
              });
         
    });