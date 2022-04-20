var mysql = require("mysql");
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "testdbcon"

    });

con.connect(function (err) 
{
    if (err) 
    {
        console.log(err);
    }
    else
    {
        console.log("Connected");
    }
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

    con.query(sql, function (err, result) 
    {
        
        if (err) {
            console.log(err);
        }
        else {
            console.log("table created");
        }

    });
});