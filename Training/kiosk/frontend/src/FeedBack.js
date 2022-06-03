import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
const FeedBack = () => {
  const [question, setQuestion] = useState([]);
  const [count, setCount] = useState(1);

  var url = " http://localhost:8000/qfetch";
  var header = {};
  useEffect(()=>{
    var request = { id: count };
    //var request = {}
    setCount((c) => c + 1);
 
     axios
       .post(url, request, header)
       .then((res) => {
         console.log("res" + JSON.stringify(res.data));
         setQuestion(res.data);
         
       })
       .catch();
 

  },[])
  function handleClick(c) {
    var request = { id: count };
   //var request={};
    setCount((c) => c + 1);

    axios
      .post(url, request, header)
      .then((res) => {
        console.log("res" + JSON.stringify(res.data));
        setQuestion(res.data);
        //setQuestion([...question,count]);
      })
      .catch();
  }
  function handleClickPrev() {
    var request = {id: count} ;
    setCount((c) => c - 1);
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("res" + JSON.stringify(res.data));
        setQuestion(res.data);
        //setQuestion([...question,count]);
      })
      .catch();
  }
  return (
    <>
      <div className="form">
        <h3>Customer Survery</h3>
        {question.map((item, index) => {
          return (
            <>
              <p>
                {item.id}
                {item.txtQuestion}
              </p>
            </>
          );
        })}

        <div>
          <button onClick={() => handleClick(count)}>Next{count}</button>
          <button onClick={() => handleClickPrev(count)}>Prev{count}</button>
        </div>
      </div>
    </>
  );
};
export default FeedBack;
