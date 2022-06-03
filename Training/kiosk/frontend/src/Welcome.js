import { useNavigate } from 'react-router-dom';
import  './style.css';
const Welcome=()=>{
    var navigate=useNavigate();
    const feedback_from=()=>{
        navigate("/test");
    }
return<>
<div className="form">
    <h3>WELCOME</h3>
    <button onClick={feedback_from}>START</button>
    

</div>
</>
}
export default Welcome;
