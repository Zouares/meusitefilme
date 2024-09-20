import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        SOARESFLIX
      </Link>
      <div className="navbar-left">
        <ul>
          <li>Início</li>
        <Link to="/filmes">
          <li>Filmes</li>
        </Link>
        <Link to="/series">
          <li>Séries</li>
        </Link>
          <li>Minha Lista</li>
          <li>Favoritos</li>
        </ul>
        </div>
      <div className="nav-buttons">
        <Link to="/login">
          <button className="sign-in">Entrar</button>
        </Link>
        <Link to="/register">
          <button className="sign-up">Registrar</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
