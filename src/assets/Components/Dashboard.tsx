import { useState } from "react";
import Test from "./tests/Test";
import Patient from "./Patients/Patient";
import { FaHome, FaUserInjured, FaVial, FaMoneyBillWave } from "react-icons/fa"; // Importez les icônes de Font Awesome
import Home from "./Home";
import Laboratoire from "./Laboratoire";
import "./Dash.css";
import Reception from "./Reception";
import Caisse from "./Caisse";
import Administration from "./Administration/Administration";
import Echantillon from "./Echantillon/Echantillon";
import Commandtest from "./CommadTest/CommandTest";
import Result from "./Resultat/Result";
// import backgroungImage from "./pictures/OIP.jpeg"
const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState("home");
  // const style = {
  //   backgroundImage: `url(${backgroungImage})`,
  //   backgroundSize: 'cover', // Ajoute une marge interne de 20px
  //   backgroundRepeat: 'no-repeat', // Ajoute une marge interne de 20px
  //   margin: '10px'
  // };
  return (
    <div className="contains">
      <div className="flex ">
        <div className="D">
          <div className="    border-2  rounded-lg h-screen w-1/10 flex flex-col items-start space-y-2  p-4bg-cover bg-center background-image: url('./pictures/OIP.jpeg')">
            <h1 className="text-gray-800 underline ">Dashboard</h1>
            <button
              onClick={() => setSelectedSection("home")}
              className="flex items-center space-x-2"
            >
              <FaHome />
              <span>Home</span>
            </button>
            <button
              onClick={() => setSelectedSection("patient")}
              className="flex items-center space-x-2"
            >
              <FaUserInjured />
              <span>Patients</span>
            </button>
            <button
              onClick={() => setSelectedSection("laboratoire")}
              className="flex items-center space-x-2"
            >
              <FaHome />
              <span>Laboratoire</span>
            </button>
            <button
              onClick={() => setSelectedSection("reception")}
              className="flex items-center space-x-2"
            >
              <FaHome />
              <span>reception</span>
            </button>

            <button
              onClick={() => setSelectedSection("caisse")}
              className="flex items-center space-x-2"
            >
              <FaMoneyBillWave />
              <span>Caisse</span>
            </button>
            <button
              onClick={() => setSelectedSection("test")}
              className="flex items-center space-x-2"
            >
              <FaVial />
              <span>Tests</span>
            </button>
            <button
              onClick={() => setSelectedSection("commandTest")}
              className="flex items-center space-x-2"
            >
              <FaVial />
              <span>CommandeDeTest</span>
            </button>
            <button
              onClick={() => setSelectedSection("echantillon")}
              className="flex items-center space-x-2"
            >
              <FaVial />
              <span>Echantillons</span>
            </button>

            <button
              onClick={() => setSelectedSection("resultat")}
              className="flex items-center space-x-2"
            >
              <FaVial />
              <span>resultats</span>
            </button>
            <button
              onClick={() => setSelectedSection("administration")}
              className="flex items-center space-x-2"
            >
              <FaHome />
              <span>Adminstration</span>
            </button>
          </div>
        </div>
        <div className="text-center w-screen relative border rounded m-4 bg-blue-100">
          {selectedSection === "patient" && <Patient />}
          {selectedSection === "test" && <Test />}
          {selectedSection === "home" && <Home />}
          {selectedSection === "laboratoire" && <Laboratoire />}
          {selectedSection === "laboratoire" && <Laboratoire />}
          {selectedSection === "reception" && <Reception />}
          {selectedSection === "caisse" && <Caisse />}
          {selectedSection === "echantillon" && <Echantillon />}
          {selectedSection === "administration" && <Administration />}
          {selectedSection === "commandTest" && <Commandtest />}
          {selectedSection === "resultat" && <Result />}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
