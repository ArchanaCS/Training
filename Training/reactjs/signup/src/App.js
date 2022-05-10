
import { useState } from 'react';
import './appstyle.css';
import axios from "axios";

function App() {
 
  const [username,setuserName]=useState('');
  const [password,setPassword]=useState('');
  const [firstname,setFirstname]=useState('');
  const [pin,setPin]=useState('');
  const [phone,setPhone]=useState('');
  function insert()
  {
    var req={"username":username,"password":password,"firstname":firstname,"pin":pin,"phone":phone};
    let url="http://localhost:8080/userinsert";
    const header={};
    axios.post(url,req,header).then((res)=>{
      console.send(res.data);
    }).catch();


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
                    <label for="fname" class="formelement">Username:</label>
                    <input type="text" id="usr" class="formelement3" value={username} onChange={(e)=>{setuserName(e.target.value)}}/>
             </div>
             <div class="formelement">
                    <label for="lname"  class="formelement">Password:</label>
                    <input type="text" id="usr" class="formelement3" />
            </div>
              {/* <!-- Address  --> */}
              <div class="formelement2">
                <label for="add" class="formelement2" >Frist Name</label>
                <input type="text" id="usr"class="formelementfortext" />
               </div>
           {/* <!--Apartment   --> */}
           <div class="formelement2">
                  <label for="apt"  class="formelement2">Appartment,suite etc</label>
                  <input type="text" id="usr"  class="formelementfortext"/>
                  </div>

                  {/* <!-- City --> */}
                  <div class="formelement4">
                  <label for="city" class="formelement4">City</label>
                  <input type="text"  id="usr" />
                </div>
                   {/* <!-- State --> */}
                   <div class="formelement4">
                  <label for ="state" class="formelement4">State</label>
                  <select class="selectclass">
                    <option>Kerala</option>
                    <option>TN</option>
                    <option>Karnataka</option>
                  </select>
                </div>

                {/* <!-- pincode --> */}
                <div class="formelement4">
                    <label for="pincode" class="formelement4">Pin Code</label>
                    <input type="text"  id="pin"/>
                  </div>
                  {/* <!-- Phone --> */}
                  <div class="formelement">
                    <label for="fname" class="formelement">Phone</label>
                    <input type="text"  id="phone" class="formelement3"/>
                  </div>
               
               {/* <!-- Businees --> */}
               <div class="formelement">
                    <label for="fname" class="formelement3">Business or personal website</label>
                    <input type="text"  id="web" class="formelement3"/>
                  </div>

                   {/* <!-- Checkbox --> */}
                <div><input type="checkbox" value="" id="CheckDefault"/>
                    This store is registerd.
                    <label class="formelement" for="CheckDefault">
                     
                    </label>
                  </div>

                  {/* <!--Button--> */}
            <div class="btn">
                <button type="button" onClick={insert}>Enter my Store</button>
            </div>
            <a href="\LOGIN\index.html">  Back</a>
       </div>     
    </div>
  );
}

export default App;
