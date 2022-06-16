import Menu from "./Menu";
import { FaDownload } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
function Report() {
  
  const[abc,setSelect]=useState(true);
  // var select=localStorage.getItem("select1");
  // setSelect(select);
  // console.log("select",select)
  return (
    <>
      <div className="outer">
        <div className="secondrow">
          {/* Side navigation menu */}
          {<Menu  />}
          {/* Main outline */}
          <div className="secondcolumn">
          <div className="report_rowone">
            <label style={{color:'gray'}}>Parameter</label>
            <br></br>
            <input type="textbox" />
            <button>OK</button>
          </div>

          <div className="report_secrow">
            <h1>Sample Report</h1>
            <h3>Parameters Passed-<label style={{fontWeight:'100',fontSize:'medium'}}>One:One,Two</label></h3>
            
          </div>

          <div className="icons">
            <FaDownload className="fa_download"  size={25}  ></FaDownload>&nbsp;&nbsp;
            <FiRefreshCw className="fa_download" size={25}></FiRefreshCw>
            {/* <FontAwesomeIcon icon="fa-solid fa-down-to-line" /> */}
          </div>

          <div className="report_third">
              
          <table>
            <thead>
            <th >Task</th>
             <th>AssignedTo</th>
            <th>Status</th>
            <th>EstimatedHours</th>
            <th>ActualFrom</th>
            <th>ActualTo</th>
            <th>ActualHours</th>
            </thead>
            <tbody>
              <tr>
                <td>LoginPage</td>  
                <td>Ajay</td>
                <td>InProgress</td>
                <td>40</td>
                <td>2022-04-21</td>
                <td>2022-05-10</td>
                <th>45</th>
                </tr>
               
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
