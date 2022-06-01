import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FeedBack from "./FeedBack";
import Welcome from "./Welcome";

function Navigation()
{
    return<>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/feedback" element={<FeedBack />}></Route>
      </Routes>
    </BrowserRouter>

</>
}
export default Navigation;