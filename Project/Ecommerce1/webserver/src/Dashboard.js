import "./style.css";
function Dashboard() {
  return (
    <div >
      {/* USer name in dashboard */}
      <div className="dashtop">
        <label>User</label>
      </div>

      {/* side menu */}
         <div className="sidebar">
          <div className="menu">
          <nav >
              <li >Home</li>
              <li>Products</li>
              <li>Orders</li>
              <li>Logout</li>
          </nav>
          </div>
          </div>

          {/* body part to list  */}
          <div>
              <table>
                <thead>
                  <th>Id</th>
                  <th> Product</th>
                  <th>Price</th>
                  <th>Tax</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td></td>
                    </tr>
                  </tbody>
              </table>
          </div>

    </div>
  );
}
export default Dashboard;
