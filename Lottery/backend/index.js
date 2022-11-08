var express=require('express');
var app=express();
var mysql=require('mysql')
app.use(express.json())
var cors=require('cors')
app.use(cors())

var con=mysql.createConnection(
    {
    host:"localhost",
    user:"root",
    password:"password",
    database:"lotterydrums"
    }
)
con.connect(function(err){
    if(err)throw err;
    console.log("Connected")
})

app.post("/uservalidate",function(req,res){
    let username=req.body.username;
    let password=req.body.password;
    console.log(req.body)
    let sql="select id from tblusers where txtUemail='"+username+"' and txtUpassword='"+password+"';";
    console.log("sql",sql)
    con.query(sql,(err,result)=>{
        if(result!="")
        {
            console.log(result)
            res.send(result) 
        }
        else{
            console.log(result)
            
            res.send("User doesn't exist")
        }
    })
})


app.listen(8080,(err)=>{
    if(err)throw(err)
    console.log("Server running in port 8080")

})