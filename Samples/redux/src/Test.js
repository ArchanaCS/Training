import { useDispatch, useSelector } from "react-redux";

export default function Test() {
    const txt = useSelector((state) => state.txt);
    const pass=useSelector((state)=>state.pass)
    const id=useSelector((state)=>state.id)
    
    const dispatch = useDispatch();
  return (
    <>
      <label>Redux Example</label><br/><br/>
      <input type="text" placeholder="username" value={txt}
        onChange={(e) => dispatch({ type: "setTxt", payload: e.target.value })}/> {txt}<br/><br/>
      <input type="password" placeholder="password"value={pass}
        onChange={(e) => dispatch({ type: "setPass", payload: e.target.value })}/>{pass}
    </>
  );
}
