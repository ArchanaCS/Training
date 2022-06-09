import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import SprintBox from "./SprintBox";
function SprintBoard(){
    const [sprintlist,setSprintList]=useState([]);
    useEffect(()=>{
        
        var req={};
        var header={};
        var url="http://localhost:8000/sprintfetch";

        axios.post(url,req,header).then((res)=>{
            console.log(JSON.stringify(res.data));
            setSprintList(res.data);
        }).catch();
    },[])
    return<>
    <div className="outer">
        <div className="secondrow">
          {/* Side navigation menu */}
          {<Menu />}
          {/* Main outline */}
          <div className="secondcolumn">
          <div className="prowone">
              <label>Sprint Board</label>
        </div> 
        <div className="sprint_box">
        {sprintlist.map((item,index)=>{
            return<>
            {item.refSprintid==1}
             {<SprintBox index={item.refSprintid}/>}
            </>
            
        })}
        </div>
        <div className="task_row">
            <h3 style={{color:"gray"}}>Tasks</h3>
            <table>
            <thead>
            <th style={{width:10}}>#id</th>
            <th >Task</th>
            <th>Status</th>
            <th>Epic</th>
            <th>Project</th>
            </thead>
            <tbody>
                <td>1</td>
                <td>Task1</td>
                <td>To-do</td>
                <td>Epic1</td>
                <td>Event Management</td>
            </tbody>
            </table>
        </div>
          
        </div>
          </div>
          </div>

    </>
}
export default SprintBoard;