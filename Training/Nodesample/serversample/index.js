var http = require('http');

//create a server object:
http.createServer(function (req, res) 
{
   // var a =5;
   // var b=6;
   
    var result=5;
    var a=1;
    var b=1;
    for(i=1;i<=4;i++)
    {
       for (j=1;j<=i;j++)
       {
           res.write(''+result+' ');
       }
       res.write('\n');
    }
    
   // res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080