const express=require('express');
const app=express();
app.use(express.json());

app.post('/add',function(req,res)
{
    
    var a= parseInt(req.body.numone);
    var b=parseInt(req.body.numtwo);
    var c= a+b;
    res.send('Sum is  = '+c);
})

app.post('/test',function(req,res)
{
    
    var a=parseInt(req.body.values[0].num3); 
    var c=parseInt(req.body.values[0].num4); 
    var b=parseInt(req.body.values[1].num5);
    var d=parseInt(req.body.values[1].num6);
   // res.send('result of num 3 :' +a +''+'result of num 4 :' +c+'num5 is  = '+b);
   result=a+b+c+d;
     res.send('Sum   = '+result);
    
})


app.listen(3000,()=>
{
     console.log("Server is running!!!!");
})