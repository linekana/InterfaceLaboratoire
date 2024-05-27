import axios from "axios";
import React, { useState } from "react";

interface typeTests {
  name: string;
  description: string;
}

const AjoutTypeTest = () => {
  const [isInscrit, setInscrit] = useState(false);
  const [typeTests, setTypetests] = useState<typeTests>({
    name: "",
    description: "",
  });
  const resetForm = () => {
    setInscrit(false);
    setTypetests({
      name: "",
      description: "",
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypetests({ ...typeTests, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const reponse = await axios.post(
        "http://localhost:8080/typeTest/create",
        typeTests
      );
      console.log(reponse);
      setInscrit(true);
    } catch (error) {
      console.error;
    }
  };
  return (
    <>
      <div className="">
        <form
          className="text-center shadow-md  border rounded  pt-2 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <label>
            <input className=" text-center shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-5 h-7"
              type="text"
              name="name"
              value={typeTests.name}
              onChange={handleChange}
              placeholder="nom"
            />
          </label>
          <br/>
          <br/>

          <label>
          
            <input className=" text-center shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline  h-7"
              type="text"
              name="description"
              placeholder="description"
              value={typeTests.description}
              onChange={handleChange}
            />
          </label>
          <br/>
          <br/>
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
    </>
  );
};
export default AjoutTypeTest;
