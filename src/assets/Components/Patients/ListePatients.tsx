import axios from "axios";
import React, { useEffect, useState } from "react";
import PatientDialog from "./PatientDialog";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
interface Patient {
  idPatient: number;
  name: string;
  surname: string;
  address: string;
  medicalHist: string;
  age: number;
  sex: string;
  tel: string;
  personalStaff: {
    name: string;
    surname: string;
  };
}

const ListePatients: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get<Patient[]>(
        "http://localhost:8080/patient/readAll"
      );
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleDeletePatient = async (id: number) => {
    try {
      const Res = await axios.delete(
        `http://localhost:8080/patient/deleteById/${id}`
      );
      fetchPatients();
      console.log(Res);
    } catch (error) {
      // Gérer l'erreur réseau ou autre
      console.error("Échec de la suppression du patient:", error);
    }
  };
  return (
    <div>
      <br />
      <br />
      <span className="m-10 text-xl p-3 rounded-br-[30px] rounded-tl-[20px] bg-blue-100">LISTE DES PATIENTS DU LABORATOIRE</span>
      <br />
      <br />
      
      <table className=" m-2 px-10 table-auto border-collapse border-2 border-gray-500 rounded">
        <thead>
          <tr>
            <th className="border-2 bg-green-100 border-gray-400  text-center">
              ID{" "}
            </th>
            <th className="border-2 bg-green-100 border-gray-400  text-center">
              Nom
            </th>
            <th className="border-2 bg-green-100 border-gray-400  text-center">
              Prenom
            </th>
            <th className="border-2 bg-green-100 border-gray-400  text-center">
              Adresse
            </th>
            <th className="border-2 bg-green-100 border-gray-400  text-center">
              Age
            </th>
            <th className="border-2 bg-green-100 border-gray-400  text-center">
              Tel
            </th>
            <th className="border-2 bg-green-100 border-gray-400  text-center">
              Sexe
            </th>
            <th className="border-2 bg-green-100 border-gray-400  text-center">
              Histmedical
            </th>
            <th className="border-2 bg-green-100 border-gray-400  text-center">
              personnelMedical
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
          {patients.map((patients) => (
            <tr key={patients.idPatient}>
              <td className="border-2 border-gray-400 bg-gray-100 text-center">
                {patients.idPatient}
              </td>
              <td className="border-2 border-gray-400 bg-gray-100 text-center">
                {patients.name}
              </td>
              <td className="border-2 border-gray-400 bg-gray-100 text-center">
                {patients.surname}
              </td>
              <td className="border-2 border-gray-400 bg-gray-100 text-center">
                {patients.address}
              </td>
              <td className="border-2 border-gray-400 bg-gray-100 text-center">
                {patients.age}
              </td>
              <td className="border-2 border-gray-400 bg-gray-100 text-center">
                {patients.tel}
              </td>
              <td className="border-2 border-gray-400 bg-gray-100 text-center">
                {patients.sex}
              </td>
              <td className="border-2 border-gray-400 bg-gray-100 text-center">
                {patients.medicalHist}
              </td>
              <td className="border-2 border-gray-400 bg-gray-100 text-center">
                {patients.personalStaff.name} {patients.personalStaff.surname}
              </td>
              <td className="border-2 border-gray-400 bg-gray-100 text-center">
                <button  className="text-red-500" onClick={() => handleDeletePatient(patients.idPatient)}>
                  <MdDelete/>
                </button>
              </td>
              <td className="border-2 border-gray-400 bg-gray-100 text-center">
                <button className="text-blue-500">
                  <FaEdit/>
                  </button>
              </td>
            </tr>

          ))}

        </tbody>
      </table>
      <PatientDialog/>
    </div>
  );
};
export default ListePatients
