
import axios from "axios";
import React, { useEffect, useState } from "react";
import TestDialog from "./TestDialog";
interface test {
  idTest: number;
  name: string;
  description: string;
  modeConservation: string;
  price: number;
  typeTest: typeTest;
}
interface typeTest {
  name: string;
}

const ListTest: React.FC = () => {
  const [test, setTests] = useState<test[]>([]);
  useEffect(() => {
    fetchTest();
  }, []);
  const fetchTest = async () => {
    try {
      const response = await axios.get<test[]>(
        "http://localhost:8080/test/readAll"
      );
      setTests(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteUser = async (id: number) => {
    try {
      const Res = await axios.delete(
        `http://localhost:8080/test/deleteById/${id}`
      );
      fetchTest();
      console.log(Res);
    } catch (error) {
      // Gérer l'erreur réseau ou autre
      console.error("Échec du  de suppression du test:", error);
    }
  };

  // Fonction pour modifier un utilisateur
  const handleEditUser = (idTypeTest: number) => {
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const reponse = await axios.post(
          "http://localhost:8080/personalStaff/update",
          idTypeTest
        );
        console.log(reponse);
      } catch (error) {
        console.error;
      }
    };
    // ...
  };

  return (
    <>
      <div>
        <br />
        <span className="border rounded-md bg-slate-200 p-2 m-5 text-white">
          LISTE DES TESTS
        </span>
        <table className=" m-2 px-10 table-auto border-collapse border-2 border-gray-500 rounded">
          <thead>
            <tr>
              <th className="border-2 bg-green-100 border-gray-400  text-center">
                ID
              </th>
              <th className="border-2 bg-green-100 border-gray-400  text-center">
                Nom
              </th>
              <th className="border-2 bg-green-100 border-gray-400  text-center">
                description
              </th>
              <th className="border-2 bg-green-100 border-gray-400  text-center">
                supprimer
              </th>
              <th className="border-2 bg-green-100 border-gray-400  text-center">
                modifier
              </th>
            </tr>
          </thead>
          <tbody>
            {test.map((test) => (
              <tr key={test.idTest}>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {test.idTest}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {test.name}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {test.description}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  <button
                    className="text-blue-500"
                    onClick={() => handleDeleteUser(test.idTest)}
                  >
                    delete
                  </button>
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {" "}
                  <button
                    className="text-blue-500"
                    onClick={() => handleEditUser(test.idTest)}
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <TestDialog />
      </div>
    </>
  );
};
export default ListTest;
