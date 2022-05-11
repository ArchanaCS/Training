import { useState } from "react";

import "./style.css";
function Dashboard() {
  const [productList, setProductList] = useState([
    { Id: "1", Product: "Shirt", Price: "500", Tax: "5%" },
    { Id: "2", Product: "Shoes", Price: "1500", Tax: "5%" },
    { Id: "3", Product: "Jeans", Price: "2000", Tax: "10%" },
  ]);

  return (
    <div>
      {/* USer name in dashboard */}
      <div className="dashtop">
        <label>User</label>
      </div>

      {/* side menu */}
      <div className="sidebar">
        <div className="menu">
          <nav>
            <li>Home</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Logout</li>
          </nav>
        </div>
      </div>

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
                  <td>{item.Id}</td>
                  <td>{item.Product}</td>
                  <td>{item.Price}</td>
                  <td>{item.Tax}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Dashboard;
