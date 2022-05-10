import { useNavigate } from "react-router-dom";
import "./style.css";
function LoginPage() {
    const navigate=useNavigate();
    function newuser()
    {
        
        navigate("/signup")

    }
  return (
    <div class="container">
      <label className="labelstyle">
        <h1>Login</h1>{" "}
      </label>
      <div className="labelstyle">
        <label >UserName</label>
        <input type="text" className="textstyle" />
      </div>
      <div className="labelstyle">
        <label >Password</label>
        <input type="text" className="textstyle" />
      </div>
      <div className="labelstyle">
        <button className="btn">Login</button>
        <p className="userstyle" onClick={newuser}>New User?</p>
      </div>
    </div>
  );
}
export default LoginPage;
