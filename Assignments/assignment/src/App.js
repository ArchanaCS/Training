import { useState } from "react";

function App() {
  const [array, setArray] = useState({
    data: [{name: "" }],
    "count": 0,
  });
  
  function add() {
    var temp = array.data;
    
      temp.push({name: "Name" });
      setArray({ "data": temp, "count": temp.length });
      
}
 console.log(array.data);
  return (
    <div>
      <button onClick={add}>Add</button>

      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
        </thead>
        <tbody>
          {array.data.map((item, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
