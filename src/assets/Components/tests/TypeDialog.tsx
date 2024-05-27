import  { Button, Dialog, DialogContent , DialogTitle } from '@material-ui/core';
import { useState } from 'react';
import AjoutTypeTest from './AjoutTypeTest';
// import {FaVial} from react-icons;

// const BoiteAjout:React.FC=()=>{
    const AddUserForm: React.FC = () => {
        // Champs de saisie du formulaire, logique de soumission, etc.
        return (
          <DialogContent>
            <AjoutTypeTest/>
          </DialogContent>
        );
      };
      const TypeDialog: React.FC = () => {
        const [open, setOpen] = useState(false);
      
        const handleClickOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };
        return(
            <>
            <Button  className='text-blue-500' variant="contained" onClick={handleClickOpen}>+Ajouter</Button>
      <Dialog open={open} onClose={handleClose} className='h-auto w-auto'>
        <DialogTitle className='border rounded-3px bg-gray-200 text-center'>Ajouter  un typeTest </DialogTitle>
        <AddUserForm />
      </Dialog>
            </>
        )
}
// }
export default TypeDialog;