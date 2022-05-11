var Student = [
    {
        id: "101",
        name: "John",
        dob: 1994,
        mark: 300
    },
    {
        id: "102",
        name: "Alex",
        dob: 1998,
        mark: 270
    },
    {
        id: "103",
        name: "Manu",
        dob: 1995,
        mark: 290
    }
 ]

//  Find the id of value 'manu'

console.log("Id of Manu  : " +Student[2]["id"]);

// Find the student name of highest mark
 
  var st1=Student[0]["mark"];
  var st2=Student[1]["mark"];
  var st3=Student[2]["mark"];
    
      if(Student[0]["mark"] > Student[1]["mark"])
      {
          if(Student[0]["mark"]> Student[2]["mark"])
           console.log("Student name of highest mark :  " +Student[0]["name"]);
           else
           {
               console.log("Student name of highest mark  : " +Student[2]["mark"]);
           }
      }
     else 
     {
         console.log("Student name of highest mark : " +Student[1]["mark"]);
     } 
   
  
// Find the first element of json

console.log( "{" +Student[0]["id"]+"," +Student[0]["name"]+"," +Student[0]["dob"]+"," +Student[0]["mark"]+"}");

