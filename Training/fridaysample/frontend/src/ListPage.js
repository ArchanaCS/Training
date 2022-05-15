import { useState } from "react";
import "./styles/stylecss.css";
function ListPage() {
  const [studentList] = useState([
    {
      id: "1",
      StudentName: "Jenny",
      Age: "10",
    },
    {
      id: "2",
      StudentName: "Alex",
      Age: "11",
    },
    {
      id: "3",
      StudentName: "Raj",
      Age: "12",
    },
  ]);

  return (
    <div>
      <div className="reddiv"></div>
      <div className="green"></div>
      <div className="blue">
        <table className="table">
          <thead>
            <th>Id</th>
            <th>StudentName</th>
            <th>Age</th>
          </thead>

          <tbody>
            {studentList.map((item, index) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.StudentName}</td>
                  <td>{item.Age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListPage;
