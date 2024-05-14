import axios from "axios";
import React, { useEffect, useState } from "react";
interface Patient {
  idPatient: number;
  name: string;
  surname: string;
  address: string;
  medicalHist: string;
  age: number;
  sex: string;
  tel:string
}
const ListePatients: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get<Patient[]>(
          "http://localhost:8080/patient/readAll"
        );
        setPatients(response.data);
      } catch (error) {
        console.error("erreur de recuperation du patient:error");
      }
    };
    fetchPatients();
  }, []);
  return <>
   <div>
    <h1 className="text-blue-700">LISTE DES PATIENTS</h1>
    <table className=" m-2 px-10 table-auto border-collapse border-2 border-gray-500 rounded">
        <thead>
            <tr> 
                <th className="border-2 bg-green-400 border-gray-400  text-center">ID </th>
                <th className="border-2 bg-green-400 border-gray-400  text-center">Nom</th>
                <th className="border-2 bg-green-400 border-gray-400  text-center">Prenom</th>
                <th className="border-2 bg-green-400 border-gray-400  text-center">Adresse</th>
                <th className="border-2 bg-green-400 border-gray-400  text-center">Age</th>
                <th className="border-2 bg-green-400 border-gray-400  text-center">Tel</th>
                <th className="border-2 bg-green-400 border-gray-400  text-center">Sexe</th>
                <th className="border-2 bg-green-400 border-gray-400  text-center">Histmedical</th>
                <th className="border-2 bg-green-400 border-gray-400  text-center">supprimer</th>
                <th className="border-2 bg-green-400 border-gray-400  text-center">modifier</th>
            </tr>
        </thead>
        <tbody>
            {patients.map((patients)=>(
                <tr key={patients.idPatient}>
                    <td className="border-2 border-gray-400 bg-blue-300 text-center">{patients.idPatient}</td>
                    <td className="border-2 border-gray-400 bg-blue-300 text-center">{patients.name}</td>
                    <td className="border-2 border-gray-400 bg-blue-300 text-center">{patients.surname}</td>
                    <td className="border-2 border-gray-400 bg-blue-300 text-center">{patients.address}</td>
                    <td className="border-2 border-gray-400 bg-blue-300 text-center">{patients.age}</td>
                    <td className="border-2 border-gray-400 bg-blue-300 text-center">{patients.tel}</td>
                    <td className="border-2 border-gray-400 bg-blue-300 text-center">{patients.sex}</td>
                    <td className="border-2 border-gray-400 bg-blue-300 text-center">{patients.medicalHist}</td>
                    <td className="border-2 border-gray-400 bg-blue-300 text-center">supprimer</td>
                    <td className="border-2 border-gray-400 bg-blue-300 text-center">modifier</td>
                     

                </tr>
            ))}
        </tbody>
    </table>
   </div>

  </>;
};
export default ListePatients;
