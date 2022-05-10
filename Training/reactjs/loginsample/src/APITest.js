import axios from "axios";
function APITest()
{
    // function handleClick()
    // {
    //     const url="http://localhost:8080/uservalidate";
    //     const data = { "username":username,"password":password};
    //     const header = {
    //         headers: { 
    //           "Content-Type": "application/json",
    //           "Access-Control-Allow-Origin": "*",
    //           'Access-Control-Allow-Credentials':true
    //         },
    //       };
    //       axios.post(url, data, header).then((res) => {
    //         console.log(res.data);
    //       });
    //     }
       
    
return(
    <div>
        <label>Username</label>
       <input type="text" onChange={(e)=>{setUserName(e.target.value)}}/><br></br>
       <label>Password</label>
       <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
       <select onChange={(e)=>{setState(e.target.value)}}><option>Kerala</option><option>TN</option><option>Karnataka</option></select><br></br>
       <button onClick={login}>Login</button>
        {/* <button onClick={handleClick}>Test</button> */}
    </div>
);
}
export default APITest;