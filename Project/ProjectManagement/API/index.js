const { response } = require('express');
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


/***************************************** LOGIN PAGE  *******************************************/


/*User validate to check user and username and password -Login Page */

app.post('/uservalidate', function (req, res) {
    var uname = req.body.username;
    var pass = req.body.password;

    var sql1 = "select id from tblusers where txtUserName='" + uname + "';"
    var sql2 = "select refUserRole from tblusers where txtUserName='" + uname + "' and txtPassword='" + pass + "';"
    con.query(sql1, function (err, result) {
        var a = result[0];
        if (a == undefined) {
            res.send("User does not exist!!!");
        }
        else {
            con.query(sql2, function (err, result) {
                if (err) throw err;
                else {
                    res.send(result);
                }
            })
        }
    });
});

/**********************************  BOARD PAGE  ************************************************************/

/*All Users fetch (display all users on top)- Board Page*/

app.post('/userfetch', function (req, res) {
    var sql = "select tu.txtUserName from tblusers tu join tbluserroles tr on tu.refUserRole=tr.id where tr.txtUserRole='Employee';;"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})

/* User task fetch of a selected user - Board Page*/

app.post('/usertaskfetch', function (req, res) {
    var uid = req.body.userId;
    var sql = "select txtTitle,txtStatus from tbltasks where refAssignee='" + uname + "';"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})
/********************************************  PROJECT PAGE  *****************************************************/

/* API to fetch project details -Project Page  */

app.post('/projectdetailfetch', function (req, res) {
    var pid = req.body.id;

    //var sql = "select txtName,txtType,refProjectOwner,dtEstStartDate,dtEstEndDate from tblprojects where id='" + pid + "';";
    var sql = "SELECT tp.txtName AS projectName,tp.refProjectOwner,te.txtTitle AS Epic,tt.txtDescription AS TaskDescription,tt.txtTitle AS Task, tt.txtStatus AS taskstatus FROM tblprojects tp JOIN tblepic te ON tp.id = te.refProjectId JOIN tbltasks tt ON tt.refEpicid = te.refProjectId WHERE tp.refProjectOwner = 3;";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result);
    })
})

/*************************************** ADD PROJECTS PAGE*********************************************************/

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
    var sql = "select txtUserName from tblusers where refUserRole=1;"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})

/************************************Edit project******************************************/

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
/*************************************** EPIC PAGE ****************************************************************/

/*API to fetch Epic details from Epic table */
app.post('/epicfetch', function (req, res) {
    var pid=req.body.prjctid;
    var sql = "SELECT te.id as id,te.txtTitle as EpicName,te.txtStatus as Statuss,tp.txtName as ProjectName,tt.txtTitle as TaskName,tt.txtStatus as TaskStatus FROM tblprojects tp JOIN tblepic te ON tp.id=te.refProjectId join tbltasks tt on te.id= tt.refEpicid where te.refProjectId='"+pid+"';";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})

/******************************************* ADD EPIC PAGE ************************************************************** */

/* API for UserFetch - 'Assigned to' dropdown for Add epic */
app.post('/userfetchEpic', function (req, res) {
    var sql = "select id,txtUserName from tblusers  where refUserRole = 2;;"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})

/*  API for Projectfetch*/

app.post('/projectfetch', function (req, res) {
    var ownerid=req.body.prjctowner;
    var sql = "select id,txtName from tblprojects where refProjectOwner='"+ownerid+"';;"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})

/* API for EpicInsert */



/*****************************************  ADD USER  **************************************************************** */
/* API for fetchUserRole-- populate dropdown*/

app.post('/userRolefetch', function (req, res) {
    var sql = "select refUserRole from tblusers;;"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})



/* API to insert user after validating the user exist */

app.post('/insertuser', function (req, res) {
    var uname = req.body.username;
    var pass = req.body.password;
    var typ = req.body.type;
    var sql1 = "select id from tblusers where txtUserName='" + uname + "';"
    var sql2 = "insert into tblusers(txtUserName,txtPassword,refUserRole)values('" + uname + "','" + pass + "','" + typ + "');"
    con.query(sql1, function (err, result) {
        var a = result[0];
        if (a != undefined) {
            res.send("User already exist!!!");
        }
        else {
            //res.send("Ready to insert values into user "+uname);
            con.query(sql2, function (err, result) {
                if (err) throw err;
                res.send(result);
            })
        }
    });
})
/************************************************* EDIT USER ******************************************************* */
/* API for Updateuser-- validation:check user */

app.post('/userupdate', function (req, res) {
    //fetch id from users where username=req username

    var uname = req.body.username;
    var pass = req.body.password;
    var ty = req.body.reftype;
    var uid = req.body.id;
    var sql1 = "select id from tblusers where txtUserName='" + uname + "';";
    var sql2 = "update tblusers set txtPassword='" + pass + "',txtUserName='" + uname + "' ,refUserRole='" + ty + "'where id= '" + uid + "';";
    con.query(sql1, function (err, result) {

        //if id exists
        if (result.length > 0) {
            //if id=reqid?
            if (result[0].id == req.body.id) {
                //update 
                con.query(sql2, function (err, result) {
                    if (err) throw err;
                    res.send(result);
                })
            }
            //else
            else {
                //return userexists
                res.send("User exist");
            }
        }
        //else
        else {
            res.send("user doesnt exist");
        }
    });
})
/********************************************************************************************************* */








app.listen(8080, () => {
    console.log("Server is running");
})
