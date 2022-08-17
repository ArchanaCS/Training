const express=require('express')
const app=express();
app.use(express.json());

//webserver
// http://localhost:3000/
// http://localhost:3000/signup
// http://localhost:3000/profile

//backendserver
// http://localhost:8000/register
// http://localhost:8000/loginvalidate

app.get("/register",(req, res)=>{
    res.send("Test message")
})
app.get("/test",(req, res)=>{
    res.send("hello world")
})
app.post("/postman",(req, res)=>{
    res.send("Post in postman")
})
app.post("/add",(req,res)=>{
    var a=11;
    var b=6;
   var c =a+b; 
   res.send('addition!'+c)
   console.log("a",a)
})
app.post("/addition",(req,res)=>{
   
    var first=parseInt(req.body.abc);
    var second=parseInt(req.body.b)
    console.log("first"+first);
    var sum=first+second;
    res.send("sum"+sum);
})


app.listen(8000, ()=>{
    console.log("Server is running")
})