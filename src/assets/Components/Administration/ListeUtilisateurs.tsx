import axios from "axios";
import React, { useEffect, useState } from "react";
import DialogUser from "./DialodUser";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
interface personalStaff {
  idPersonalStaff: number;
  name: string;
  surname: string;
  username: string;
  address: string;
  email: string;
  roleUser: {
    idRoleUser:number;
    name: string;
  };
  tel: string;
}

const ListeUtilisateurs: React.FC = () => {
  const [personalStaff, setPersonalStaff] = useState<personalStaff[]>([]);
  const [selectedPersonnel, setSelectedPersonnel] =
    useState<personalStaff | null>(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleEditClick = (personnel: personalStaff) => {
    setSelectedPersonnel(personnel);
    setOpenEditDialog(true);
  };
  const handleCloseModal = () => {
    setSelectedPersonnel(null);
    setOpenEditDialog(false);
  };
  const handleSaveEdit = () => {
    if (selectedPersonnel) {
      axios
        .put(
          `http://localhost:8080/personalStaff/update/${selectedPersonnel.idPersonalStaff}`,
          selectedPersonnel
        )
        .then(() => {
          const updatedPersonnels = personalStaff.map((p) =>
            p.idPersonalStaff === selectedPersonnel.idPersonalStaff
              ? selectedPersonnel
              : p
          );
          setPersonalStaff(updatedPersonnels);
          handleCloseModal();
          fetchLaborantins();
        })
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    fetchLaborantins();
  }, []);
  const fetchLaborantins = async () => {
    try {
      const response = await axios.get<personalStaff[]>(
        "http://localhost:8080/personalStaff/readAll"
      );
      setPersonalStaff(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteUser = async (id: number) => {
    try {
      const Res = await axios.delete(
        `http://localhost:8080/personalStaff/deleteById/${id}`
      );
      fetchLaborantins();
      console.log(Res);
    } catch (error) {
      // Gérer l'erreur réseau ou autre
      console.error("Échec de la suppression de lutilisateur2:", error);
    }
  };

  return (
    <>
      <div>
        <span className="m-10 text-xl p-3 rounded-br-[30px] rounded-tl-[20px] bg-blue-100">
          LISTE DU PERSONNEL
        </span>
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
                nom utilisateur
              </th>
              <th className="border-2 bg-green-100 border-gray-400  text-center">
                Adresse
              </th>
              <th className="border-2 bg-green-100 border-gray-400  text-center">
                email
              </th>
              <th className="border-2 bg-green-100 border-gray-400  text-center">
                Tel
              </th>
              <th className="border-2 bg-green-100 border-gray-400  text-center">
                fonction
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
            {personalStaff.map((personalStaff) => (
              <tr key={personalStaff.idPersonalStaff}>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {personalStaff.idPersonalStaff}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {personalStaff.name}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {personalStaff.surname}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {personalStaff.username}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {personalStaff.address}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {personalStaff.email}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {personalStaff.tel}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {personalStaff.roleUser.name}
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  <button
                    className="text-red-500"
                    onClick={() =>
                      handleDeleteUser(personalStaff.idPersonalStaff)
                    }
                  >
                    <MdDelete />
                  </button>
                </td>
                <td className="border-2 border-gray-400 bg-gray-100 text-center">
                  {" "}
                  <button
                    className="text-blue-500"
                    onClick={() => handleEditClick(personalStaff)}
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Dialog open={openEditDialog} onClose={handleCloseModal}>
          <DialogTitle>Modifier le personnel</DialogTitle>
          <DialogContent>
            {selectedPersonnel && (
              <div>
                <TextField
                  label="Nom"
                  value={selectedPersonnel.name}
                  onChange={(event) =>
                    setSelectedPersonnel({
                      ...selectedPersonnel,
                      name: event.target.value,
                    })
                  }
                />
                <TextField
                  label="Prénom"
                  value={selectedPersonnel.surname}
                  onChange={(event) =>
                    setSelectedPersonnel({
                      ...selectedPersonnel,
                      surname: event.target.value,
                    })
                  }
                />
                <TextField
                  label="Email"
                  value={selectedPersonnel.email}
                  onChange={(event) =>
                    setSelectedPersonnel({
                      ...selectedPersonnel,
                      email: event.target.value,
                    })
                  }
                />
                <TextField
                  label="tel"
                  value={selectedPersonnel.tel}
                  onChange={(event) =>
                    setSelectedPersonnel({
                      ...selectedPersonnel,
                      tel: event.target.value,
                    })
                  }
                />
                <TextField
                  label="address"
                  value={selectedPersonnel.address}
                  onChange={(event) =>
                    setSelectedPersonnel({
                      ...selectedPersonnel,
                      address: event.target.value,
                    })
                  }
                />
          
                {/* Modifier d'autres champs si nécessaire */}
              </div>
            )}
           
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Annuler</Button>
            <Button onClick={handleSaveEdit}>Enregistrer</Button>
          </DialogActions>
        </Dialog>
        <DialogUser />
      </div>
    </>
  );
};
export default ListeUtilisateurs;
