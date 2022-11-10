
const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors())
var mysql = require('mysql');
var request = require('request');

var moment = require('moment');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database:"students"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post('/test',(req,res)=>
{    
   
    let sql="select id,txtname from tblstudent;";
    con.query(sql,(err,result)=>{
        if (err)throw err;
        res.send(result);

    })

  })
app.delete('/delete',(req,res)=>{
  console.log("hi")
  let id= req.body.id;
  console.log(req.body)
  let sql="delete from tblstudent where id='"+id+"';";
  con.query(sql,(err,result)=>{
    if(err)throw err;
    
    res.send(result)
  })

})

app.post("/date",(req,res)=>{

let date=req.body.date;
console.log(date)
let fdate=moment(date).format('YYYY-MM-DD HH:mm:ss')
let sql="insert into tbldate (txtdate)values('"+fdate+"');";
console.log("sql",sql)
con.query(sql,(err,result)=>{

  res.send("updated");
})

})

app.post("/retrieve",(req,res)=>
{
 let sql="select txtdate from tbldate where id=1;"
 con.query(sql,(err,result)=>{
  res.send(result);

 })
})
app.listen(8000, function (err) {
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port 8000");
  });
  