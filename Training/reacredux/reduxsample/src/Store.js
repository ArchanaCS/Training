import { legacy_createStore } from "redux";
const initialState={count:0};
const reducer=(prevState=initialState,action)=>
    {
        switch(action.type)
        {
            case "increment":
            return{...prevState,count:prevState.count+1}
            break;
        }
       return prevState;
       
    }

const Store=legacy_createStore(reducer);
export default Store;