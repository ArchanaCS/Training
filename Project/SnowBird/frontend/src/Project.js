import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Project() {
 const navigate=useNavigate();
 const [array,setArray]=useState([]);
 var url="http://localhost:8000/projectdetailfetch";
 var request={poid:4};
 var header={};
 useEffect(()=>{
      
       axios.post(url,request,header).then((res)=>{
             setArray(res.data);             
       }).catch();

 },[])
 const [test,setTest]=useState([1,2,3])
  function createnew()
  {
    navigate('/addproject');
  }
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow">
          <div className="usericon"> </div>
          <label>User</label>
        </div>
        <div className="secondrow">
          {/* Side navigation menu */}

          <div className="firstcolumn">
            <nav>
              <li>Board</li>
              <li>Projects</li>
              <li>Epics</li>
              <li>Tasks</li>
              <li>Sprints</li>
              <li>Users</li>
            </nav>
          </div>
          <div className="secondcolumn">
            <div className="prowone">
              <label>Projects</label>
              <button onClick={createnew}>Create New</button>
            </div>
            <div className="tablerow">
              <table>
                <thead>
                  <th>#id</th>
                  <th >Project name</th>
                  <th>Project owner</th>
                </thead>

                <tbody>
                  {array.map((item,index)=>{
                    return(<>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.txtName}</td>
                      <td>{item.txtUserName}</td>
                      <td>{JSON.stringify(item.Epic)}</td>
                    </tr>
                    <> 
                    {test.map((chilItem,childIndex)=>{
                      return <tr><td>Test</td></tr>
                    })}
                    </>
                     
                   {/* {item.Epic.map((epicitem,epicindex)=>{
                      <tr>
                      <td>{epicitem.txtTitle}</td>
                      <td>{epicitem.txtStatus}</td>
                    </tr>
                  })}   */}
                    
                    </>)
                  })}
                 
                  {/* <tr>
                    <td>1 </td>
                    <td>ECommerce</td>
                    <td>Abc</td>
                  </tr>
                  <tr>
                    <td>1 </td>
                    <td>ECommerce</td>
                    <td>Abc</td>
                  </tr> */}
                </tbody>
              </table>
              <div className="pbutton">
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
