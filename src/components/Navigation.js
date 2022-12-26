import { React } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

//Composant de la barre de navigation
const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Logo
          color="#FF6060"
          className="logo_Kasa"
          alt="Logo de bien immobilier"
        />
      </div>
      <ul className="list-pages">
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
