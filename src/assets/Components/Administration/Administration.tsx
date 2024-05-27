import { FaEdit, FaEye, FaPlus, FaSearch } from "react-icons/fa";
import ListeUtilisateurs from "./ListeUtilisateurs";
import ListePatients from "../Patients/ListePatients";
const Administration: React.FC = () => {
  return (
    <>  <div className="border rounded m-4 mr-4 bg-slate-100">

      <div className="text-center  ">
            <div className=" m-10 text-3xl p-5 bg-gradient-to-b from-blue-400 to-slate-500 text-black text-center  rounded-bl-[30px] rounded-tr-[30px] ">
            <span className="">
              BIENVENUE DANS LA PAGE D'ADMINISTRATION DE VOTRE LABORATOIRE
            </span>
          </div>
        <div className="flex">
        <div className="w-1/2 border rounded-md ml-8 bg-slate-200 pl-4"> 

    
      
          <span className="italic text-center ">
            GESTION DU PERSONNEL
          </span>
          <FaEye /><p>visualisez  vos utilisateus</p>
            <FaEdit/> <p>modifiez  vos utilisateusr</p>
            <FaPlus/><p> ajoutez un utlisateur </p>
            <FaSearch/><p> recherchez un utilisateur </p>
         
          <br />
          <br />
    
        </div>
       <div className="w-1/2  border rounded-md ml-8 mr-2 bg-slate-200 pl-4"> 
       <br />
       <span className="italic pl-4 ">
            GESTION DES PATIENTS
          </span>
          <span>
            <FaEye /><p>visualisez vos Patients</p>
            <FaEdit/> <p>modifier ou supprimer les Patients</p>
            <FaPlus/><p> ajouter des Patients</p>
            <FaSearch/><p> rechercher des patients</p>
          </span>
          <br />
         
    
       </div>

       </div>

    </div>
      
      <br/>
      <br/>
      <br/>
        <ListeUtilisateurs />
        <div className="ml-1">
        <ListePatients/>
        </div>
        </div>
    </>
  );
};
export default Administration;
