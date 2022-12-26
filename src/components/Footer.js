import React from "react";
import Logo from "./Logo";

//Composant footer
const Footer = () => {
  return (
    <footer>
      <div>
        <Logo color="#fff" alt="Logo de bien immobilier" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
