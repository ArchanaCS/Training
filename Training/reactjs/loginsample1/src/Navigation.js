import { BrowserRouter, Routes, Route } from "react-router-dom";
import APITest from './APITest'
import Countryfetch from "./Countryfetch";
import Signup from "./Signup";
function Navigation() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<APITest />}></Route>
          <Route path="/signup" element={<Signup />}> </Route>
          <Route path="/country" element={<Countryfetch />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Navigation;
