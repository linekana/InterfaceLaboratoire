import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Accueil from "./assets/Components/Accueil.tsx";
import Inscription from "./assets/Components/Inscription.tsx";
import Connexion from "./assets/Components/Connexion.tsx";
import Contact from "./assets/Components/Contact.tsx";
import Documentaion from "./assets/Components/Documentation.tsx";
import Apropos from "./assets/Components/Apropos.tsx";
import Accueil from "./assets/Components/Accueil.tsx";
import Dashboard from "./assets/Components/Dashboard.tsx";
import ListePatients from "./assets/Components/Patients/ListePatients.tsx";
import Mer from "./assets/Components/tests/AjoutTypeTest.tsx";
import He from "./He.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "inscription",
    element: <Inscription />,
  },
  {
    path: "connexion",
    element: <Connexion />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "documentation",
    element: <Documentaion />,
  },
  {
    path: "apropos",
    element: <Apropos />,
  },

  {
    path: "listepatient",
    element: <ListePatients />,
  },
  {
    path: "mer",
    element: <Mer/>,
  },
  {
    path: "he",
    element: <He/>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
