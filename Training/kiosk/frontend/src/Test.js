import Ratefive from "./Ratefive";

function Test() {
  var temp = [
    {
      five: [
        {
          one: "1.  How satisfied are you with our products?",
        },
        {
          two: "2. How fair are the prices compared to similar retailers?",
        },
        {
          three:
            "3. How satisfied are you with the value for money of your purchase?",
        },
      ],
    },
    {
      ten: [
        {
          four: "4. On a scale of 1-10 how would you recommend us to your friends and family?",
        },
      ],
    },
    {
      text: [
        {
          five: "5. What could we do to improve our service?",
        },
      ],
    },
  ];
  
//   localStorage.setItem("q1", temp[0].five[0].one);
//   localStorage.setItem("q2", temp[0].five[1].two);
//   localStorage.setItem("q3", temp[0].five[2].three);
//   localStorage.setItem("q4", temp[1].ten[0].four);
//   localStorage.setItem("q5", temp[2].text[0].five);
localStorage.setItem("q",JSON.stringify(temp));
console.log(JSON.parse(localStorage.getItem("q")))
  function next()
  {
     for(var i =0;i<=localStorage.length;i++)
     {
       alert(JSON.parse(localStorage.getItem("q[i]")));
        {
           
        }
     }
 
    
  }

  return (
    <>
      <div className="form">
        <h3>Customer Survey</h3>
        <div className="ls">
            
          {localStorage.getItem("q1")}
          <Ratefive />
        </div>
        <div className="pos_button">
        <button className="prev">Prev</button>
        <button className="next" onClick={next}>Next</button>
        </div>
       
        </div>
      
    </>
  );
}
export default Test;
