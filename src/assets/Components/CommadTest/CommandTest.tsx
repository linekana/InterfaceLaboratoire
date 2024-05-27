import AjoutEchantillon from "../Echantillon/AjoutEchantillon";
import AjoutCommandtest from "./AjoutCommadTest";
import { FaHome } from "react-icons/fa";

const Commandtest: React.FC = () => {
  return (
    <> 
    <div className="border rounded m-4 mr-4 bg-slate-100">
      
      <div>
        <h1 className="p-4 m-7 text-white text-3xl rounded-bl-[30px] rounded-tr-[40px] bg-gradient-to-b from-blue-400 to-slate-700">EMPLACEMENT DE GESTION DES COMMANDES DE TEST DES PATIENTS</h1>
      </div>
      <div>
        <AjoutCommandtest/>
      </div>
    </div>
    </>
  );
};
export default Commandtest;
