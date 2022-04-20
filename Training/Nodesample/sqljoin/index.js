const express = require('express');
const res = require('express/lib/response');
const app = express();
app.use(express.json());
var mysql = require("mysql");
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "assignstudent"
    });

app.post('/test', function (req, res) {

    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("connected !!!")
        }
    })
    var sql = "SELECT ts.StdName as Name, m.marks as Mark,tsub.subjects as Subject FROM tblstudentdetail ts JOIN tblmark m on ts.id = m.refStudent join tblsubjects tsub on m.refSubject=tsub.id  WHERE m.refStudent = '2';";
    con.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("data retrieved !!!");
            //console.log(result);

            res.send(result);
        }
    });

});
app.listen(3000, (req, res) => {
    console.log("Connected !!!");
})