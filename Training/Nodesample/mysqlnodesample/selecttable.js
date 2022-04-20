var mysql = require("mysql");
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "assignstudent"

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
    var sql = "select id,StdName,district from tblstudentdetail;";

    con.query(sql, function (err, result) 
    {
        
        if (err) {
            console.log(err);
        }
        else {
            console.log("table created");
            console.log(result);
        }

    });
});