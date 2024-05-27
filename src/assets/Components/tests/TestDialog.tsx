import  { Button, Dialog, DialogContent , DialogTitle } from '@material-ui/core';
import { useState } from 'react';
import AjoutTest from './AjoutTest';
// import {FaVial} from react-icons;

// const BoiteAjout:React.FC=()=>{
    const AddTestForm: React.FC = () => {
        // Champs de saisie du formulaire, logique de soumission, etc.
        return (
          <DialogContent>
            <AjoutTest/>
          </DialogContent>
        );
      };
      const TestDialog: React.FC = () => {
        const [open, setOpen] = useState(false);
      
        const handleClickOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };
        return(
            <>
            <Button  variant="contained" onClick={handleClickOpen} className='text-gray-500 ' color='primary'>+Ajouter</Button>
      <Dialog open={open} onClose={handleClose} className='h-auto w-auto'>
        <DialogTitle className='border rounded-3px bg-gray-200 text-center'>Ajouter unt Test </DialogTitle>
        <AddTestForm />
      </Dialog>
            </>
        )
}
// }
export default TestDialog;