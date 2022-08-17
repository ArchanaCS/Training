import './style.css'
import logo from './images/logo.svg'

function Home() {
    return <>
        <div className="home_row1">
            <div className='home_row1_left'>
                <div className='home_row1_left_img'>
                    <img src={logo}/>
                </div>
                <div className='home_row1_left_text'>
                    <label className='home_row1_left_text_labelone'>ChristianMatrimony.com</label>
                    <label>From Matrimony.com Group</label>
                </div>
            </div>
            <div className='home_row1_right'>
                <label>Already a member?</label>
                <div>
                    <button>Log In</button>
                </div>
            </div>
        </div> 
    </>
}
export default Home;