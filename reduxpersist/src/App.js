import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function App() { 
  const txt=useSelector(state=>state.total); 

  const dispatch=useDispatch();

  return (
    <div>
      Page with redux
      <br /> 
      <br />
      <input
        value={txt}
        onChange={(e) => dispatch({type:"setTotal", payload:e.target.value })}
        type={"text"}
        placeholder={"username"}
      /> 
      <br />
      <br />
      {txt} 
    </div>
  );
}
