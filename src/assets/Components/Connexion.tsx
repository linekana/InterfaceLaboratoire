import backgroundImage from './pictures/laboratoire.jpeg'
import React from 'react';
interface Connexion{}
   const Connexion:React.FC  <Connexion>=()=>{
 const style={
   backgroundImage: `url(${backgroundImage})`,
   height: '100vh'
 } ;   return(
     

       <div   style={style}>
        <h1>connexion</h1>
       </div>
    )
}
export default Connexion;