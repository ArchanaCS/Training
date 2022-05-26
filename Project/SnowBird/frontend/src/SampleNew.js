import { useState } from "react"
import './stylenew.css'
const style = {
    border: '1px solid #aaa',
}
const App = () => {
    const [array, setArray] = useState([{ id: 2, Name: "Archana", isClicked: true, "Subject": ["English", "Hindi", "Maths"] },
    { id: 3, Name: "Alaka", isClicked: true, "Subject": ["English", "Hindi", "Maths"] },
    { id: 5, Name: "Aditya", isClicked: true, "Subject": ["English", "Hindi", "Maths"] },
    { id: 6, Name: "Aromal", isClicked: true, "Subject": ["English", "Hindi", "Maths"] }])

    const handleClick = (e,index) => {

        console.log(index)
        e.preventDefault();
        let temp=[...array];
        temp[index].isClicked=temp[index].isClicked?false:true;
        console.log(temp)
        setArray(temp)
    }
    return <>{
        array.map((itm, indx) => {
            return <>
                <tr onClick={(e)=>handleClick(e,indx)}>
                <td style={style}>{itm.id}</td>
                <td style={style}>{itm.Name}</td>
                </tr>
                {itm.Subject.map((childItem, cIndex) => {
                    return <tr className={itm.isClicked ? "display" : "displaynone"}><td>{childItem}</td></tr>
                })}
            </>
        })}
    </>
}
export default App