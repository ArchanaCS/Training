import { useNavigate } from "react-router-dom";

function Addproduct(){
    const navigate=useNavigate();
    function productListPage()
    {
      navigate("/productlist");
    }
    function homePage()
    {
      navigate("/");
    }
    return(<div>
        <div className="dashtop">
        <label></label>
      </div>


      <div className="sidebar">
        <div className="menu">
          <nav>
            <li onClick={homePage}>Home</li>
            <li onClick={productListPage}>Products</li>
            <li>Orders</li>
            <li>Logout</li>
          </nav>
        </div>
      </div>

      <div className="outer">
       < div className="inner">
           <div className="new">
       <h3>Add Product</h3>
       <button className="pbtn">SAVE</button>
       </div>
       </div>
       </div>

       <div>

       </div>
    </div>);
}
export default Addproduct;
