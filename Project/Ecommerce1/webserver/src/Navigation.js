import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function Navigation(){
  return(<div>
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
        
    </Routes>
  </BrowserRouter>
  </div>)
};
export default Navigation;