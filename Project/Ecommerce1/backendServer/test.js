var a=[
    {
      "classname": "standard1",
      "classTeacher": "Ajay",
      "studentdetails": [
        {
          "studentrollno": "1",
          "name":"ismail",
          "mark": [{              "english": "50",              "maths": "30",        "science": "90",        "maths": "30"
            }
          ]
        },
        {
          "studentrollno": "2",
          "studentname":"manu",
          "mark": [
            {
              "english": "75",              "maths": "60",     "science": "90",         }
          ]
        },
        {
          "studentrollno": "3",
          "studentname":"dony",
          "mark": [
            {              "english": "45",              "maths": "80", "science": "90", 
            }
          ]
        }
      ]
    }
  ]

  console.log(a[0].studentdetails[0].mark[0].maths);
  console.log(a[0]["studentdetails"][2]["mark"][0]["maths"]);