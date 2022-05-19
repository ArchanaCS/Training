import { useState } from "react";

function Sample1() {
  const [array, setArray] = useState([
    { id: 1, name: "project1", epic: [1, 2, 3] },
    { id: 2, name: "project2", epic: [4, 5, 6] },
    { id: 3, name: "project3", epic: [7, 8, 9] },
  ]);

  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
        {array.map((item, index) => {
          return (
            <>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td></td>
              </tr>
              {item.epic.map((epicitem, epicIndex) => {
                return (
                  <>
                    <tr>
                      <td></td>
                      <td>{epicitem}</td>
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

export default Sample1;
