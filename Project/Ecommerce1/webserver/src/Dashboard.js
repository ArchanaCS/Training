import {useEffect, useState } from "react";
import { ReactSession } from "react-client-session";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Dashboard() {
  const [productList, setProductList] = useState([
    { Id: "1", Product: "Shirt", Price: "500", Tax: "5%" },
    { Id: "2", Product: "Shoes", Price: "1500", Tax: "5%" },
    { Id: "3", Product: "Jeans", Price: "2000", Tax: "10%" },
  ]);
  const [sample, setSample]=useState('');
  const [usr, setUsrName]=useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if(ReactSession.get("username")==undefined){
      navigate('/')
    }
    setUsrName(ReactSession.get("username"))

    setSample('')
    var token=ReactSession.get("token");
    //console.log("token in das" +token);
    
  })
   // var url = "http://localhost:8000/productfetch";
    //var request = { };
    //var header ={ Authorization: `Bearer ${token}`};      
    
  //   axios
  //     .post(url, request, {headers:header})
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data.length > 0) { 
  //         setProductList(res.data)
  //       } else { 
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  function productListPage()
{
  navigate("/productlist");
}
function homePage()
{
  navigate("/");
}
  
  return (
    <div>
      {/* USer name in dashboard */}
      <div className="dashtop">
        <label>{usr}</label>
      </div>

      {/* side menu */}
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
       <h3>Dashboard</h3>
       </div>
       </div>
      
    </div>
  );
}
export default Dashboard;
