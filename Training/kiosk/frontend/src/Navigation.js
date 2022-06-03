import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Ratefive from "./Ratefive";
import Test from "./Test";
import Welcome from "./Welcome";

function Navigation()
{
    return<>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/five" element={<Ratefive/>}></Route>
      </Routes>
    </BrowserRouter>

</>
}
export default Navigation;