import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Loginstyle.css';
function APITest() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage,setErrorMessage]=useState("");
  const navigate=useNavigate();
  function login() {
    //e.preventDefault();
    const req = { username: username, password: password };
    let url = "http://localhost:8080/uservalidate";
    const header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data);
        if(res.data.length>0)
        {
          setErrorMessage("User validated!!!")
        }
        else
        {
          setErrorMessage("Incorrect UserName or Password!!")
        }
        
      })
      .catch();
  }
  function NewUserClick(e)
  {
    e.preventDefault();
    navigate("/signup");
  }
  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <br></br>
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br></br>
      <p className="errorMessage">{errorMessage}</p>
      <button onClick={(e)=>login(e)}>Login</button><br></br>
      <p onClick={(e)=>{NewUserClick(e)}}  class="link"> New User ?</p>
    </div>
  );
}
export default APITest;
