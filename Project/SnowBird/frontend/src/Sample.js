import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "./samplestyle.css";
function Sample() {
  const [array, setArray] = useState([
    { id: 1, name: "project1", epics: [1, 2, 3] },
    { id: 2, name: "project2", epics: [4, 5, 6] },
    { id: 3, name: "project3", epics: [] },
    { id: 4, name: "project4", epics: [] },
    { id: 5, name: "project5", epics: [9, 8, 10] },
  ]);
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>ProjectName</th>
        </tr>

        {array.map((item, index) => {
          return (
            <>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td></td>
              </tr>

              {item.epics.map((epicItem, epicIndex) => {
                return (
                  <>
                  <tr>
                    <td></td>
                    <td>{epicItem}</td>
                    {/* <td>epic1</td> */}
                    </tr>
                  </>
                );
              })}
            </>
          );
        })}
      </table>
    </>
  );
}
export default Sample;
