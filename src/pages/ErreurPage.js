import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

//Page Erreur 404
const ErreurPage = () => {
  return (
    <>
      <section className="error_page">
        <Navigation />

        <div className="error">
          <h1>404</h1>
          <p>Oups! la page que vous demandez n'existe pas</p>
          <NavLink to="/">Retourner sur la page d'acceuil</NavLink>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ErreurPage;
