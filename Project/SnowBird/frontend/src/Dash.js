import { useNavigate } from "react-router-dom";
import Singleuser from "./Singleuser";
import "./style/styles.css";
function Dash() {
  var navigate=useNavigate();
 function project()

 {
   navigate('/project');
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
              <li onClick={project}>Projects</li>
              <li>Epics</li>
              <li>Tasks</li>
              <li>Sprints</li>
              <li>Users</li>
            </nav>
          </div>

          {/* Main outline */}
          <div className="secondcolumn">
            <div className="usernamerow">
              <Singleuser/><Singleuser/><Singleuser/><Singleuser/><Singleuser/>
             
             
            </div>
            {/* Task status name */}
            <div className="statusnamerow">
              <label>TO DO</label>
              <label>InProgress</label>
              <label>Review</label>
              <label>Complete</label>
            </div>
            <div className="tasks"></div>
            <div className="taskbar1"> </div>
            <div className="taskbar2"> </div>
            <div className="taskbar3"> </div>
            <div className="taskbar4"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dash;
