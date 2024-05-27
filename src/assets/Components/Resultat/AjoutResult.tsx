import axios from "axios";
import { useEffect, useState } from "react";
import PatientDialog from "../Patients/PatientDialog";

interface results {
  characteristic: string;
  positivity: boolean;
  personalStaff: personalStaff;
  echantillons: echantillons;
}
interface personalStaff {
  idPersonalStaff: number;
  name: string;
  surname: string;
}
interface echantillons {
  idEchantillon: number;
  name: string;
  dateEnd:Date;
}
const AjoutResult: React.FC = () => {
  const [echantillons, setEchantillons] = useState<echantillons[]>([]);
  const [personalStaff, setPersonalStaff] = useState<personalStaff[]>([]);
  const [isInscrit, setInscrit] = useState(false);
  const [results, setResults] = useState<results>({
    characteristic: "",
    positivity: false,
    echantillons: {
      idEchantillon: 1,
      name: "",
      dateEnd: new Date(),
    },
    personalStaff: {
      idPersonalStaff: 1,
      name: "",
      surname: "",
    },
  });
  const resetForm1 = () => {
    setInscrit(false);
    setResults({
      characteristic: "",
      positivity: false,
      echantillons: {
        idEchantillon: 1,
        dateEnd: new Date(),

        name: "",
      },
      personalStaff: {
        idPersonalStaff: 1,
        name: "",
        surname: "",
      },
    });
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "positivity") {
        setResults((prevResults) => ({
          ...prevResults,
          positivity: e.target.value === 'true',
        }));
        return; 
      }
    if (e.target.name === "echantillons.idEchantillon") {
      setResults({
        ...results,
        echantillons: {
          ...results.echantillons,
          idEchantillon: parseInt(e.target.value, 10),
        },
      });
    }
    
    else if (e.target.name === "personalStaff.idPersonalStaff") {
        setResults({
            ...results,
            personalStaff: {
              ...results.personalStaff,
              idPersonalStaff: parseInt(e.target.value, 10),
            },
          });
        }
     else {
      setResults({...results, [e.target.name]: e.target.value });
    }
  };
  useEffect(() => {
    const fetchPersonal = async () => {
      try {
        const response = await axios.get<personalStaff[]>(
          "http://localhost:8080/personalStaff/readAll"
        );
        setPersonalStaff(response.data);
      } catch (error) {
        console.error("erreur de recuperation du personnel:error");
      }
    };
    fetchPersonal();
  }, []);
  useEffect(() => {
    const fetchEchantillon = async () => {
      try {
        const response = await axios.get<echantillons[]>(
          "http://localhost:8080/echantillon/readAll"
        );
        setEchantillons(response.data);
      } catch (error) {
        console.error("erreur de recuperation du personnel:error");
      }
    };
    fetchEchantillon();
  }, []);

  const handleSubmit1 = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const reponse = await axios.post(
        "http://localhost:8080/result/create",
        results
      );
      console.log(reponse);
      setInscrit(true);
    } catch (error) {
      console.error;
    }
  };
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit1}
          className=" m-5 text-center shadow-md  border rounded  pt-2 pb-8 mb-4  bg-slate-100"
        >
          <span className="italic"> ajoutez le resultat d'un echantillon  ici</span>
          <br />
          <label>Positivité :</label>
            <select name="positivity" value={results.positivity ? 'true' : 'false'} onChange={handleChange}>
              <option value="true">Positive</option>
              <option value="false">Negative</option>
            </select>
          <label className="">
            caracteristique:
            <input
              type="text"
              name="characteristic"
              className="border rounded m-3 w-[300px] h-[50px]  text-center"
              placeholder="entrez une description"
              required
              value={results.characteristic}
              onChange={handleChange}
            />
          </label>
          <br/>
          

          <label className="">
            personnel en charge
            <select className="m-4 p-2 border rounded"
              name="personalStaff.idPersonalStaff"
              id="personalStaff.idPersonalStaff"
              value={results.personalStaff.idPersonalStaff}
              onChange={handleChange}
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
          </label>
          <br/>
          <br/>
          

          <label className="">
            echantillons
            <select className="m-3 p-2 border rounded"
              name="echantillons.idechantillons"
              id="echantillons.idechantillons"
              value={results.echantillons.idEchantillon}
              onChange={handleChange}
            >
              {echantillons.map((echantillons) => (
                <option
                  key={echantillons.idEchantillon}
                  value={echantillons.idEchantillon}
                >
                  {echantillons.name}
                  {echantillons.dateEnd}
                </option>
              ))}
            </select>
          </label>
          <br/>
          <br/>

          <button
            type="submit"
            className="bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded h-9"
          >
            Soumettre
          </button>
          <br/>
          <br/>

          <button
            type="button"
            onClick={resetForm1}
            className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded h-9"
          >
            reinitialiser
          </button>
          <br />

          {isInscrit && <p>ajout reussi</p>}
        </form>
        <span className="text-red-500">
          patient non existant l'ajouter ici <PatientDialog />
        </span>

        <form>
          <span> ajout echantillon</span>
        </form>
      </div>
    </>
  );
};
export default AjoutResult;
