import axios from "axios"

export default function Test1(){
    const login=()=>{
        let url="http://localhost:8000/test";
          let request={};
          let header={};
            axios.post(url,request,header).then((res)=>{
                console.log(res.data)
            }).catch();

    }


    return<>
    <button onClick={login}>Click me</button>
    </>
}