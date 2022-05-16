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
              <div className="eachuser">
                <div className="users">
                  <div className="userlabel">
                    <label>User1</label>{" "}
                  </div>
                </div>
              </div>
              <div className="eachuser">
                <div className="users">
                  <div className="userlabel">
                    <label>User1</label>{" "}
                  </div>
                </div>
              </div>
            </div>
            {/* Task status name */}
            <div className="statusnamerow">
              <label>TO DO</label>
              <label>IN PROGRESS</label>
              <label>REVIEW</label>
              <label>COMPLETE</label>
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
