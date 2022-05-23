import "./style/styles.css";
function AddUser() {
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
                  <option>--options--</option>
                  <option>Employee</option>
                  <option>Manager</option>
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
