const express=require('express');
const app=express();
app.use(express.json());
app.post('/array',function(req,res)
{
    var a=parseInt(req.body.a);
    var b=parseInt(req.body.b);
    res.send('json array position 0 : ' +a +"\n"+'json array position 1: ' +b );

})

app.listen(8000,()=>
{
     console.log("Server is running!!!!");
})