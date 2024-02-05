// import React from 'react';
// import './NavBar.css'; // Import the CSS file

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="nav-list">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About Us</a></li>
//         <li><a href="#products">Products</a></li>
//         <li><a href="#contact">Contact Us</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;



// NavBar.js

import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
        <li><a href="#products" onClick={toggleMenu}>Products</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
