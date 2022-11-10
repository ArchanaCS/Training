import { useEffect, useState } from "react";
import axios from "axios";
export default function Test() {
  const [array, setArray] = useState([]);
  const [id,setId]=useState();
  useEffect(() => {
    // let url = "http://localhost:8000/test";
    // let url="https://l5e1p3a5b7.execute-api.us-east-1.amazonaws.com/dev/login"
    let url="http://localhost:3000/dev/login"
    let header = {};
    let request = {
      
      };
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        // setArray(res.data);
      })
      .catch();
  }, []);

  function onDelete(id){
    console.log(id)
    setId(id);
    let url_del="http://localhost:8000/delete";
    let reqst={id:id}
    let head={};
    console.log(reqst)
    axios.delete(url_del,reqst,head).then((res)=>{
        console.log("deleted",res.data);
        
    }).catch();

}
  return (
    <>
      <label>List of students</label>
      <br />
      
      <div className="table">
      
      <label>id</label>
      <label>Name</label>
      <label>Action</label>
      
      </div>
 {array.map((itm, index) => {
        return (
          <>
            {itm.id}
            {itm.txtname}
            <button onClick={(e)=>{onDelete(itm.id)}}>Delete</button>
            <br/>
          </>
        );
      })} 
     
    </>
  );
}
