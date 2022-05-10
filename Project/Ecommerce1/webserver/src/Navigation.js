import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import ProductList from "./ProductList";
import SignUp from "./SignUp";

function Navigation(){
  return(<div>
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route> 
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/productlist" element={<ProductList/>}></Route>
    </Routes>
  </BrowserRouter>
  </div>)
};
export default Navigation;