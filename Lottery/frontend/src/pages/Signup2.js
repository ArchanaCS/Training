import "../pages/Signup.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VerifyOTP from "./VerifyOTP";
export default function Signup() {
  const navigate = useNavigate();
  const [show,setShow]=useState(false)
  const verifyotp = () => {
    console.log("before",show)
    setShow(true)
    console.log(show)
    // navigate("/Verifyotp")
  };
  return (
    <>
    {/* <VerifyOTP show={show} setShow={setShow}/> */}
    {show ? (
        <>
          <VerifyOTP show={show} setShow={setShow} />
        </>
      ) : (
        <></>
      )}
      <div className="signup_outer">
        <div className="signup_outer_inner">
          <div className="signup_outer_inner_row1">
            {/* <img src={AdminLogin_mail}></img> */}
            <h2>Logo</h2>
          </div>
          <div className="signup_outer_inner_row2">
            <h2>Welcome !</h2>
          </div>
          <div className="signup_outer_inner_row3">
            <label>Please signup your account </label>
          </div>
          <div className="signup_outer_inner_row4">
            <div className="signup_outer_inner_row4_left">
              <input type="text" placeholder="FirstName" />
            </div>
            <div className="signup_outer_inner_row4_right">
              <input type="text" placeholder="LastName" />
            </div>
          </div>
          <div className="signup_outer_inner_row5">
            <input type="text" placeholder="Email" />
          </div>
          <div className="signup_outer_inner_row6">
            <input type="password" placeholder="Password" />
          </div>
          <div className="signup_outer_inner_row7">
            <input type="password" placeholder="Re-Password" />
          </div>
          <div className="signup_outer_inner_row8">
            <input type="checkbox" />
            <div className="signup_outer_inner_row8_text">
              <label>By clicking on Register, you agree to our</label>
              <label>
                <span>Terms and Conditions</span> of Use.
              </label>
            </div>
          </div>
          <div className="signup_outer_inner_row9">
            <button onClick={verifyotp}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}
