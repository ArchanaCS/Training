import { useState } from "react";
import "./Home.css";
import Modal from "./Modal";
export default function Home(){
    const[show,setShow]=useState(false)
    const popup=()=>{
       
        setShow(true)
       
    }
    return<>
    <Modal show={show} popup={popup} setShow={setShow}/>
  
    <div className="home">
        <h1>New Page</h1>
        <button onClick={popup}>Click</button>
    </div>
    </>
}