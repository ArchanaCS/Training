import "./style.css"
function LoginPage()
{
    return(
    <div>
       <label className="labelstyle"><h1>Login</h1> </label> 
       <div>
           <label className="labelstyle" >UserName</label>
           <input type="text"/>
       </div>
       <div>
           <label className="labelstyle">Password</label>
           <input type="text"/>
       </div>
       <div>
           <button>Login</button>
       </div>
    </div>
    )
}
export default LoginPage;