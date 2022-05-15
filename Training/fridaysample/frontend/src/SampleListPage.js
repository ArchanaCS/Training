import { useState } from "react";
import "./styles/realstyle.css";

const SampleListPage = () => {
  var sampleData = [
    {
      ID: "1",
      StudentName: "Alex",
      Age: "10",
    },
    {
      ID: "2",
      StudentName: "Ruby",
      Age: "11",
    },
    {
      ID: "3",
      StudentName: "Dolly",
      Age: "12",
    },
    {
      ID: "4",
      StudentName: "Aditi",
      Age: "12",
    },
  ];
    
   const [tableData,setTableData]=useState([
    {
      "ID": "1",
      "StudentName": "Alex",
      "Age": "10"
    },
    {
      "ID": "2",
      "StudentName": "Ruby",
      "Age": "11"
    },
    {
      "ID": "3",
      "StudentName": "Dolly",
      "Age": "12"
    },
    {
      "ID": "4",
      "StudentName": "Aditi",
      "Age": "12"
    }
  ]);
   return (
    <div>
      <div className="outerdiv">
        <div className="firstrow">
          <label>User{JSON.stringify(tableData)}</label>
        </div>

        <div className="secondrow">
          <div className="secFirstColumn">
            <nav>
              <li></li>
              <li>Home</li>
              <li>Product</li>
              <li>Order</li>
              <li>Logout</li>
            </nav>
          </div>
          <div className="secSecondColumn">
          User{JSON.stringify(tableData)}
            <table>
              <thead>
                <th>Class</th>
                <th>Division</th>
                <th>Strength</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Alex</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ruby</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Dolly</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Aditi</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>

            <table>
              <thead>
                <th>ID</th>
                <th>StudentName</th>
                <th>Age</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Alex</td>
                  <td>10</td>
                </tr>
                
               {tableData.map((item,index)=>{return{index}})}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SampleListPage;
