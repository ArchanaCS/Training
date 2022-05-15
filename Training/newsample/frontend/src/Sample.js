import "./styles/stylecss.css";
import home from "./home.png";
import cart from "./cart.png";
import order from "./order.png";
import logout from "./logout.png";

function Sample() {

  
  return (
    <div>
      <div className="outer">
        <div className="firstrow">
          <label>Archana</label>
          </div>
          <div className="secondrow">
            <div className="firstcolmn">
            <nav>
             <li> <img src={home}></img>    Home</li>
            <li>  <img src={cart}></img>    Products</li>
            <li>  <img src={order}></img>   Order</li>
            <li>  <img src={logout}></img>  Logout</li>
            </nav>
            </div>
          
          <div className="secondcolmn"> 
           <div className="scfirstrow">
             Dashboard
           </div>
           <div className="scsecondrow">
             
           </div>
           </div>
          
        </div>
      </div>
    </div>
  );
}
export default Sample;
