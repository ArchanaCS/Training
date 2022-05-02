const express=require('express');
const app=express();
app.use(express.json());

app.post('/sub',function(req,res){
    var a=parseInt(req.body.numone);
    var b=parseInt(req.body.numtwo);
    var s=a-b;
    res.send("Difference "+s);

})
app.post('/multi',function(req,res){
    var a=parseInt(req.body.numone);
    var b=parseInt(req.body.numtwo);
    var s=a*b;
    res.send("Product "+s);

})

app.post('/div',function(req,res){
    var a=parseInt(req.body.numone);
    var b=parseInt(req.body.numtwo);
    var s=a/b;
    res.send("Quotient "+s);

})
app.post('/add',function(req,res){
    var a=parseInt(req.body.numone);
    var b=parseInt(req.body.numtwo);
    var s=a+b;
    res.send("Product "+s);

})
app.listen(8080,()=>{
    console.log("server is listening");
})
