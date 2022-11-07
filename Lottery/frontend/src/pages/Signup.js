import "./Signup.css";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiCopyright } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import VerifyOTP from "./VerifyOTP";
// import logo from "./image/Linkedin_logo.png";

function Signup() {
    const [show,setShow]=useState(false)
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uname, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const verifyotp = () => {
    console.log("before",show)
    setShow(true)
    console.log(show)
    // navigate("/Verifyotp")
  };
  const handleEmailChange = (e) => {
    setUsername(e.target.value);
    console.log("usernameis ", e);
  };
  const handleFirstnameChange = (e) => {
    setFname(e.target.value);
    console.log("firstname ", e);
  };
  const handleLastnameChange = (e) => {
    setLname(e.target.value);
    console.log("lastname ", e);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("passwordis ", e);
  };
  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
    console.log("repasswordis ", e);
  };
  return (
    <>
    {show ? (
        <>
          <VerifyOTP show={show} setShow={setShow} />
        </>
      ) : (
        <></>
      )}
    <div className="signup_outer">
      <div className="signup_header">
        {/* <h1>linkedin</h1> */}
        <img
        // src={Linkedin_logo}
        // style={{ width: 100, height: 60 }}
        // alt="Linkedin Logo"
        />
      </div>
      <div className="signup_container">
        <div className="signup_cont_form">
          <div className="signup_inner_form">
            <div className="signup_form_row1">
              <label>Signup</label>
            </div>
            <div className="signup_form_row2">
              <div className="signup_form_input">
                <input
                  type="name"
                  placeholder="FirstName"
                  value={fname}
                  onChange={(e) => {
                    handleFirstnameChange(e);
                  }}
                />
              </div>
              <div className="signup_form_input">
                <input
                  type="text"
                  placeholder="LastName"
                  value={lname}
                  onChange={(e) => {
                    handleLastnameChange(e);
                  }}
                />
              </div>
            </div>
            <div className="signup_form_row3">
              <input
                type="text"
                placeholder="Email address"
                value={uname}
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
            </div>
            <div className="signup_form_row3">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  handlePasswordChange(e);
                }}
              />
            </div>
            <div className="signup_form_row3">
              <input
                type="text"
                placeholder="Re-Password"
                value={repassword}
                onChange={(e) => {
                  handleRePasswordChange(e);
                }}
              />
            </div>

            <div className="signup_form_row6">
              <button onClick={verifyotp}>Create your account</button>
            </div>
            <div className="signup_form_row7">
              <div className="signup_form_row7_col"></div>
              <div className="signup_form_row7_col2">or</div>
              <div className="signup_form_row7_col"></div>
            </div>

            <div className="signup_form_row8">
              <label>Sign up with</label>
            </div>
            <div className="signup_form_row9">
              <button>
                <FcGoogle
                  style={{
                    width: 20,
                    height: 20,
                    paddingRight: 10,
                    paddingBottom: 5,
                  }}
                />{" "}
                Google
              </button>

              <button>
                <AiFillFacebook
                  style={{
                    color: "blue",
                    width: 20,
                    height: 20,
                    paddingRight: 10,
                    paddingBottom: 5,
                  }}
                />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="signup_row3">
        {/* <div className="signup_row3"> */}
        <label className="signup_new">By Signing up you agree to our </label>
        <label className="signup_join">Terms of service</label>
        {/* </div> */}
      </div>

      {/* <div className="signup_footer">
        <div className="signup_footer11">
          Lotterydrums
          <RiLinkedinBoxFill />
          <BiCopyright /> 2021
        </div>
        <div className="signup_footer11">
          <label>User Agreement</label>
        </div>
        <div className="signup_footer11">
          <label>Privacy Policy</label>
        </div>
        <div className="signup_footer11">Community Guidelines</div>
        <div className="signup_footer11">
          <label>Copyright</label>
        </div>
        <div className="signup_footer11">
          <label>Send Feedback</label>
        </div>
        <div className="signup_footer11">
          <select>
            <option>Langauge</option>
          </select>
        </div>
      </div> */}
    </div>
    </>
  );
 
}
export default Signup;