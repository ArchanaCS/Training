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

/*User validate to check user and username and password  */

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

/* User Fetch to return all users to populate dropdown*/

app.post('/userfetch', function (req, res) {
    var sql = "select txtUserName,txtPassword,refUserRole from tblusers;;"
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

/*Update user , validation:check user */

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

/* API to fetch project details from Project  table  */

app.post('/projectdetailfetch', function (req, res) {
    var pid = req.body.id;
    
    //var sql = "select txtName,txtType,refProjectOwner,dtEstStartDate,dtEstEndDate from tblprojects where id='" + pid + "';";
    var sql="SELECT tp.txtName AS projectName,tp.refProjectOwner,te.txtTitle AS Epic,tt.txtDescription AS TaskDescription,tt.txtTitle AS Task, tt.txtStatus AS taskstatus FROM tblprojects tp JOIN tblepic te ON tp.id = te.refProjectId JOIN tbltasks tt ON tt.refEpicid = te.refProjectId WHERE tp.refProjectOwner = 3;";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result);
    })
})

/*API to insert project details to project table */

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

/*API to fetch Epic details from Epic table */

app.listen(8080, () => {
    console.log("Server is running");
})
