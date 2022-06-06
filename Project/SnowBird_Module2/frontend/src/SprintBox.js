function SprintBox(index){
    console.log(index)
    var no=index;
    console.log("no"+JSON.stringify(no.index))

    return<>
     <div className="sprint">
              <div> <label>Sprint {no.index}</label></div>
               <div className="sprint1">
                   <label>ToDo</label><br></br>
                   <label>InProgress</label><br></br>
                   <label>Review</label><br></br>
                   <label>Completed</label>
               </div>
             </div>
    </>
};
export default SprintBox;