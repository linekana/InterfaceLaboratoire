// import 'tailwindcss/tailwind.css'
import "./Accueil.css";
import backgroundImage from "./pictures/laborantion.jpg"
import { Link } from "react-router-dom";
import React from "react";
// import axios from "axios";
interface Accueil {}
const Accueil: React.FC = () => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    height: "100vh",
    // padding: '20px', // Ajoute une marge interne de 20px
    // margin: '10px'
  };
 
  return (
    <>
          
      <header className="header">
        <nav>
          <ul className="unstyled-list">
            <li className="line">
              <Link to="/" style={{ color: "grey" }}>
                ACCUEIL
              </Link>
            </li>
            <li className="line">
              <Link to="/apropos" style={{ color: "grey" }}>
                APROPOS
              </Link>
            </li>
            <li className="line">
              <Link to="/contact" style={{ color: "grey" }}>
                {" "}
                CONTACT
              </Link>
            </li>
            <li className="line">
              <Link to="/documentation" style={{ color: "grey" }}>
                {" "}
                DOCUMENTATION
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div style={style}></div>

      <p className="pl">LABORATOIRE D'ANALYSE MEDICALE ONLINE</p>
      <footer className="footer">
        <ul className="unstyled-list">
          <li className="footer-line"> <Link to="/connexion" style={{ color: "grey" }}>connexion</Link></li>
        </ul>
      </footer>
      <p className="pi">
        cliquer ici
        <Link to="/inscription" style={{ color: "blue" }}>
          {" "}
          s'inscrire{" "}
        </Link>
        si vous n'etes pas encore inscrit
      </p>
    </>
  );
};

export default Accueil;
