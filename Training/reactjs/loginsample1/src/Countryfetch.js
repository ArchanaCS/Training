
import { useState } from "react";

function Countryfetch(){

    const [countrylist, setCountryList] = useState([
        { id: "1", countryname: "India" },
        { id: "2", countryname: "US" },
        { id: "3", countryname: "SriLanka" }]);
    // return(
    //     countrylist.map((itm,indx)=>{
    //         return<p>{itm}</p>
    //     })
        return (
            <div>
              <h1>SignUp</h1>
              {countrylist.map((itm, indx) => {
        return <p>{itm.countryname}</p>;
      })}

            </div> 
        );  
    

}
export default Countryfetch;
