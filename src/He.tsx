import { ChangeEvent, useState } from "react";

const He:React.FC=()=>{
    const [food,setFood]=useState("steak");
    const handleChange=(e: ChangeEvent<HTMLSelectElement>)=>{
        alert(e.target.value)
        setFood(e.target.value)
    }
    return(
        <>
        <select name={food} onChange={(e)=>handleChange(e)}
        >
     <option value="steak">Steak</option>
     <option value="sandwich">sandwich</option>
     <option value="steak">Steak</option>
     <option value="riz">riz</option>
        </select>
        </>
    )
}
export default He;