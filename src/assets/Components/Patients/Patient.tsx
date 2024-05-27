import React from "react";
import ListePatients from "./ListePatients";
import { FaEye,FaEdit,FaPlus ,FaSearch} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Patient: React.FC = () => {
  return (
    <div className="relative border rounded m-4 bg-slate-50">
      <br />
      <div className="p-4  relative">
  
        <span className="uppercase p-1 border  rounded-tr-[10px]  rounded-tl-[20px] bg-slate-300  text-white-400 text-center text-3xl bg-gradient-to-b from-rose-200 to-blue-400">
          
          vous etes dans l'interface de gestion des patients{" "}
        </span>
      </div>
      <br />
      <div className="flex">
        <div className="  w-1/2 border rounded  mr-5 ml-10 p-2 pr-10 text-center bg-slate-100">
          <span>
            <span className="text-xl italic">vous avez la posibilité de</span>
            <br />
            <br />
            <FaEye /><p>visualisez vos Patients</p>
            <FaEdit/> <p>modifiez  un Patients</p>
            <FaPlus/><p> ajoutez des Patients</p>
            <FaSearch/><p> recherchez vos patients</p>
            <MdDelete/><p>supprimez un patient</p>
          </span>
        </div>
        <div className=" w-1/2 border rounded italic mr-5 ml-10 p-2 pr-10 text-center bg-slate-100"></div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className="ml-20">

      <ListePatients />
      </div>
    </div>
  );
};
export default Patient;
