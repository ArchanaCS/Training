import { useState } from "react";
import Menu from "./Menu";
function Attendance() {
    const[disable,setDisable]=useState(false);
    function disablefirst(){

         document.getElementById("login").disabled = true;
         document.getElementById("logout").disabled = false;
    }
    function disablesecond(){
        document.getElementById("logout").disabled = true;
        document.getElementById("login").disabled = false;
    }
  return (
    <>
      <div className="outer">
        <div className="secondrow">
          {/* Side navigation menu */}
          {<Menu />}
          {/* Main outline */}
          <div className="prowone">
              <label>Attendance</label>
          </div>

          {/* Button for LOGIN and LOGOUT */}
          <div className="log_button">
          <button id="login"  onClick={disablefirst}>LOGIN</button>
          <button id="logout"  onClick={disablesecond} >LOGOUT</button>
          </div>


        </div>{" "}
        </div>
      
    </>
  );
}
export default Attendance;


