import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProject from "./AddProject";
import Dash from "./Dash";
import EditProject from "./EditProject";
import Project from "./Project";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dash />}>
            {" "}
          </Route>
          <Route path="/project" element={<Project />}>
            {" "}
          </Route>
          <Route path="/addproject" element={<AddProject />}>
            {" "}
          </Route>
          <Route path="/editproject" element={<EditProject/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Navigation;
