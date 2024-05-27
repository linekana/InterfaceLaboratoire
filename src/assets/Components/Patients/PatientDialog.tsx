import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { useState } from "react";
import AjoutPatient from "./AjoutPatient";
import { BsBagPlus } from "react-icons/bs";

// const BoiteAjout:React.FC=()=>{
const AddUserForm: React.FC = () => {
  // Champs de saisie du formulaire, logique de soumission, etc.
  return (
    <DialogContent>
      <AjoutPatient />
    </DialogContent>
  );
};
const PatientDialog: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        className="bg-blue-400 hover:bg-blue-700 m-2 text-blue-600"
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
      >
        <BsBagPlus className="bg-blue-400 hover:bg-blue-700 m-2" /> patient
      </Button>
      <Dialog open={open} onClose={handleClose} className="h-auto w-auto">
        <DialogTitle className="border rounded-3px bg-gray-200 text-center">
          Ajouter  patient 
        </DialogTitle>
        <AddUserForm />
      </Dialog>
    </>
  );
};
// }
export default PatientDialog;
