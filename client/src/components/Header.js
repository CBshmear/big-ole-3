// EXAMPLE COMPONENT FOR FILESTRUCTURE SAKE.
//COULD BE NAVBAR.JS OR HEADER/FOOTER.JS

import React from "react";
import { TbTent } from "react-icons/tb";
import "../components/styles/Header.css";

const styles = {
  h4: {
    margin: 10,
  },
};

function Header() {
  return (
    <div className="header">
      <header>
        <h1>
          Happy
          <TbTent />
          Camper
        </h1>

        <h4 style={styles.h4}>Find Your Happy Place</h4>
      </header>
    </div>
  );
}

export default Header;
