import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { ReactSession } from "react-client-session";
function Project() {
  const navigate = useNavigate();
  const [array, setArray] = useState([]);
  const [id,setPrjctId]=useState({});
  var url = "http://localhost:8000/projectdetailfetchNew";
  var request = { poid:4};
  var header = {};
  useEffect(() => {
    axios
      .post(url, request, header)
      .then((res) => {
        setArray(res.data);
       // console.log(res.data);
      })
      .catch();
  }, []);


  function createnew() {
    navigate("/addproject");
    
  }

  function editproject(n) {
    console.log(n);
    setPrjctId(n);
    ReactSession.set("id",n);
    console.log("id:"+JSON.stringify(id));
    navigate('/editproject');
   

  }
  const handleExpand = (e, item, index) => {
    e.preventDefault();
    var temp = [...array];
    temp[index].isExpaned = temp[index].isExpaned ? false : true;
    setArray(temp);
  };
  const handleChildExpand = (e, item, index, childIndex) => {
    e.preventDefault();
    var temp = [...array];
    console.log(childIndex);
    console.log(temp[index].list);
    temp[index].list[childIndex].isExpaned = temp[index].list[childIndex]
      .isExpaned
      ? false
      : true;
    setArray(temp);
  };
  const handleTaskExpand = (e, item, index) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow">
          <div className="usericon"> </div>
          <label>User</label>
        </div>
        <div className="secondrow">
          {/* Side navigation menu */}

          <div className="firstcolumn">
            <nav>
              <li>Board</li>
              <li>Projects</li>
              <li>Epics</li>
              <li>Tasks</li>
              <li>Sprints</li>
              <li>Users</li>
            </nav>
          </div>
          <div className="secondcolumn">
            <div className="prowone">
              <label>Projects</label>
              <button onClick={createnew}>Create New</button>
            </div>
            <div className="tablerow">
              <table>
                <thead>
                  <th className="withborder constant"></th>
                  <th className="withborder constant">#id</th>
                  <th className="withborder">Project name</th>
                  <th className="withborder">Project owner</th>
                </thead>

                <tbody>
                  {array.map((item, index) => {
                    return (
                      <>
                        <tr key={item.id}></tr>
                        {/* <td className="right constant"></td> */}
                        <tr className="project">
                          <td >
                            {item.isExpaned ? (
                              <FaAngleDown
                                onClick={(e) => handleExpand(e, item, index)}
                              />
                            ) : (
                              <FaAngleRight
                                onClick={(e) => handleExpand(e, item, index)}
                              />
                            )}
                          </td>
                          <td   className="constant" value={item.id} onClick={()=>{editproject(item.id)}}>{item.id}</td>
                          <td  >{item.txtName}</td>
                          <td>{item.txtUserName}</td>
                          <td></td>
                          {/* <td>{JSON.stringify(item.epic)}</td>  */}
                        </tr>

                        {item.epic.map((epicitem, epicindex) => {
                          return (
                            <>
                              <tr
                                className={item.isExpaned ? "none" : "display"}
                              >
                                <td className="constant"></td>
                                <td>
                                  {epicitem.isExpaned ? (
                                    <FaAngleDown
                                      onClick={(e) =>
                                        handleChildExpand(e, item, index, epicindex)
                                      }
                                    />
                                  ) : (
                                    <FaAngleRight
                                      onClick={(e) =>
                                        handleChildExpand(e, item, index, epicindex)
                                      }
                                    />
                                  )}
                                </td>

                                <td></td>
                                <td>{epicitem.txtTitle}</td>
                                <td>{epicitem.txtStatus}</td>
                                <td></td>
                              </tr>
                              {epicitem.task.map((taskitem, tasklist) => {
                                return (
                                  <>
                                    <tr
                                      className={
                                        item.isExpaned ? "none" : "display"
                                      }
                                    >
                                      <td className="constant"></td>
                                      <td className="right constant">
                                        {taskitem.isExpaned ? (
                                          <FaAngleDown
                                            onClick={(e) =>
                                              handleChildExpand(e, item, index, tasklist)
                                            }
                                          />
                                        ) : (
                                          <FaAngleRight
                                            onClick={(e) =>
                                              handleChildExpand(e, item, index, taskitem)
                                            }
                                          />
                                        )}
                                      </td>

                                      <td></td>
                                      <td>{taskitem.txtTitle}</td>
                                      <td>{taskitem.txtStatus}</td>
                                      {/* <td> {JSON.stringify(epicitem.task)}</td> */}
                                    </tr>
                                  </>
                                );
                              })}
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                </tbody>
              </table>
              <div className="pbutton">
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
