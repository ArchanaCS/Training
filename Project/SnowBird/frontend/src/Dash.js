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
  var temp;
  useEffect(() => {
    // var url='https://7pa5079le0.execute-api.us-west-2.amazonaws.com/default/fortesting'
    // var url = "http://localhost:8000/userfetch";
    var url="https://elvvu6z51m.execute-api.us-west-2.amazonaws.com/userfetch"
    // var request = '{"text1":"hi"}';
    var request ={};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data)
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

   function tasklist(id,index) {
    // var url = " https://poqffwu8v6.execute-api.us-west-2.amazonaws.com/usertaskfetch";
    var url="https://zrz50ev48l.execute-api.us-west-2.amazonaws.com/usertaskfetch";
    var header = {};
    var request = '{ "userId": "id" }';
    //console.log("req" + JSON.stringify(request));
     axios
      .post(url, request, header)
      .then((res) => {
        setTask(res.data);
        
      })
      .catch((err)=>{});

      SingleUserClick(index)
  }

  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        {/* <div className="firstrow">
            <div className="usericon"> 
            <div className="loginuser">
            <label>User</label>
            </div>
          </div>
        </div> */}
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

            {/* <div className="tasks"></div>
            <div className="taskbar1"> */}
             <div className="taskbar_1">
              <div className="lab"> <label>TODO</label></div>
               <div className="taskbar1">
             
              {task.map((taskitem, taskindex) => {
                if (taskitem.txtStatus == "to-do")
                  return (
                    <>
                      <p>{taskitem.txtTitle}</p>
                    </>
                  );
              })}
              </div>
            </div>


            {/* <div className="taskbar2"> */}
            <div className="taskbar_2">
             <div className="lab"><label>InProgress</label></div>
               <div className="taskbar2">
            
              {task.map((taskitem, taskindex) => {
                if (taskitem.txtStatus == "review")
                  return (
                    <>
                      <p>{taskitem.txtTitle}</p>
                    </>
                  );
              })}
              </div>
            </div>


            {/* <div className="taskbar3"> */}
            <div className="taskbar_3">
             <div className="lab"><label>OnReview</label></div>
               <div className="taskbar3">
             
              {task.map((taskitem, taskindex) => {
                if (taskitem.txtStatus == "Inprogress")
                  return (
                    <>
                      <p>{taskitem.txtTitle}</p>
                    </>
                  );
              })}
              </div>
            </div>


            {/* <div className="taskbar4"> */}
            <div className="taskbar_4">
             <div className="lab"><label>Completed</label></div>
               <div className="taskbar4">
             
              {task.map((taskitem, taskindex) => {
                if (taskitem.txtStatus == "completed")
                  return (
                    <>
                      <p>{taskitem.txtTitle}</p>
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