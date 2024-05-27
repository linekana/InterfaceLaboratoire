import { useEffect, useState } from "react";
import axios from "axios";
interface personalStaff {
  idPersonalStaff: number;
  name: string;
  surname: string;
}
interface Patient {
  name: string;
  surname: string;
  address: string;
  personalStaff: personalStaff;
  tel: string;
  medicalHist: string;
  age: number;
  sex: string;
}

const AjoutPatient: React.FC = () => {
  const [isInscrit, setInscrit] = useState(false);
  const [personalStaff, setPersonalStaff] = useState<personalStaff[]>([]);
  const [patient, setPatient] = useState<Patient>({
    name: "",
    surname: "",
    address: "",
    personalStaff: {
      idPersonalStaff: 1,
      name:"",
      surname:""
    },
    tel: "",
    medicalHist: "",
    age: 0,
    sex: "",
  });
  const resetForm = () => {
    setInscrit(false);
    setPatient({
      name: "",
      surname: "",
      address: "",
      personalStaff: {
        idPersonalStaff: 0,
        name:"",
        surname:""
      },
      tel: "",
      medicalHist: "",
      age: 0,
      sex: "",
    });
  };
  useEffect(() => {
    const fetchLaborantins = async () => {
      try {
        const response = await axios.get<personalStaff[]>(
          "http://localhost:8080/personalStaff/readAll"
        );
        setPersonalStaff(response.data);
      } catch (error) {
        console.error("erreur de recuperation du patient:error");
      }
    };
    fetchLaborantins();
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "personalStaff.idPersonalStaff") {
      setPatient({
        ...patient,
        personalStaff: {
          ...patient.personalStaff,
          idPersonalStaff: parseInt(e.target.value, 10),
        },
      });
    } else {
      setPatient({ ...patient, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const reponse = await axios.post(
        "http://localhost:8080/patient/create",
        patient
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
        className="text-center shadow-md  border rounded  pt-2 pb-8 mb-4 bg-slate-50 "
        onSubmit={handleSubmit}
      >
        <label>
          <input
            className=" text-center shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
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
            className=" text-center shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
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
            className=" text-center shadow appearance-none border rounded  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            type="text"
            name="address"
            value={patient.address}
            onChange={handleChange}
            placeholder="adresse"
          />
        </label>
        <br />
        <br />
        <label text-white>
          age
          <input
            className=" text-center shadow appearance-none border rounded  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
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
            className=" text-center shadow appearance-none border rounded  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            type="medicalHist"
            name="medicalHist"
            value={patient.medicalHist}
            onChange={handleChange}
            placeholder="medicalHist"
          />
        </label>
        <br />
        <br/>
        <label>
          <input
            className=" text-center shadow appearance-none border rounded  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            type="text"
            name="tel"
            value={patient.tel}
            onChange={handleChange}
            placeholder="tel"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className=" text-center shadow appearance-none border rounded  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            type="sex"
            name="sex"
            value={patient.sex}
            onChange={handleChange}
            placeholder="sex"
          />
        </label>
        <br />
        <br />
        <label className="text-black m-10">
          personnelMedical:
          <select className=" text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            name="personalStaff.idPersonalStaff"
            id="personalStaff.idPersonalStaff"
            onChange={handleChange}
            value={patient.personalStaff.idPersonalStaff}
          >
            {personalStaff.map((personalStaff) => (
              <option
                key={personalStaff.idPersonalStaff}
                value={personalStaff.idPersonalStaff}
              >
                {personalStaff.name}
                {personalStaff.surname}
              </option>
            ))}
          </select>
          <br/>
          <br/>
        </label>
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded h-9"
        >
          Soumettre
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={resetForm}
          className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded h-9"
        >
          reinitialiser
        </button>
        <br />
        <br />
        {isInscrit && <p>Ajout reussi !</p>}
      </form>
    </div>
  );
};

export default AjoutPatient;
