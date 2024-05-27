import axios from "axios";
import { useEffect, useState } from "react";
import PatientDialog from "../Patients/PatientDialog";

interface commandTests {
    date:string;
    patients:{
    idPatient:number;
    }
    description:string;
}
interface  patients{
    idPatient:number;
    name:string;
    surname:string;
}
 
const AjoutCommandtest:React.FC=()=>{
    const [patients,setPatient]=useState<patients[]>([]);
  const [isInscrit, setInscrit] = useState(false);
  const resetForm1 = () => {
    setInscrit(false);
    setCommandTests({
      description: "",
      patients: {
        idPatient: 0,
        
      },
      date: "",
    });
  };

    const [commandTests,setCommandTests]=useState<commandTests>({
        date:"",
        patients:{
        idPatient:0,
        },
        description:"",
    });
    const handleChange1 = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
        if (e.target.name === "patients.idPatient") {
          setCommandTests({
            ...commandTests,
            patients: {
              ...commandTests.patients,
              idPatient: parseInt(e.target.value, 10),
            },
          });
        } else {
          setCommandTests({ ...commandTests, [e.target.name]: e.target.value });
        }
      };
    useEffect(()=>{
        const fetchPatients = async () => {
            try {
              const response = await axios.get<patients[]>(
                "http://localhost:8080/patient/readAll"
              );
              setPatient(response.data);
            } catch (error) {
              console.error("erreur de recuperation du patient:error");
            }
          };
          fetchPatients();
        
    },[]);
    
  
    const handleSubmit1 = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const reponse = await axios.post(
            "http://localhost:8080/commandTest/create",
            commandTests
          );
          console.log(reponse);
          setInscrit(true);
        } catch (error) {
          console.error;
        }
      };
    return(
    <>
    
        <div >
            <form onSubmit={handleSubmit1} 
        className=" m-5 text-center shadow-md  border rounded  pt-2 pb-8 mb-4 bg-slate-200"
             >
                <span>ajoutez une commande de  test ici</span><br/>
                <label  className="" >
                   description:
                   <input  type="text" name="description" className="border rounded m-3 w-[200px] h-[100px] " placeholder="entrez une description"  required value={commandTests.description} onChange={handleChange1}/>
                </label  >
                <label className="" >
                   date:
                   <input type="date" name="date" className="m-2 p-2"  value={commandTests.date}  onChange={handleChange1}/>
                </label>
                <label className="" >
                    patient
                    <select name="patients.idPatient" id="patients.idPatient" value={commandTests.patients.idPatient}  onChange={handleChange1}>
                        {
                            patients.map((patients)=>(
                                <option key={patients.idPatient} value={patients.idPatient}>{patients.name}{patients.surname}</option>
                            ))
                        }
                            
                    </select>
                </label> <button
          type="submit"
          className="bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded h-9"
        >
          Soumettre
        </button>
        
        <button
          type="button"
          onClick={resetForm1}
          className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded h-9"
        >
          reinitialiser
        </button>
        <br />
        
        {isInscrit && <p>ajout reussi refraichissez la page pour la mise a jour</p>}
      </form>    
      <span className="text-red-500">patient non existant l'ajouter ici <PatientDialog/></span> 
        

        <form>
            <span> ajout echantillon</span>

        </form>
    </div>

    </>
    )

}
export default AjoutCommandtest;
