const express=require('express');
const app=express();
app.use(express.json());
app.post('/array',function(req,res)
{
    var a=parseInt(req.body[0]);
    var b=parseInt(req.body[1]);
    res.send('json array position 0 : ' +a +"\n"+'json array position 1: ' +b );

})

app.listen(3000,()=>
{
     console.log("Server is running!!!!");
})