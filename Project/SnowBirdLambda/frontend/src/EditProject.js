import axios from "axios";
import { ReactSession } from "react-client-session";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { da } from "date-fns/locale";
function EditProject() {
  const [options, setOption] = useState([]);
  const [name, setTextName] = useState("");
  const [type, setTextType] = useState("");
  const [owner, setRefOwner] = useState("3");
  const [pdetails, setPdetails] = useState([]);
  const [desc, setDesc] = useState("");
  const[uname,setUName]=useState("");
  var pid;
  var pid = localStorage.getItem("Id");

  useEffect(() => {
    console.log("pid" + pid);
   // var url = "http://localhost:8000/ownerfetch";
    var url =
      "https://wc9kyrz7xi.execute-api.us-west-2.amazonaws.com/ownerfetch";
   // var url1="http://localhost:8000/projectload";
   var url1 ="https://iivyvr2ukc.execute-api.us-west-2.amazonaws.com/default/projectload";
   var request1 = '{"pid":"' + pid + '"}';
      //var request1={pid:pid};
    var header1 = {};
    var request = {};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        var len = res.data.length;
        // setA(len);
        if (len > 0) {
          setOption(res.data);

        }
      })
      .catch();

    axios
      .post(url1, request1, header1)
      .then((res) => {
        console.log("hi",res.data);
        setPdetails(res.data);
        setTextName(res.data[0].txtName);
        setTextType(res.data[0].txtType);
        setUName(res.data[0].txtUserName);
       setUName(res.data[0].id);
        setDesc(res.data[0].txtDescription);
        
      })
      .catch();
  }, []);
  function updateproject() {
 // var url = "http://localhost:8000/projectUpdate";
  var url="https://rwxzbtkeol.execute-api.us-west-2.amazonaws.com/default/projectupdate";

   var request = '{ "prjctname": "'+name+'", "prjcttype": "'+type+'", "refowner": "'+owner+'", "id":"'+pid+'", "desc": "'+desc+'" }';
  // var request={prjctname: name, prjcttype: type, refowner: owner, id:pid, desc:desc}
    console.log("owner :" + JSON.stringify(owner));
    console.log("id :" + JSON.stringify(pid));
    console.log("request",request)
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("reS" + res);
        if (res.data != "undefined") {
          alert("Project updated successfully");
        }
      })
      .catch();
  }

  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}

        {/* <div className="firstrow">
            <div className="usericon"> </div>
            <label>User</label>
          </div> */}
        <div className="secondrow">
          {/* Side navigation menu */}
          {<Menu />}

          <div className="secondcolumn">
            <div className="prowone">
              <label>Edit Project</label>
              <button onClick={updateproject}>SAVE</button>
            </div>

            <div className="psecondrow">
              <div className="titlerow">
                <label>Title</label>
                <br></br>
                {pdetails.map((item, index) => {
                  return (
                    <>
                      <input
                        type="text" value={name}
                        onChange={(e) => {
                          setTextName(e.target.value);
                        }}
                      ></input>
                    </>
                  );
                })}
              </div>
              <div className="descriptiion">
                <label>Description</label>
                <br></br>
                {/* <textarea/> */}
                {pdetails.map((item, index) => {
                  return (
                    <>
                      <input
                        type="text"
                     value={desc}
                        onChange={(e) => {
                          setDesc(e.target.value);
                        }}
                      />
                    </>
                  );
                })}
              </div>

              <div className="typerow">
                <label>Type</label>
                <br></br>

                <select
                  onChange={(e) => {
                    setTextType(e.target.value);
                  }}
                >
                  {pdetails.map((pitem, pindex) => {
                    return (
                      <>
                        <option value={type}>
                          {pitem.txtType}
                        </option>
                        <option value={"Telecom"}>Telecom</option>
                        <option value={"Business"}>Business</option>
                      </>
                    );
                  })}
                </select>
              </div>

              <div className="ownerrow">
                <label>Owner</label>
                <br></br>
                {/* onSelect={(e)=>{setRefOwner(e.target.value)}} */}
                <select value={uname}
                  onChange={(e) => {
                    setRefOwner(e.target.value);
                  }}
                >
                  {options.map((item, index) => {
                    return (
                      <>
                        <option  value={item.id} >{item.txtUserName}</option>
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProject;
