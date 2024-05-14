import React from "react";
import AjoutPatient from "./AjoutPatient";
import ListePatients from "./ListePatients";

const Patient: React.FC = () => {
  return (
    <>
      <div >
        <h1>vous etes dans l'interface patient</h1>
        <div className="px-4">
          <AjoutPatient />
        </div>
        <div className="w-1/2">
          <ListePatients />
        </div>
        
      </div>
    </>
  );
};
export default Patient;
