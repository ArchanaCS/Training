import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Singleuser from "./Singleuser";
import "./style/styles.css";
import Menu from "./Menu";
function Dash() {
  var navigate = useNavigate();
  const [array, setArray] = useState([]);
  const [task, setTask] = useState([]);
  const [firstArray, setFirstArray] = useState([ ]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);
  const [fourthArray, setFourthArray] = useState([]);
  const [dragElement, setDragElement] = useState({});
  var temp;
  useEffect(() => {
    var url = "http://localhost:8000/userfetch";
    var request = {};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        for (const element of res.data) {
          element.isSelected = true;
          setArray(res.data);
        }
        console.log("array"+JSON.stringify(array));
    
      })
      .catch()   
  }, []);

  const SingleUserClick=(indx)=>{
    // alert(indx)
    const temp=[...array]
    for (const element of temp) {
      element.isSelected = false;
    }
    temp[indx].isSelected=true; 
    setArray(temp)
  }

   function tasklist(e,id,index) {
    e.preventDefault("id tasklist",id);
    console.log()
     setFirstArray([ ]);
    setSecondArray([ ]);
    setThirdArray([ ]);
    setFourthArray([ ]);
    var url = "http://localhost:8000/usertaskfetch";
    var header = {};
    var request = { userId: id };
    console.log("req" + JSON.stringify(request));
     axios
      .post(url, request, header)
      .then((res) => {
        setTask(res.data);
        var array1 = res.data;

        console.log("arr" + JSON.stringify(array1));
        for (const element of array1) {
          console.log("elemnt==>" + JSON.stringify(element));
          if (element.txtStatus == "To Do") {
            var ab = [...firstArray];
            setFirstArray([ab, element]);
            // console.log("hh"+[JSON.stringify(...firstArray), element])
            console.log("here1" + ab);
          } else if (element.txtStatus == "InProgress") {
            var bc = [...secondArray];
            setSecondArray([bc, element]);
            console.log("here2" + bc);
          } else if (element.txtStatus == "Review") {
            var cd = [...thirdArray];
            setThirdArray([cd, element]);
            console.log("here3" + cd);
          } else if (element.txtStatus == "Complete") {
            var ef = [...fourthArray];
            setFourthArray([ef, element]);
            console.log("here4" + ef);
          } else {
            console.log("no task");
          }
        }
      })

      .catch((err)=>{});
      
      

      SingleUserClick(index)
  }
//   function setTaskClick(e, id,index) {
    
//     e.preventDefault();
    
//      setFirstArray([ ]);
//     setSecondArray([ ]);
//     setThirdArray([ ]);
//     setFourthArray([ ]);
//     //alert("hi" + id);
//     var url = "http://localhost:8000/usertaskfetch";
//     var request = { id: id };
//     var header = {};
//     axios
//       .post(url, request, header)
//       .then((res) => {
//         console.log(res.data);
//         setTask(res.data);
//         var array1 = res.data;

//         console.log("arr" + JSON.stringify(array1));
//         for (const element of array1) {
//           console.log("elemnt==>" + JSON.stringify(element));
//           if (element.txtStatus == "To Do") {
//             var ab = [...firstArray];
//             setFirstArray([ab, element]);
//             // console.log("hh"+[JSON.stringify(...firstArray), element])
//             console.log("here1" + ab);
//           } else if (element.txtStatus == "InProgress") {
//             var bc = [...secondArray];
//             setSecondArray([bc, element]);
//             console.log("here2" + bc);
//           } else if (element.txtStatus == "Review") {
//             var cd = [...thirdArray];
//             setThirdArray([cd, element]);
//             console.log("here3" + cd);
//           } else if (element.txtStatus == "Complete") {
//             var ef = [...fourthArray];
//             setFourthArray([ef, element]);
//             console.log("here4" + ef);
//           } else {
//             console.log("no task");
//           }
//         }
//       })

//       .catch();
//   }
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const handleDrop =(e) =>{
   // console.log(e);
   //console.log(dragElement.item);
    var target=e.target.className;
    var startedDiv=dragElement.startedDiv;
  
    if((target!=startedDiv) && (e.target.className=="taskbar1"||
    e.target.className=="taskbar2"||
    e.target.className=="taskbar3"||
    e.target.className=="taskbar4"))
    {
      if(startedDiv=="taskbar1")
     { delete firstArray[dragElement.index];
     }else if (startedDiv == "taskbar2") {
      delete secondArray[dragElement.index];
    } else if (startedDiv == "taskbar3") {
      delete thirdArray[dragElement.index];
    } else if (startedDiv == "taskbar4") {
      delete fourthArray[dragElement.index];
    }
    if (target == "taskbar1") {
      var temp = [...firstArray];
      console.log("dragelement==>"+JSON.stringify(dragElement))
      temp.push(dragElement.item);
      setFirstArray(temp);
    }
    else if (target == "taskbar2") {
      var temp = [...secondArray]
      console.log("dragelement==>"+JSON.stringify(dragElement))
      temp.push(dragElement.item); 
      setSecondArray(temp);
      
      
      
    }
    else if (target == "taskbar3") {
      var temp = [...thirdArray];
      console.log("dragelement==>"+JSON.stringify(dragElement))
      temp.push(dragElement.item);
      setThirdArray(temp);
    }
    if (target == "taskbar4") {
      var temp = [...fourthArray];
      console.log("dragelement==>"+JSON.stringify(dragElement))
      temp.push(dragElement.item);
      setFourthArray(temp);
    }
    }

  }
  const handleDrag = (e, index, startedDiv, item) => {
    console.log(startedDiv);
      console.log(index);
    setDragElement({ index: index, startedDiv: startedDiv, item:item });
   
  };
  return (
    <div>
      <div className="outer">
        <div className="secondrow">
          {/* Side navigation menu */}

          {<Menu />}

          {/* Main outline */}
          <div className="secondcolumn">
           
            <div className="listcontainer">
              <div className="usernamerow">
                {array.map((item, index) => {
                  return (
                    <>
                      {
                        <Singleuser
                          items={item}
                          index={index}
                          getUid={tasklist}
                          SingleUserClick={SingleUserClick}
                        />
                      }
                    </>
                  );
                })}
              </div>
            </div>
            
            {/* Task status name */}
            {/* <div className="statusnamerow">
              <label>TO DO</label>
              <label>InProgress</label>
              <label>Review</label>
              <label>Complete</label>
            </div> */}
            
             <div className="taskbar_1">
              <div className="lab"> <label>ToDo</label></div>
               <div className="taskbar1" onDragOver={(e) => allowDrop(e)}
          onDrop={(e) => handleDrop(e)}>
             {firstArray.map((item, index) => {
              return (
                <>
                  
                  <p
                    draggable="true"
                    onDragStart={(e)=>handleDrag(e,index,"taskbar1",item)}
                    >
                     <p>{item.txtTitle}</p>
                  </p>
                  
                </>
              );
            })}
                
               </div>
             </div>
             <div className="taskbar_2">
             <div className="lab"><label>InProgress</label></div>
               <div className="taskbar2" onDragOver={(e) => allowDrop(e)}
          onDrop={(e) => handleDrop(e)}>
            {/* {JSON.stringify(secondArray)} */}
            {secondArray.map((item, index) => {
              return (
                <>
                  <p
                    draggable="true"
                    onDragStart={(e)=>handleDrag(e,index,"taskbar2",item)}
                    >
                     <p>{item.txtTitle}</p>
                  </p>
                </>
              );
            })}

          </div>
             </div>
             <div className="taskbar_3">
             <div className="lab"><label>OnReview</label></div>
               <div className="taskbar3"
               onDragOver={(e) => allowDrop(e)}
               onDrop={(e) => handleDrop(e)}>
                 {/* {JSON.stringify(thirdArray)} */}
            {thirdArray.map((item, index) => {
              return (
                <>
                  <p
                    draggable="true"
                    onDragStart={(e)=>handleDrag(e,index,"taskbar3",item)}
                    >
                     <p>{item.txtTitle}</p>
                  </p>
                </>
              );
            })}
               </div>
             </div>
             <div className="taskbar_4">
             <div className="lab"><label>Completed</label></div>
               <div className="taskbar4" onDragOver={(e) => allowDrop(e)}
          onDrop={(e) => handleDrop(e)}>
            {/* {JSON.stringify(fourthArray)} */}
            {fourthArray.map((item, index) => {
              return (
                <>
                  <p
                    draggable="true"
                    onDragStart={(e)=>handleDrag(e,index,"taskbar4",item)}
                    >
                     <p>{item.txtTitle}</p>
                  </p>
                </>
              );
            })}
          </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Dash;