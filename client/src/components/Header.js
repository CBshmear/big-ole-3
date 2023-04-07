// EXAMPLE COMPONENT FOR FILESTRUCTURE SAKE.
//COULD BE NAVBAR.JS OR HEADER/FOOTER.JS

import React from "react";
import { GiCampfire } from "react-icons/gi";
import "../components/styles/Header.css";

function Header() {
  return (
    <div className="header">
      <header>
        <GiCampfire />
        <h1>Happy Camper</h1>
        <h4>Find Your Happy Place</h4>
      </header>
    </div>
  );
}

export default Header;
