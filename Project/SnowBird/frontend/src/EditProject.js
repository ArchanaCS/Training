import { useEffect } from "react";


function EditProject() {
  useEffect(()=>{

    


  },[])
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
                <label>Edit Project</label>
                <button>SAVE</button>
              </div>
  
              <div className="psecondrow">
                  <div className="titlerow">
                  <label>Title</label><br></br>
                     <input type="text"/>
               </div>
               <div className="descriptiion">
                   <label>Description</label><br></br>
                   {/* <textarea/> */}
                   <input type="text"/>
               </div>
  
               <div className="typerow">
                 <label>Type</label><br></br>
                 <select>
                     <option>--options--</option>
                     <option>Telecom</option>
                     <option>Business</option>
                 </select>
               </div>
  
               <div className="ownerrow">
                 <label>Owner</label><br></br>
                 <select>
                     <option>--options--</option>
                     <option>AAA</option>
                     <option>BBB</option>
                 </select>
               </div>
              </div>
            </div>
  
  
       </div>
        </div>
      </div>
    );
  }
  export default EditProject;
  