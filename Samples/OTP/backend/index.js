
// const { Auth, LoginCredentials } = require("two-step-auth");
const otpGenerator = require('otp-generator')
const express=require('express');
const app=express();
app.use(express.json());
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database:"crm"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.post('/otpgenerate',(req,res)=>{
    let otp=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    let sql="update tblusers set txtOTP='"+otp+"' where id =1;";
    con.query(sql,function(err,result){
        if(err)throw err;
        console.log("value inserted")
    })

    console.log("otp",otp)
    console.log("sql",sql)
    res.send(otp)
  

})

app.listen(8000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port 8000");
})





















