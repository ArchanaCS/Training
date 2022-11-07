import './HeaderUser.css';
import lottery_icons from '../images/drum.jpg';
import { useNavigate } from "react-router-dom";
// import user_logo from '../image/user_logo.png';
export default function Header() {
    const navigate= useNavigate();
    const login=()=>{
        navigate("/Login")
    }
    return (
        <>
            <div className="headerUser_outer">
                <div className="headerUser_icon">
                    <div className="headerUser_icon_left">
                        <img src={lottery_icons} />
                    </div>
                    <div className="headerUser_icon_right">

                        <label className='bold'>Lottery drums</label>


                        <label className='small'> From Devfactory</label>


                    </div>
                </div>


                <div className="headerUser_menu">
                    <div className="headerUser_menu_col">
                        <label>Buy now</label>
                    </div>
                    <div className="headerUser_menu_col">
                        <label onClick={login}>Log In</label>
                    </div>
                    <div className="headerUser_menu_col">
                        <label>Register</label>
                    </div>
                    <div className="headerUser_menu_col">
                        <label>My Cart</label>
                    </div>
                    
                </div>

            </div>
        </>
    )
}