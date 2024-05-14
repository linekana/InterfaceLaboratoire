import React from "react";
import imageToAdd1 from "./pictures/labo3.jpeg"
import imageToAdd2 from "./pictures/Laborantinpetit.jpeg"
const Home:React.FC=()=>{
    return(
       <>
       <div>
        <div>
            <img className="w-1/2 border-5  rounded-lg" src={imageToAdd1} alt="labo"/>
            <img className="w-1/2 border-5  rounded-lg" src={imageToAdd2} alt="labo"/>
        </div>
       <h1></h1>
       </div>
       </>
    )

}
export default Home;