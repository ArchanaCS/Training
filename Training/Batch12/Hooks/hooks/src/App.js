import { useState } from "react";



function App() {
  
  const [name,setName]=useState("");
 
  return(
    <div>
        
        <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
         {name}
    </div>
  )
 

}

export default App;
