import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
interface  Patient {
  name: string;
  surname: string;
  address: string;
  tel: string;
  medicalHist: string;
  age:number;
  sex :string

}

const AjoutPatient: React.FC = () => {
  const [isInscrit, setInscrit] = useState(false);
  const [patient, setPatient] = useState<Patient>({
    name: "",
    surname: "",
    address: "",
    tel: "",
    medicalHist:"",
    age:0,
    sex:""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    try{
      const reponse=await axios.post("http://localhost:8080/patient/create", patient);
      console.log(reponse);
      <Toaster/>
      toast.success("felicition pour l'ajout du patient")
      
      setInscrit(true);
      
    }catch(error){
      console.error;
      toast.error("felicition pour l'ajout du patient")
    }
    };
  return (
    <div className="flex">
     <form
        className="bg-gray-800 w-1/4 text-center shadow-md rounded absolute right-1"
        onSubmit={handleSubmit}
      >
        <h1 className="text-white "> AJout patient</h1>
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
            type="text"
            name="name"
            value={patient.name}
            onChange={handleChange}
            placeholder="nom"
          />
        </label>
        <br />
        <br />
        
        <label>
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
            type="text"
            name="surname"
            value={patient.surname}
            onChange={handleChange}
            placeholder="prenom"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            type="text"
            name="address"
            value={patient.address}
            onChange={handleChange}
            placeholder="adresse"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            type="text"
            name="age"
            value={patient.age}
            onChange={handleChange}
            placeholder="age"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            type="medicalHist"
            name="medicalHist"
            value={patient.medicalHist}
            onChange={handleChange}
            placeholder="medicalHist"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            type="text"
            name="tel"
            value={patient.tel}
            onChange={handleChange}
            placeholder="tel"
          />
        </label>
        <br />
        <br/>
        <label>
       
          <input
            className="shadow appearance-none border rounded  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            type="sex"
            name="sex"
            value={patient.sex}
            onChange={handleChange}
            placeholder="sex"
          />
        </label>
        <br />
        <br/>
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-9"
        >
          Envoyer
        </button>
        <br />
        <br />
        <button
          type="reset"
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-9"
        >
          Reset
        </button>
        <br />
    {isInscrit && <p>Merci pour votre inscription!</p>}
      </form>
    </div>
  );
};

export default AjoutPatient;
