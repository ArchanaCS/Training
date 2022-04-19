const express = require('express')
const app = express()
const port = 3000

app.get('/addition', (req, res) =>{
    var a=10;
    var b=6;
   var c =a+b; 
   res.send('addition!'+c)
})
app.get('/subtraction', (req, res) =>{
   var a=10;
   var b=6;
  var c =a-b; 
  res.send('subtraction!'+c)
})
app.get('/multiplication', (req, res) =>{
   var a=10;
   var b=6;
  var c =a*b; 
  res.send('multiplication!'+c)
})
app.get('/division', (req, res) =>{
   var a=10;
   var b=6;
  var c =a/b; 
  res.send('Division : ! '+c)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})