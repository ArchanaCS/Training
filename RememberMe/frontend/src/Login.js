import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css"

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errmsg,setErrmsg]=useState("");
    const [chked,setChkd]=useState("false")

    useEffect(()=>{
      console.log(document.cookie);
      let user = document.cookie .split('; ').find((row) => row.startsWith('myusername='))?.split('=')[1];
      console.log("cookie vaue",user);
      let pwd= document.cookie .split('; ').find((row) => row.startsWith('mypassword='))?.split('=')[1];
      console.log("cookie vaue",pwd);
      document.getElementById('uname').value=user;
      document.getElementById('pw').value=pwd;
     
    },[])

   
   function setCookie(){
    var uname=document.getElementById("uname").value;
    var pw=document.getElementById("pw").value;
    document.cookie="myusername="+uname+";path=http://localhost:3000/";
    document.cookie="mypassword="+pw+";path=http://localhost:3000/"
   }
    function login(){
        // localStorage.setItem("uname",username);
        // localStorage.setItem("pw",password)
        let url="http://localhost:8080/uservalidate";
       let request={"username":username,"password":password};
       let header={};
       console.log(request)
       axios.post(url,request,header).then((res)=>{
        if(res.data=="User doesn't exist")
        {
          console.log(res.data)
          setErrmsg("Check username or password !!")
          
          // navigate()
        }
        else{
          setErrmsg("")
          // console.log(res.data)
          alert("validated")
          localStorage.setItem("uname",username);
          localStorage.setItem("pw",password)
        }
       }).catch();
    }
    return<>
    
    <div>
    <input type="text" id="uname" placeholder="name" onChange={(e)=>{setUsername(e.target.value)}}/><br/><br/>
    <input type="password" id="pw" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
    <input type="checkbox" onClick={setCookie}/>Remember me<br/><br/>
    <button onClick={login}>Login</button>
    </div>
    </>
}