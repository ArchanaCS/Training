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
    var sql = "select tu.txtUserName,tu.id from tblusers tu join tbluserroles tr on tu.refUserRole=tr.id where tr.txtUserRole='Employee';;"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})

/* User task fetch of a selected user - Board Page*/

app.post('/usertaskfetch', function (req, res) {
    var uid = req.body.userId;
    var sql = "select txtTitle,txtStatus from tbltasks where refAssignee='" + uid + "';"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})


/***************************************PROJECT PAGE***********************************************************************************************/
/* API to fetch project details -Project Page  */

app.post('/projectdetailfetch', function (req, res) {
    var pownerid = req.body.poid;

    
    var sql = "SELECT tp.id,tp.txtName AS projectName,te.refAssignee as assignee,te.txtTitle AS Epic,te.txtStatus as Epicstatus,tt.txtTitle AS Task,tt.txtStatus AS taskstatus,tu.txtUserName as Projectowner FROM tblprojects tp JOIN tblepic te ON tp.id = te.refProjectId JOIN tbltasks tt ON tt.refEpicid = te.refProjectId join tblusers tu on te.refAssignee=tu.id WHERE tp.refProjectOwner = '"+pownerid+"';";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result);
    })
})
/**************************************************ADD PROJECT PAGE***************************************************************************************/
/*API to insert project details - Add Project Page */

app.post('/projectinsert', function (req, res) {
    var txtName = req.body.name;
    var txtType = req.body.type;
    var refProjectOwner = req.body.owner;
    var dtEstStartDate = req.body.stdate;
    var dtEstEndDate = req.body.endate;
    var sql = "insert into tblprojects(txtName,txtType,refProjectOwner,dtEstStartDate,dtEstEndDate)values('" + txtName + "','" + txtType + "','" + refProjectOwner + "','" + dtEstStartDate + "','" + dtEstEndDate + "');";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})


var epic=[{"epic":"name1"},{"epic":"name2"}];
var task1=[1,2,3];
var task2=[4,5,6];

var result=epic;
result[0]["task"]=task1
result[1]["task"]=task2;
console.log(result)
app.listen(8000, () => {
    console.log("Server is running");
})