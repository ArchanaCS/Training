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

    
    var sql = "select tp.id,tp.txtName AS projectName,te.refAssignee as assignee,te.txtTitle AS Epic,te.id as Epicid ,te.txtStatus as Epicstatus,tt.txtTitle AS Task,tt.txtStatus AS taskstatus,tu.txtUserName as Projectowner FROM tblprojects tp JOIN tblepic te ON tp.id = te.refProjectId JOIN tbltasks tt ON tt.refEpicid = te.refProjectId join tblusers tu on te.refAssignee=tu.id WHERE tp.refProjectOwner = '3';";
    con.query(sql, function (err, result) {
        if (err) throw err;
        
    //    var epic=[];
    //    var task=[];
    //    var sample={};
    //    var len=result.length;
    //    console.log(len);
    //    var sample=[];
    //    var task1=[];
    //    res.send(result);
    //    for(var i=0;i<=len;i++)
    //    {
            
    //    sample=[{"taskname":result[i].Epicid}];

    //    if(sample[0].taskname==1)
    //    {
    //        task=[sample];
    //    }
    //    else{
    //         task1=[sample];
    //    }
    //    console.log("task"+JSON.stringify(task));
    //    console.log("task1"+JSON.stringify(task1)); 
    //    }
    //    //res.send(result);
     
        var epic=[];
        var epicid=result[0].Epicid;
        console.log(epicid);
       


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
/* API to fetch Managers- populate dropdown list  */

app.post('/ownerfetch', function (req, res) {
    
    var sql = "select tu.txtUserName,tu.id from tblusers tu join tbluserroles tr on tu.refUserRole=tr.id where txtUserRole='Manager'"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})

/*API for project Update */
app.post('/projectUpdate', function (req, res) {

    var pname = req.body.prjctname;
    var ptype = req.body.prjcttype;
    var owner = req.body.refowner;
    var startdate = req.body.strtdate;
    var enddate = req.body.endate;
    var prjctid = req.body.id;
    var sql = "update tblprojects set txtName='" + pname + "', txtType='" + ptype + "',refProjectOwner='" + owner + "',dtEstStartDate='" + startdate + "',dtEstEndDate='" + enddate + "' where id='" + prjctid + "' ;;"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})
/**************************************************************************************************************************************************************************** */
// var epic=[{"epic":"name1"},{"epic":"name2"}];
// var task1=[1,2,3];
// var task2=[4,5,6];

// var result=epic;
// result[0]["task"]=task1
// result[1]["task"]=task2;
// console.log(result)
app.listen(8000, () => {
    console.log("Server is running");
})