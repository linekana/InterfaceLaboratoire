import React, { useState } from "react";
import Test from "./Test";
import Patient from "./Patient";
import { FaHome, FaUserInjured, FaVial,FaMoneyBillWave  } from "react-icons/fa"; // Importez les icônes de Font Awesome
import Home from "./Home";
import Laboratoire from "./Laboratoire";
import Reception from "./Reception";
import Caisse from "./Caisse";
import Administration from "./Administration";

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState("home");

  return (

    <div className="flex">
      
      <div className="border-2  rounded-lg h-screen w-1/10 flex flex-col items-start space-y-2  bg-green-200 p-4">
       <h1 className="text-gray-800">Dashboard</h1>
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
          onClick={() => setSelectedSection("administration")}
          className="flex items-center space-x-2"
        >
          <FaHome />
          <span>Adminstration</span>
        </button>
      </div>
      
      <div className="w-3/4">
        {selectedSection === "patient" && <Patient />}
        {selectedSection === "test" && <Test />}
        {selectedSection === "home" && <Home />}
        {selectedSection === "laboratoire" && <Laboratoire />}
        {selectedSection === "reception" && <Reception/>}
        {selectedSection === "caisse" && <Caisse/>}
        {selectedSection === "administration" && <Administration/>}
      </div>
    </div>
  );
};
export default Dashboard;
