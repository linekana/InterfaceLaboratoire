import { useState } from "react";
import imageToAdd from "./pictures/labo3.jpeg";
import axios from "axios";
interface PersonalStaff {
  name: string;
  surname: string;
  username: string;
  address: string;
  email: string;
  tel: string;
  idRoleUser: number;
  password: string;
}

const Inscription: React.FC = () => {
  const [isInscrit, setInscrit] = useState(false);
  const [personalStaff, setpersonalStaff] = useState<PersonalStaff>({
    name: "",
    surname: "",
    username: "",
    address: "",
    email: "",
    tel: "",
    idRoleUser: 0,
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpersonalStaff({ ...personalStaff, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    try{
      const reponse=await axios.post("http://localhost:8080/personalStaff/create", personalStaff);
      console.log(reponse);

      setInscrit(true);
      
    }catch(error){
      console.error;
    }
    };
  return (
    <div className="flex">
      <img className= " h-screen w-1/2  " src={imageToAdd} alt="Image" />
      <form
        className="bg-gray-800 w-1/2  text-center shadow-md rounded px-8 pt-6 pb-8 mb-4  absolute right-0"
        onSubmit={handleSubmit}
      >
        <h1 className="text-white "> FORMULAIRE D'INSCRIPTION</h1>
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={personalStaff.name}
            onChange={handleChange}
            placeholder="nom"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="surname"
            value={personalStaff.surname}
            onChange={handleChange}
            placeholder="prenom"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="username"
            value={personalStaff.username}
            onChange={handleChange}
            placeholder="nom-d'utilisateur"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={personalStaff.email}
            onChange={handleChange}
            placeholder="email"
          />
        </label>{" "}
        <br />
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="tel"
            value={personalStaff.tel}
            onChange={handleChange}
            placeholder="tel"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={personalStaff.password}
            onChange={handleChange}
            placeholder="**************"
          />
          <br />
          <br />
        </label>
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Envoyer
        </button>
        <br />
        <br />
        <button
          type="reset"
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
        <br />
    {isInscrit && <p>Merci pour votre inscription!</p>}
      </form>
    </div>
  );
};

export default Inscription;
