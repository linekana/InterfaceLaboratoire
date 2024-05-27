import axios from "axios";
import React, { useEffect, useState } from "react";
import TypeDialog from "./TypeDialog";
interface typeTest{
  idTypeTest: number;
  name: string;
  description: string;
}

const ListTypeTest: React.FC = () => {
  const [typeTest, setTypetests] = useState<typeTest[]>([]);
  useEffect(() => {
    fetchType();
  }, []);
  const fetchType = async () => {
      try {
        const response = await axios.get<typeTest[]>(
          "http://localhost:8080/typeTest/readAll"
        );
        setTypetests(response.data);

    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteUser = async (id: number) => {
    try {
      const Res = await axios.delete(
        `http://localhost:8080/typeTest/deleteById/${id}`
      );
      fetchType();
      console.log(Res);
    } catch (error) {
      // Gérer l'erreur réseau ou autre
      console.error("Échec du  de suppression du typetest:", error);
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
            {typeTest.map((typeTest) => (
              <tr key={typeTest.idTypeTest}>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {typeTest.idTypeTest}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {typeTest.name}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {typeTest.description}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  
                  <button  className="text-blue-500"
                    onClick={() =>
                      handleDeleteUser(typeTest.idTypeTest)
                    }
                  >
                     delete
                  </button>
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {" "}
                  <button className="text-blue-500"
                    onClick={() => handleEditUser(typeTest.idTypeTest)}
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <TypeDialog/>
      </div>
    </>
  );
};
export default ListTypeTest
