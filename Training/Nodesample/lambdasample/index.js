exports.handler = async (event) => {
    // TODO implement
    var mysql = require('mysql');
    var con = mysql.createConnection(
  {
    host: "database-1.cnqwiwmwxmd4.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "abcd1234",
    database: "snowbird"

  });
con.connect(function (err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Connected");
  }
})
 var sql = "select tu.txtUserName,tu.id from tblusers tu join tbluserroles tr on tu.refUserRole=tr.id where tr.txtUserRole='Employee';;"
  con.query(sql, function (err, result) {
    if (err) throw err;
   return(result);
  })
};
