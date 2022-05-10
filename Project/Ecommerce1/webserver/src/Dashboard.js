import "./style.css";
function Dashboard() {
  return (
    <div>
      {/* USer name in dashboard */}
      <div className="dashtop">
        <label>User</label>
      </div>

      {/* side menu */}
      <div className="sidebar">
          <nav>
              <li>Menu</li>
              <li>Products</li>
              <li>Orders</li>
              <li>Logout</li>
          </nav>
      </div>
    </div>
  );
}
export default Dashboard;
