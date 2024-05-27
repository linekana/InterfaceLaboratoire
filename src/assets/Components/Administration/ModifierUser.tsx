import React, { useEffect, useState } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogTitle }  from "@material-ui/core";
interface EditPersonnelFormData {
  idPersonalStaff: number;
  name: string;
  surname: string;
  username: string;
  address: string;
  email: string;
  tel: string;
}

const EditPersonnelForm: React.FC<EditPersonnelFormData & { onClose: () => void }> = ({
  idPersonalStaff,
  name,
  surname,
  username,
  address,
  email,
  tel,
  onClose,
}) => {
  const [formData, setFormData] = useState<EditPersonnelFormData>({
    idPersonalStaff,
    name,
    surname,
    username,
    address,
    email,
    tel,
  });
  
  useEffect(() => {
    if (idPersonalStaff) {
      // Récupérer les informations du personnel en utilisant l'ID
      fetch(`/api/personnel/${idPersonalStaff}`)
        .then((response) => response.json())
        .then((personnelData) => {
          if (personnelData) {
            setFormData(personnelData);
          }
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des informations du personnel :', error);
        });
    }
  }, [idPersonalStaff]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    // Update personnel data using the updated formData
    // ... (Implement update logic)

    onClose(); // Close the modal
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Modifier le personnel</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            label="Nom"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="surname"
            label="Prénom"
            value={formData.surname}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="username"
            label="Nom d'utilisateur"
            value={formData.username}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="address"
            label="Adresse"
            value={formData.address}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
         
          <TextField
            id="tel"
            label="Téléphone"
            value={formData.tel}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Enregistrer
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPersonnelForm;