import axios from "axios";

import { useEffect, useState } from "react";
function AddProject() {
  const [options, setOption] = useState([]);
  const [name, setTextName] = useState("");
  const [type, setTextType] = useState("");
 const [owner, setRefOwner] = useState("3");
  //  Dropdown for owner
  useEffect(() => {
   
    var url = "http://localhost:8000/ownerfetch";
    var request = {};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        var len = res.data.length;
        // setA(len);
        if (len > 0) {

          setOption(res.data);
         
        }

      })
      .catch();
  },[]);
  //Insert of new project
  function handleclick() {
    var url = "http://localhost:8000/projectinsert";
    var request = { name:name, type:type,owner:owner};
   // console.log(JSON.stringify(request));
    console.log("options :"+JSON.stringify(options));
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res);

      })
      .catch();
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
              <label>Add Project</label>
              <button onClick={handleclick}>SAVE</button>
            </div>

            <div className="psecondrow">
              <div className="titlerow">
                <label>Title</label>
                <br></br>
                {/* onChange={(e)=>{setTextName(e.target.value)}} */}
                <input type="text" onChange={(e)=>{setTextName(e.target.value)}} />
              </div>
              <div className="descriptiion">
                <label>Description</label>
                <br></br>
                {/* <textarea/> */}
                <input type="text" />
              </div>

              <div className="typerow">
                <label>Type</label>
                <br></br>
                {/* onSelect={(e)=>{setTextType(e.target.value)}} */}
                <select onChange={(e)=>{setTextType(e.target.value)}}>
                  <option>--options--</option>
                  <option>Telecom</option>
                  <option>Business</option>
                </select>
              </div>

              <div className="ownerrow">
                <label>Owner</label>
                <br></br>
                {/* onSelect={(e)=>{setRefOwner(e.target.value)}} */}
                <select onChange={(e)=>{setRefOwner(e.target.value)}} >
                 
                  {options.map((item, index) => {
                    return <option>{item.txtUserName}</option>
                          
                    
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
export default AddProject;
