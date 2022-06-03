const express = require('express');
const app = express();
var mysql = require('mysql');
const cors = require('cors');
// const react = require('react');
//const { useSyncExternalStore } = require('react/cjs/react.production.min');
app.use(cors());
app.use(express.json());
var con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password1234",
    database: "kiosk"

  });
  con.connect(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Connected");
    }
  })

  /**********************************************************************************************/ 

  app.post('/qfetch',function(req,res){

    var no=req.body.id;
    var sql="select id,txtQuestion from tblsurvery where id='"+no+"'";
    con.query(sql,function(err,result)
    {
        if (err)throw err;
        res.send(result);
    })

  })
  app.listen(8000, () => {
    console.log("Server is running");
  })

