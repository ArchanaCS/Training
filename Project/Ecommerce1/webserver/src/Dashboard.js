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
                  <th>Id</th>
                  <th> Product</th>
                  <th>Price</th>
                  <th>Tax</th>
              </table>
          </div>

    </div>
  );
}
export default Dashboard;
