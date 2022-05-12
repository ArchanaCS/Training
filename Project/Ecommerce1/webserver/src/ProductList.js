import {useEffect, useState } from "react";
import { ReactSession } from "react-client-session";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function ProductList() {
 
  console.log("Productlistpage");
   
  //   { Id: "1", Product: "Shirt", Price: "500", Tax: "5%" },
  //   { Id: "2", Product: "Shoes", Price: "1500", Tax: "5%" },
  //   { Id: "3", Product: "Jeans", Price: "2000", Tax: "10%" },
  // ]);
  const [sample, setSample]=useState('');
  const [usr, setUsrName]=useState('');
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    if(ReactSession.get("username")==undefined){
      navigate('/')
    }
   
    setUsrName(ReactSession.get("username"));
   
    setSample('');
    var token=ReactSession.get("token");
    
    console.log("token in prodlist : "+token);
    var url = "http://localhost:8000/productfetch";
    var request = {token};
   
    var header ={ Authorization: `Bearer ${token}`};      
    console.log(header);
    axios
      .post(url, request, {headers:header})
      .then((res) => {
        console.log("res data " +res.data);
        if (res.data.length > 0) { 
          setProductList(res.data)
          console.log(res.data);
        } else { 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function productListPage()
{
  navigate("/productlist");
}
function homePage()
{
  navigate("/");
}
function addProduct()
{
  navigate("/addproduct");
}
  return (
    
    <div>
       <div className="dashtop">
        <label>{usr}</label>
      </div>
      {/* USer name in dashboard */}
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
       <h3>Products</h3>
       <button className="pbtn" onClick={addProduct}>Add New</button>
     
      {/* body part to list  */}
      <div className="tabledesign">
        <table>
          <thead>
            <th>Id</th>
            <th> Product</th>
            <th>Price</th>
            <th>Tax</th>
          </thead>
          
           <tbody>
            {productList.map((item, index) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.txtProdName}</td>
                  <td>{item.txtProdPrice}</td>
                  
                </tr>
              );
            })}
          </tbody>  
        </table>
        </div>
       </div>
      </div>
    </div>
  );
}
export default ProductList;
