import Menu from "./Menu";
import "./style/styles.css";
function EditUser() {
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
              <label>Edit User</label>
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
export default EditUser;
