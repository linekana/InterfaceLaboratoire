import React from "react";
import AjoutEchantillon from "./AjoutEchantillon";

const echantillon: React.FC = () => {
  return (
    <>
      <div>
        <h1>vous etes dans l'interface Echantillon</h1>
        <div className="px-4">
          <AjoutEchantillon />
        </div>
        <div className="w-1/2">
          {/* <ListePatients /> */}
        </div>
      </div>
    </>
  );
};
export default echantillon;
