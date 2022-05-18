const express = require('express');
const app = express();
var mysql = require('mysql');
app.use(express.json());
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password1234",
        database: "project"

    });
con.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Connected");
    }
})
/**********************************  BOARD PAGE  ************************************************************/

/*All Users fetch (display all users on top)- Board Page*/

app.post('/userfetch', function (req, res) {
    var sql = "select tu.txtUserName from tblusers tu join tbluserroles tr on tu.refUserRole=tr.id where tr.txtUserRole='Employee';;"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})



app.listen(8000, () => {
    console.log("Server is running");
})