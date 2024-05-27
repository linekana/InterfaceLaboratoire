import { useEffect, useState } from "react";
import axios from "axios";
interface Test {
  name: string;
  description: string;
  modeConservation: string;
  price: number;
  typeTest: typeTest;
}
interface typeTest {
  idTypeTest: number;
  name: string;
}

const AjoutTest: React.FC = () => {
  const [typeTest, setTypeTest] = useState<typeTest[]>([]);
  const [isInscrit, setInscrit] = useState(false);
  const [test, setTest] = useState<Test>({
    name: "",
    description: "",
    modeConservation: "",
    price: 0,
    typeTest: {
      idTypeTest: 1,
      name: "",
    },
  });
  const handleReset = () => {
    setInscrit(false);
    setTest({
      name: "",
      description: "",
      modeConservation: "",
      price: 0,
      typeTest: {
        idTypeTest: 0,
        name: "",
      },
    });
  };
  useEffect(() => {
    const fetchType = async () => {
      try {
        const response = await axios.get<typeTest[]>(
          "http://localhost:8080/typeTest/readAll"
        );
        setTypeTest(response.data);
      } catch (error) {
        console.error("erreur de recuperation du typetest:error");
      }
    };
    fetchType();
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "typeTest.idTypeTest") {
      setTest({
        ...test,
        typeTest: {
          ...test.typeTest,
          idTypeTest: parseInt(e.target.value, 10),
        },
      });
    } else {
      setTest({ ...test, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const reponse = await axios.post(
        "http://localhost:8080/test/create",
        test
      );
      console.log(reponse);

      setInscrit(true);
    } catch (error) {
      console.error;
    }
  };
  return (
    <div className="flex">
      <form
        className="text-center shadow-md  border rounded  pt-2 pb-8 mb-4 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-white "> AJout test</h1>
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
            type="text"
            name="name"
            value={test.name}
            onChange={handleChange}
            placeholder="nom"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            type="text"
            name="description"
            value={test.description}
            onChange={handleChange}
            placeholder="description"
          />
        </label>
        <br />
        <br />
        <label className="text-green-200  ">
          prix
          <input
            className="shadow appearance-none border rounded  py-  px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            type="number"
            name="price"
            value={test.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          <input
            className="shadow appearance-none border rounded  py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            type="text"
            name="modeConservation"
            value={test.modeConservation}
            onChange={handleChange}
            placeholder="modeconservation"
          />
        </label>
        <br />
        <br />
        <label className="text-black m-10">
          typeTest:
          <select
            className=" text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-7"
            name="typeTest.idTypeTest"
            id="typeTest.idTypeTest"
            onChange={handleChange}
            value={test.typeTest.idTypeTest}
          >
            {typeTest.map((typeTest) => (
              <option key={typeTest.idTypeTest} value={typeTest.idTypeTest}>
                {typeTest.name}
              </option>
            ))}
          </select>
          <br />
          <br />
        </label>
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-9"
        >
          Soumettre
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={handleReset}
          className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded h-9"
        >
          reinitialiser
        </button>
        <br />
        <br />
        <br />
        {isInscrit && <p>ajout reussi!</p>}
      </form>
    </div>
  );
};

export default AjoutTest;
