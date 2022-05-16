import "./style/styles.css";
function Dash() {
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

         {/* Main outline */}
         <div className="secondcolumn">
                <div className="usernamerow">
                  <div className="users"></div>
                  {/* <label>User1</label> */}
                  <input type="range"/>
                </div>
                {/* Task status name */}
                <div className="statusnamerow"></div>
                <div className="taskbar"> </div>
         </div>
        </div>
      </div>
    </div>
  );
}
export default Dash;
