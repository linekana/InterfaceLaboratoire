import { useState } from "react";
import axios from "axios";
interface PersonalStaff {
  name: string;
  surname: string;
  username: string;
  address: string;
  email: string;
  tel: string;
  roleUser: {
    idRoleUser: number;
  };
  password: string;
}

const AjoutUser: React.FC = () => {
  const [isInscrit, setInscrit] = useState(false);
  const [personalStaff, setpersonalStaff] = useState<PersonalStaff>({
    name: "",
    surname: "",
    username: "",
    address: "",
    email: "",
    tel: "",
    roleUser: {
      idRoleUser: 1,
    },
    password: "",
  });

  const handleReset = () => {
    setInscrit(false);
    setpersonalStaff({
      name: "",
      surname: "",
      username: "",
      address: "",
      email: "",
      tel: "",
      roleUser: {
        idRoleUser:1,
      },
      password: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "roleUser.idRoleUser") {
      setpersonalStaff({
        ...personalStaff,
        roleUser: {
          ...personalStaff.roleUser,
          idRoleUser: parseInt(e.target.value, 10),
        },
      });
    } else {
      setpersonalStaff({ ...personalStaff, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(personalStaff);
      const reponse = await axios.post(
        "http://localhost:8080/personalStaff/create",
        personalStaff
      );
      console.log(reponse);

      setInscrit(true);
    } catch (error) {
      console.error;
    }
  };

  return (
    <div>
      <form
        className=" text-center shadow-md  border rounded  pt-2 pb-8 mb-4 bg-slate-50"
        onSubmit={handleSubmit}
      >
        <label>
          <input
            className=" text-center shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-10 h-7"
            type="text"
            name="name"
            value={personalStaff.name}
            onChange={handleChange}
            placeholder="nom"
          />
        </label>
        <br />
        <label>
          <input
            className=" text-center shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
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
          role:
          <select
            id="roleUser.idRoleUser"
            name="roleUser.idRoleUser"
            value={personalStaff.roleUser.idRoleUser}
            onChange={handleChange}
            required
          >
            <option value="1">Administrateur</option>
            <option value="2">receptioniste</option>
            <option value="3">Laborantin</option>
            <option value="4">caissier</option>
          </select>
        </label>
        <br/>
        <br/>
        <label>
          <input
            className="  text-center shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
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
            className=" text-center shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
            type="email"
            name="email"
            value={personalStaff.email}
            onChange={handleChange}
            placeholder="email"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className="text-center shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
            type="text"
            name="address"
            value={personalStaff.address}
            onChange={handleChange}
            placeholder="addresse"
          />
        </label>{" "}
        <br />
        <br />
        <label>
          <input
            className=" text-center shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
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
            className=" text-center shadow appearance-none border border-blue-500 rounded  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-7"
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
          type="button"
          onClick={handleReset}
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
        <br />
        {isInscrit && (
          <p className="text-blue-500">ajout effectué avec succes!</p>
        )}
      </form>
      
    </div>
  );
};

export default AjoutUser;