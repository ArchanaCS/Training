import { useDispatch , useSelector} from "react-redux";
const App=()=>{
  const dispatch=useDispatch();
   const count = useSelector((state) => state.count);
   const increment=()=>{
     dispatch({ type:"increment" });
   }
 
  return<>
   <button onClick={increment}>increment</button>{count}

  </>
}
export default App;
