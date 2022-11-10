import { BiUser } from "react-icons/bi";
import "./Logout.css";
export default function Logout() {
  return (
    <>
      <div className="dropdown">
        <BiUser/>
        <div className="dropdown-content">
          <label>Logout</label>
        </div>
      </div>
    </>
  );
}
