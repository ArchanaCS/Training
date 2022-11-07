import "../pages/VerifyOTP.css";
export default function VerifyOTP({show,setShow}) {
    const verify=()=>{
        setShow(false)
    }
    console.log("votp",show)
    return <>
        <div className="otp_outer">
            <div className="otp_inner">
                <div className="otp_inner_label">
                <label>Verify OTP</label>
                </div>
                <div className="otp_inner_input">
                    <input type="text" placeholder="OTP"/>
                   
                </div>
                <div className="otp_outer_button">
                    <button onClick={verify}> Verify</button>
                    <button>Resend</button>
                </div>
               
            </div>
        </div>

    </>
}