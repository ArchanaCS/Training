import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [pin, setPin] = useState("");
  const [phone, setPhone] = useState("");
  const navigate=useNavigate();
  function insert() {
    var req = {
      username: username,
      password: password,
      firstname: firstname,
      pin: pin,
      phone: phone,
    };
    let url = "http://localhost:8080/userinsert";
    const header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data);
      })
      .catch();
  }
  function Loginpage(e)
  {
      e.preventDefault();
      navigate("/");
  }

  return (
    <div>
      <div class="h1">
        <h1>Add an address so you can get paid</h1>
      </div>
      <div class="h4">
        <h4>This will be used as your default business account</h4>
      </div>
      <div class="h4">
        <h4> You can change this at anytime</h4>
      </div>

      <div class="outercontainer">
        <div class="innerconatiner">
          <label>Country/Region</label>
          <select id="country" class="innerconatiner">
            <option>India</option>
            <option>Sri Lanka</option>
            <option>UK</option>
          </select>
        </div>

        <div class="formelement">
          <label for="uname" class="formelement">
            Username:
          </label>
          <input
            type="text"
            id="usr"
            class="formelement3"
            value={username}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />
        </div>
        <div class="formelement">
          <label for="pass" class="formelement">
            Password:
          </label>
          <input
            type="text"
            id="usr"
            class="formelement3"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/* <!-- Firstname  --> */}
        <div class="formelement2">
          <label for="fname" class="formelement2">
            First Name
          </label>
          <input
            type="text"
            id="usr"
            class="formelementfortext"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
        </div>
        {/* <!--Apartment   --> */}
        <div class="formelement2">
          <label for="apt" class="formelement2">
            Appartment,suite etc
          </label>
          <input type="text" id="usr" class="formelementfortext" />
        </div>

        {/* <!-- City --> */}
        <div class="formelement4">
          <label for="city" class="formelement4">
            City
          </label>
          <input type="text" id="usr" />
        </div>
        {/* <!-- State --> */}
        <div class="formelement4">
          <label for="state" class="formelement4">
            State
          </label>
          <select class="selectclass">
            <option>Kerala</option>
            <option>TN</option>
            <option>Karnataka</option>
          </select>
        </div>

        {/* <!-- pincode --> */}
        <div class="formelement4">
          <label for="pincode" class="formelement4">
            Pin Code
          </label>
          <input
            type="text"
            id="pin"
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
            }}
          />
        </div>
        {/* <!-- Phone --> */}
        <div class="formelement">
          <label for="fname" class="formelement">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            class="formelement3"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        {/* <!-- Businees --> */}
        <div class="formelement">
          <label for="fname" class="formelement3">
            Business or personal website
          </label>
          <input type="text" id="web" class="formelement3" />
        </div>

        {/* <!-- Checkbox --> */}
        <div>
          <input type="checkbox" value="" id="CheckDefault" />
          This store is registerd.
          <label class="formelement" for="CheckDefault"></label>
        </div>

        {/* <!--Button--> */}
        <div class="btn">
          <button type="button" onClick={insert}>
            Enter my Store
          </button>
        </div>
        <p onClick={(e)=>{Loginpage(e)}}  class="link"> Back </p>
      </div>
    </div>
  );
}

export default SignUp;
