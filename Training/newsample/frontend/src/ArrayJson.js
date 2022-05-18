import { useState } from "react";

const ArrayJson = () => {
  const [valuedata, setValedata] = useState({
    data: [
      { id: "1", name: "abc" },
      { id: "2", name: "efg" },
    ],count:2
  });
  
  const handleclick = () => 
  {var temp=valuedata.data;
    temp.push=({});
  return (
      
    <div>
      <button onClick={handleclick}></button>
    </div>
  );
  }
};
export default ArrayJson;
