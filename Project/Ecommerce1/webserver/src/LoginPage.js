import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function login() {
    var url = "http://localhost:8080/uservalidate";
    var req = { username: username, password: password };
    const header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        if (res.data.length > 0) {
          navigate("/dashboard");
        } else {
          setErrorMessage("Check username or password !!");
        }
      })
      .catch();
  }
  function newuser() {
    navigate("/signup");
  }
  return (
    <div class="container">
      <label className="labelstyle">
        <h1>Login</h1>{" "}
      </label>
      <div className="labelstyle">
        <label>UserName</label>
        <input
          type="text"
          className="textstyle"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="labelstyle">
        <label>Password</label>
        <input
          type="text"
          className="textstyle"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="labelstyle">
        <p className="errormessage">{errormessage}</p>
        <button className="btn" onClick={login}>
          Login
        </button>
        <p className="userstyle" onClick={newuser}>
          New User?
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
