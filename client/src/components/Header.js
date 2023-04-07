// EXAMPLE COMPONENT FOR FILESTRUCTURE SAKE.
//COULD BE NAVBAR.JS OR HEADER/FOOTER.JS

import React from 'react';

import '../components/styles/Header.css';


function Header() {
    return(

        <div className="header">
            <header>
                <h1>Happy Camper</h1>
                <h3>Find Your Happy Place</h3>
            </header>
        </div>
    );

};

export default Header;