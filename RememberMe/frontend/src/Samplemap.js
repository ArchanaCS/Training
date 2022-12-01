import "./style.css";
import { useState } from "react";

export default function Samplemap() {
  const [count, setCount] = useState(0);
  const[disable,setDisable]=useState(false)
  //   const count=0;
  const [array, setArray] = useState([
    [
      { value: 1, clicked: false },
      { value: 2, clicked: false },
      { value: 3, clicked: false },
    ],
    [
      { value: 4, clicked: false },
      { value: 5, clicked: false },
      { value: 6, clicked: false },
    ],
  ]);
  const handleclick = (e, index, innerindx) => {
    const temp = [...array];
    // temp[index][innerindx].clicked = temp[index][innerindx].clicked
    //   ? false
    //   : true;
    temp[index][innerindx].clicked = temp[index][innerindx].clicked
    ? false
    : true;
    // if (count < 5) {
     
      
    //   if (temp[index][innerindx].clicked == true) {
    //     setCount(count + 1);
    //   } 
    //   else {
    //     setCount(count - 1);
    //   }
    //   setArray(temp);
    // }
    
    // else if(temp[index][innerindx].clicked ==false){

    //     setCount(count-1);
    // }

     if(count<5)
        {
            if(temp[index][innerindx].clicked ==true)
            {
                setCount(count+1);
                
            }
            else 
            {
                    setCount(count - 1);
            }
        
       
    
        }  
    
    if(count==5)
       {
        temp[index][innerindx].clicked = temp[index][innerindx].clicked
        ? false
        : true;
        }
   
       
    console.log(temp);
  };
  return (
    <>
      {array.map((item, index) => {
        return (
          <>
            {item.map((inneritm, innerindx) => {
              return (
                <>
                  <button
                    onClick={(e) => {
                      handleclick(e, index, innerindx);
                    }}
                    className={inneritm.clicked ? "clicked" : "button"} disabled={disable}
                  >
                    {inneritm.value}

                    <br />
                  </button>
                </>
              );
            })}
          </>
        );
      })}
      {count}
    </>
  );
}
