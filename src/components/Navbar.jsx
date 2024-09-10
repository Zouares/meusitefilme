import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">SOARESFLIX</h1>
      <div className="nav-buttons">
        <button className="sign-in">Entrar</button>
        <button className="sign-up">Registrar</button>
      </div>
    </div>
  );
}

export default Navbar;
