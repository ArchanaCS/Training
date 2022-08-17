const express = require('express')
const app = express()
const port = 8080

app.post('/addition', (req, res) =>{
    var a=10;
    var b=6;
   var c =a+b; 
   res.send('addition!'+c)
   console.log("a",a)
})
app.post('/subtraction', (req, res) =>{
   var a=10;
   var b=6;
  var c =10-6; 
  res.send('subtraction!'+c)
})
app.post('/multiplication', (req, res) =>{
   var a=10;
   var b=6;
  var c =10*6; 
  res.send('multiplication!'+c)
})
app.post('/division', (req, res) =>{
   var a=10;
   var b=6;
  var c =10/6; 
  res.send('Division : ! '+c)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})