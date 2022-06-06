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
          <div className="prowone">
              <label>Sprint Board</label>
        </div> 
        {sprintlist.map((item,index)=>{
            return<>
             {<SprintBox index={item.refSprintid} />}
            </>
            
        })}
        
        <div className="thirdrow">
            <table>
                <th></th>
            </table>
        </div>
          
         
          </div>
          </div>

    </>
}
export default SprintBoard;