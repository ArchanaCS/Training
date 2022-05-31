
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from './Menu'
// import './css/addsprintstyle.css'

function Sprint() {
  const [options, setOption] = useState([])
  const [Sprintname, settextSprintname] = useState('')
  const [Description, setdescription] = useState('')
  const [assignedto, settxtUserName] = useState('')
  const [todate, settodate] = useState(new Date())
  const [fromdate, setfromdate] = useState(new Date())
  const [Status, setstatus] = useState('')
  const [taskarray, settaskarray] = useState([])
  const[array,setArray]=useState([]);
  //const handlechange = (date) => setfromdate(date)
  const navigate = useNavigate()
  useEffect(()=>{
      var url_user="http://localhost:8000/userfetchforusers";
      var req={};
      var header={};
      axios.post(url_user,req,header).then((res)=>{
          setArray(res.data);
      }).catch();


  },[])

  function handleclick() {
    var url = 'http://localhost:8000/insertSprint'
    var request = {
        txtSprintname:Sprintname ,
        stdate: fromdate,
        enddate:todate
        
    }
    //console.log('assignedto:' + JSON.stringify(assignedto))
    console.log(request);
    var header = {}

    axios
      .post(url, request, header)
      .then((res) => {
        console.log('reS' + JSON.stringify(res.data))
        if (res.data !== 'undefined') {
          alert('added new sprint')
        }
      })
      .catch()
  }

  return (
    <div className="outer">
      {/* <div className="firstrow">
        <div className="usericon"> </div>
        <label>User</label>
      </div> */}
      <div className="secondrow">
        <Menu />
        <div className="as_sc">
          <div className="as_sc_row1">
            <div className="as_sc_row1_cl1">
              <label>Add Sprint</label>
            </div>
            <div className="as_sc_row1_cl2">
              <button onClick={handleclick}>SAVE</button>
            </div>
          </div>
          <div className="as_sc_row2">
            <div className="as_sc_row2_cl1">
              <label>Title</label>
              <input
                type="text"
                onChange={(e) => {
                  settextSprintname(e.target.value)
                }}
              />
            </div>

            <div className="as_sc_row2_cl2">
              <label>Description</label>
              <textarea rows="6" cols="50"></textarea>
            </div>
          </div>
          <div className="as_sc_row3">
            <div>
            <label>Status</label>
            <br></br>
            <select>
              <option>--options--</option>
              <option>To do</option>
              <option>In Progress</option>
              <option>Review</option>
              <option>Completed</option>
            </select>
            </div>
            <div><label>Assigned to</label></div>
    
            <br></br>
            <select
              onChange={(e) => {
                settxtUserName(e.target.value)
              }}
            >
              {array.map((item, index) => {
                return (
                  <>
                    <option value={item.id}>{item.txtUserName}</option>
                  </>
                )
              })}
            </select>
          </div>

          <div className="ownerrow">
            <label>From date</label>
            <input type="date" onChange={(e)=>{setfromdate(e.target.value)}}/>
            <br></br>
          </div>
          <div className="ownerrow">
            <label>To date</label>
            <input type="date" onChange={(e)=>{settodate(e.target.value)}} />
          </div>

          <div className="prowone">
            <label>Task</label>
            <button onClick={handleclick}>Add Task</button>
          </div>

          <div className="pbutton">
            <button>1</button>
            <button>2</button>
            <button>...</button>
            <button>10</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sprint