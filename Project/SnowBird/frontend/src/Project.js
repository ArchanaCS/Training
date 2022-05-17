function Project() {
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
              <button>Create New</button>
            </div>
            <div className="tablerow">
              <table>
                <thead>
                  <th>#id</th>
                  <th>Project name</th>
                  <th>Project owner</th>
                </thead>

                <tbody>
                  <tr>
                    <td>1 </td>
                    <td>ECommerce</td>
                    <td>Abc</td>
                  </tr>
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
