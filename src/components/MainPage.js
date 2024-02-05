// MainPage.js

import React from 'react';
import './MainPage.css'; // Import your CSS file for styling
import logo from '../images/Main.png'
const MainPage = () => {
  return (
    <div className="main-container">
      <header>
        <h1>Nexus Techy</h1>
        <p>Software Company</p>
      </header>
      <div className="image-container">
        <img src={logo} alt="Technical" />
      </div>
    </div>
  );
};

export default MainPage;
