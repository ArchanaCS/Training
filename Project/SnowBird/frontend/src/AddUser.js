import axios from "axios";
import { useEffect, useState } from "react";
import "./style/styles.css";
import Menu from './Menu'
function AddUser() {
  const[array,setArray]=useState([]);
  var temp;
  useEffect(()=>{
    var url="http://localhost:8000/userRolefetch";
    var req={};
    var header={};
    axios.post(url,req,header).then((res)=>{
      console.log(res.data);
        var len = res.data.length;
        if (len > 0) {
          setArray(res.data);
          //console.log(JSON.stringify(array));
           }
    }).catch();
  },[])
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow">
          <div className="usericon"></div>
          <label>User</label>
        </div>

        <div className="secondrow">
          {/* Side navigation menu */}
          {<Menu/>}
          <div className="secondcolumn">
            <div className="prowone">
              <label>Add User</label>
              <button >SAVE</button>
            </div>


            <div className="psecondrow">
              <div className="titlerow">
                <label>User Name</label>
                <br></br>
                <input type="text"/>
              </div>

              <div className="titlerow">
                <label>Password</label>
                <br></br>
                <input type="text"/>
              </div>
              <div className="typerow">
                <label>Role</label>
                <br></br>
                
                <select>
                {array.map((item,index)=>{
                  return<>
                   <option>{item.txtUserRole}</option>
                  </>
                })}
                
                </select>
              </div>

              </div>
            
              </div>

          
        </div>
      </div>
    </div>
  );
}
export default AddUser;
