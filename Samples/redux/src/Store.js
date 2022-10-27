import { legacy_createStore } from "redux";
const initialState = {
  txt: "",
  pass:""
};
const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "setTxt":
      return { ...prevState, txt: action.payload };
    case "setPass":
        return { ...prevState, pass: action.payload };
      break;
  }
  return prevState;
};
const store = legacy_createStore(reducer);
export default store;
