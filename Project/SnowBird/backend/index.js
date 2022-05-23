const express = require('express');
const app = express();
var mysql = require('mysql');
const cors = require('cors');
app.use(cors());
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
  console.log(pownerid);
  var project = [];
  var epic = [];
  var task = [];
  //var sql = "select tp.id,tp.txtName AS projectName,te.refAssignee as assignee,te.txtTitle AS Epic,te.id as Epicid ,te.txtStatus as Epicstatus,tt.txtTitle AS Task,tt.txtStatus AS taskstatus,tu.txtUserName as Projectowner FROM tblprojects tp JOIN tblepic te ON tp.id = te.refProjectId JOIN tbltasks tt ON tt.refEpicid = te.refProjectId join tblusers tu on te.refAssignee=tu.id WHERE tp.refProjectOwner = '3';";

  con.query("SELECT  tp.id,tp.txtName,tu.txtUserName FROM tblprojects tp join tblusers tu on tp.refProjectOwner=tu.id where refProjectOwner ='" + pownerid + "';", function (err, result) {
    //console.log(result);
    project = [...result];

  })
  con.query("select id,refProjectId,refAssignee,txtTitle,txtStatus from tblepic;", function (err, result) {
    //console.log(result);

    epic = [...result];


  })
  con.query("select id,refEpicid,txtTitle,txtStatus from tbltasks;", function (err, result) {
    task = [...result];
    //})
    taskobj = {};
    epicobj = {};
    projectobj = {};
    task.forEach(element => {
      if (taskobj[element.refEpicid] == undefined)
        taskobj[element.refEpicid] = [element];
      else {
        temparray = taskobj[element.refEpicid];
        temparray.push(element)
      }
    });

    epic.forEach(element => {
      if (epicobj[element.refProjectId] == undefined)
        epicobj[element.refProjectId] = [element];


      else {
        temparray1 = epicobj[element.refProjectId];
        temparray1.push(element)
      }
      element["task"] = taskobj[element.id]
    });

    project.forEach(element => {
      if (projectobj[element.refProjectId] == undefined)
        projectobj[element.refProjectId] = [element];
      else {
        temparray = projectobj[element.refEpicid];
        temparray.push(element)
      }
      element["Epic"] = epicobj[element.id]
    });

    console.log(JSON.stringify(project));
    res.send(project);

  })

})



/**************************************************ADD PROJECT PAGE***************************************************************************************/
/*API to insert project details - Add Project Page */

app.post('/projectinsert', function (req, res) {
  var txtName = req.body.name;
  var txtType = req.body.type;
  var refProjectOwner = req.body.owner;
  // var dtEstStartDate = req.body.stdate;
  // var dtEstEndDate = req.body.endate;

  var sql = "insert into tblprojects(txtName,txtType,refProjectOwner)values('" + txtName + "','" + txtType + "','" + refProjectOwner + "');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    else
      //res.send(JSON.stringify(req));
      res.send(result);
      console.log(sql);
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

/*API to dispaly the details pf selected project*/
app.post('/selectedproject', function (req, res) {
  var id = req.body.prjctId;
  var sql = "SELECT tb.txtName,tb.txtType,tb.refProjectOwner ,tu.txtUserName from tblprojects tb join tblusers tu on tb.refProjectOwner=tu.id where tb.id='"+id+"';"
  con.query(sql,function(err,result)
  {
    if(err)throw err;
    res.send(result);
  })
})


/**************************************************************************************************************************************************************************** */

app.post('/projectdetailfetchNew', function (req, res) {

  var pownerid = 4;
  const project = new Promise((resolve, reject) => {
    con.query(
      "SELECT  tp.id,tp.txtName,tu.txtUserName FROM tblprojects tp join tblusers tu on tp.refProjectOwner=tu.id where refProjectOwner ='" + pownerid + "'",
      function (err, result) {
        if (err) resolve(err);
        resolve(result);
      }
    );
  });


  const epic = new Promise((resolve, reject) => {
    con.query(
      "select id,refProjectId,refAssignee,txtTitle,txtStatus from tblepic;",
      function (err, result) {
        if (err) resolve(err);
        resolve(result);
      }
    );
  });

  const task = new Promise((resolve, reject) => {
    con.query(
      "select id,refEpicid,txtTitle,txtStatus from tbltasks",
      function (err, result) {
        if (err) resolve(err);
        resolve(result);
      }
    );
  });

  Promise.all([project, epic, task]).then((values) => {
    var project = values[0];
    var epic = values[1];
    var task = values[2];

    var taskobj = {};
    for (element of task) {
      if (taskobj[element.refEpicid] == undefined) {
        taskobj[element.refEpicid] = [element];
      } else {
        var temp = taskobj[element.refEpicid];
        taskobj[element.refEpicid] = [...temp, element];
      }
    }
    for (element of epic) {
      if (taskobj[element.id] == undefined) element.task = [];
      else {
        element.task = taskobj[element.id];
      }
    }

    var epicobj = {};
    for (element of epic) {
      if (epicobj[element.refProjectId] == undefined) {
        epicobj[element.refProjectId] = [element];
      } else {
        var temp = epicobj[element.refProjectId];
        epicobj[element.refProjectId] = [...temp, element];
      }
    }
    for (element of project) {
      if (epicobj[element.id] == undefined) element.epic = [];
      else {
        element.epic = epicobj[element.id];
      }
    }
    console.log(JSON.stringify(project));
    res.send(project);
  });

})
/****************************************************Epic ****************************************/

app.post('/epicfetch',function(req,res)
{
     
  const epic = new Promise((resolve, reject) => {
    con.query(
      "select * from tblepic;",
      function (err, result) {
        if (err) resolve(err);
        resolve(result);
      }
    );
  });
}

)

app.listen(8000, () => {
  console.log("Server is running");
})