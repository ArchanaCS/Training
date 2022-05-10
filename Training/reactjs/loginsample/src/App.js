import { useState } from "react";

function App()
{

  var [username,setUserName]=useState('');
  var [password,setPassword]=useState('');
  var [state,setState]=useState('');
  function login()
  {
    var req={"username":username,"password":password,"state":state};
    alert(JSON.stringify(req));
  }
   return(
     <div>
       <label>Username</label>
       <input type="text" onChange={(e)=>{setUserName(e.target.value)}}/><br></br>
       <label>Password</label>
       <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
       <select onChange={(e)=>{setState(e.target.value)}}><option>Kerala</option><option>TN</option><option>Karnataka</option></select><br></br>
       <button onClick={login}>Login</button>

     </div>
   );
  
}
export default App;