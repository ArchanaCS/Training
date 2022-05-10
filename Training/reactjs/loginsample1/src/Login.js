import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Loginstyle.css';
import './style.css';
function login(){
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  function login() {
    
    const req = { username: username, password: password };
    let url = "http://localhost:8080/uservalidate";
    const header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data);
      })
      .catch();
  }
  function NewUserClick(e)
  {
    e.preventDefault();
    navigate("/signup");
  }
    return(
        <div>
            <div class="container">
            <div class="innerdiv">
                <div class="innerdivh2">
                    <h2>Login</h2>
                    <div class="formelement">
                        <div class="formelementinput"><label>Username</label>
                            <input type="text" placeholder="username" value={username} onChange={(e) => {
          setUserName(e.target.value);
        }}/>
                        </div>
                            <div class="formelementinput"><label>Password</label>
                            <input type="password" placeholder="password" value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}/>
                        </div>
                    </div>

                    <button onClick={(e)=>login(e)}>Login</button><br></br>
      <p onClick={(e)=>{NewUserClick(e)}}  class="link"> New User ?</p>


                </div>
            </div>
        </div>
        </div>
    );
}
export default login;