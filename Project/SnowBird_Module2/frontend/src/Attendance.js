import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "./Menu";
function Attendance() {
  const[disable,setDisable]=useState("0");
  useEffect(()=>{
    var url="http://localhost:8000/fetchstatus";
    var request={};
    var header={};
    axios.post(url,request,header).then((res)=>{
      console.log("current"+res.data[0].txtStatus);
      if(res.data[0].txtStatus==1)
      {
        
        document.getElementById("login").disabled = true;
        document.getElementById("logout").disabled = false;
        
        
      }
      else{
        document.getElementById("logout").disabled = true;
        document.getElementById("login").disabled = false;
      }
     

    }).catch();
  },[])
    
    function disablefirst(disable)
    {

         document.getElementById("login").disabled = true;
         document.getElementById("logout").disabled = false;
        
         var url_login="http://localhost:8000/updatestatus";
         console.log("dis"+disable);
         var request_login={status:disable};
         console.log("Stat"+JSON.stringify(request_login));
         var header_login={};
         axios.post(url_login,request_login,header_login).then((res)=>{
           console.log(res.data);

         }).catch();
    }
    function disablesecond(){
        document.getElementById("logout").disabled = true;
        document.getElementById("login").disabled = false;

        var url_logout="http://localhost:8000/updatestatus";
        console.log("dis"+disable);
        var request_logout={status:disable};
        console.log("Stat"+JSON.stringify(request_logout));
        var header_logout={};
        axios.post(url_logout,request_logout,header_logout).then((res)=>{
          console.log(res.data);
        }).catch();
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
          <button id="login"  onClick={(()=>{disablefirst(1)})}>LOGIN</button>
          <button id="logout"  onClick={disablesecond} >LOGOUT</button>
          </div>


        </div>{" "}
        </div>
      
    </>
  );
}
export default Attendance;


