const express=require ('express')
const app = express()
const port = 8080

app.post('/helloworld',function(req,res)
{
    res.send('Hello world!!!')
})

app.post('/add',function(req,res)
{
    var a=4
    var b=5
    var c=a+b
    res.send('addition : ' +c)
})

app.post('/sub',function(req,res)
{
    var a=4
    var b=5
    var c=a-b
    res.send('subtraction : ' +c)
})
app.listen(port, function (){
    console.log(`Example app listening on port ${port}`)
  })