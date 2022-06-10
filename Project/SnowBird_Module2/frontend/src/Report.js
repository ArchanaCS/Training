import Menu from "./Menu";
import { FaDownload } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
function Report() {
  return (
    <>
      <div className="outer">
        <div className="secondrow">
          {/* Side navigation menu */}
          {<Menu />}
          {/* Main outline */}
          <div className="secondcolumn">
          <div className="report_rowone">
            <label>Parameter</label>
            <br></br>
            <input type="textbox" />
            <button>OK</button>
          </div>

          <div className="report_secrow">
            <h2>Sample Report</h2>
            <h4>Parameters Passed:one,two</h4>
          </div>

          <div className="icons">
            <FaDownload></FaDownload>&nbsp;&nbsp;
            <FiRefreshCw></FiRefreshCw>
          </div>

          <div className="report_third">
              
          <table>
            <thead>
            <th style={{width:10}}>#id</th>
            
            <th>Status</th>
            <th>Epic Name</th>
            <th>Project Name</th>
            </thead>
            <tbody>
                <td>1</td>
                <td>Task1</td>
                <td>To-do</td>
                <td>Epic1</td>
                <td>Event Management</td>
            </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Report;
