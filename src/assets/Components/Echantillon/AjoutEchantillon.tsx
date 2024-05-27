import { useEffect, useState } from "react";
import axios from "axios";
interface echantillons {
  name: string;
  state: string;
  dateStart: string;
  dateEnd: string;
  modeConservation: string;
}
interface commadTests {
  idCommandTest: number;
  date: string;
  description: string;
}
interface tests {
  idTest: number;
  name: string;
}
interface personalStaff {
  idPersonalStaff: number;
  name: string;
  surname: string;
}
interface echantillons {
  name: string;
  state: string;
  duration: string;
  dateEnd: string;
  dateStart: string;
  modeConservation: string;
  personalStaff: personalStaff;
  commandTests: commadTests;
  tests: tests;
}

const AjoutEchantillon: React.FC = () => {
  const [isInscrit, setInscrit] = useState(false);
  const [personalStaff, setPersonalStaff] = useState<personalStaff[]>([]);
  const [commandTests, setCommandTests] = useState<commadTests[]>([]);
  const [tests, setTest] = useState<tests[]>([]);
  const [echantillons, setEchantillons] = useState<echantillons>({
    name: "",
    state: "",
    duration: "",
    dateStart: "",
    dateEnd: "",
    modeConservation: "",
    personalStaff: {
      idPersonalStaff: 1,
      name: "",
      surname: "",
    },
    commandTests: {
      idCommandTest: 1,
      date: "",
      description: "",
    },
    tests: {
      idTest: 1,
      name: "",
    },
  });

  const resetForm = () => {
    setInscrit(false);
    setEchantillons({
      name: "",
      state: "",
      duration: "",
      dateStart: "",
      dateEnd: "",
      modeConservation: "",
      personalStaff: {
        idPersonalStaff: 1,
        name: "",
        surname: "",
      },
      commandTests: {
        idCommandTest: 1,
        date: "",
        description: "",
      },
      tests: {
        idTest: 1,
        name: "",
      },
    });
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "commandTests.idCommandTest") {
      setEchantillons({
        ...echantillons,
        commandTests: {
          ...echantillons.commandTests,
          idCommandTest: parseInt(e.target.value, 10),
        },
      });
    } else if (e.target.name === "tests.idTest") {
      setEchantillons({
        ...echantillons,
        tests: {
          ...echantillons.tests,
          idTest: parseInt(e.target.value, 10),
        },
      });
    } else if (e.target.name === "personalStaff.idPersonalStaff") {
      setEchantillons({
        ...echantillons,
        personalStaff: {
          ...echantillons.personalStaff,
          idPersonalStaff: parseInt(e.target.value, 10),
        },
      });
    } else {
      setEchantillons({ ...echantillons, [e.target.name]: e.target.value });
    }
  };
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get<tests[]>(
          "http://localhost:8080/test/readAll"
        );
        setTest(response.data);
      } catch (error) {
        console.error("erreur de recuperation du patient:error");
      }
    };
    fetchTests();
  }, []);
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
  useEffect(() => {
    const fetchCommand = async () => {
      try {
        const response = await axios.get<commadTests[]>(
          "http://localhost:8080/commandTest/readAll"
        );
        setCommandTests(response.data);
      } catch (error) {
        console.error("erreur de recuperation du patient:error");
      }
    };
    fetchCommand();
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const reponse = await axios.post(
        "http://localhost:8080/echantillon/create",
        echantillons
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
        className="  text-center shadow-md rounded   absolute center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-green-500 text-center "> ajout echantillon</h1>
        <br />
        <label>
          <input
            className=" text-center shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-15  h-7"
            type="text"
            name="name"
            value={echantillons.name}
            onChange={handleChange}
            placeholder="nom"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className=" text-center shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
            type="text"
            name="state"
            value={echantillons.state}
            onChange={handleChange}
            placeholder="etat"
          />
        </label>
        <br />
        <br />
        <label>
          dprel:
          <input
            className=" text-center shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
            type="date"
            name="dateStart"
            value={echantillons.dateStart}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          dres:
          <input
            className=" text-center shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
            type="date"
            name="dateEnd"
            value={echantillons.dateEnd}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className=" text bg-center shadow appearance-none border rounded  leading-tight focus:outline-none focus:shadow-outline  h-7"
            type="modeConservation"
            name="modeConservation"
            value={echantillons.modeConservation}
            onChange={handleChange}
            placeholder="modeconservation"
          />
        </label>
        <br />
        <br />
        <label className="text-black m-10">
          test:
          <select
            className=" text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            name="tests.idTest"
            id="tests.idTest"
            onChange={handleChange}
            value={echantillons.tests.idTest}
          >
            {tests.map((tests) => (
              <option key={tests.idTest} value={tests.idTest}>
                {tests.name}
              </option>
            ))}
          </select>
          <br />
          <br />
        </label>
        <label className="text-black m-10">
          commandTest:
          <select
            className=" text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            name="commandTests.idCommandTest"
            id="commandTests.idCommandTest"
            onChange={handleChange}
            value={echantillons.commandTests.idCommandTest}
          >
            {commandTests.map((commandTests) => (
              <option
                key={commandTests.idCommandTest}
                value={commandTests.idCommandTest}
              >
                {commandTests.description}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <label>
          personnel:
          <select
            className=" text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            name="personalStaff.idPersonalStaff"
            id="personalStaff.idPersonalStaff"
            onChange={handleChange}
            value={echantillons.personalStaff.idPersonalStaff}
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
          onClick={resetForm}
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

export default AjoutEchantillon;
