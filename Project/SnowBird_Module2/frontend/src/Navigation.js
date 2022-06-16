import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dash from "./Dash";
import Report from "./Report";
import AddProject from "./AddProject";
import Editepic from "./Editepic";
import EditProject from "./EditProject";
import Epic from "./Epic";
import EditUser from "./EditUser";
import Project from "./Project";
import AddUser from "./AddUser";
import Users from "./Users";
import Menu from "./Menu";

import SprintBoard from "./SprintBoard";

import Attendance from "./Attendance";
// import Attendance1 from "./Attendance1";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dash />}>
            {" "}
          </Route>
          <Route path="/report" element={<Report />}>
            {" "}
          </Route>
          {/* <Route path="/attendance " element={<Attendance  />}>
            {" "}
          </Route> */}
          <Route path="/project" element={<Project />}>
            {" "}
          </Route>
          <Route path="/addproject" element={<AddProject />}>
            {" "}
          </Route>
          <Route path="/editproject" element={<EditProject />}></Route>
          <Route path="/epic" element={<Epic />}></Route>
          <Route path="/edituser" element={<EditUser />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          <Route path="/editepic" element={<Editepic />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          {/* <Route path="/attendance" element={<Attendance />}></Route> */}
          <Route path="/sprintboard" element={<SprintBoard />}></Route>
          <Route path="/attendance" element={<Attendance/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Navigation;
