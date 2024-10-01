import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa'; // Importando um ícone de usuário

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar o dropdown

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
      <div className="profile-icon" onClick={toggleDropdown}>
        <FaUserCircle size={30} color="white" />
      </div>
      {dropdownOpen && (
        <div className="dropdown-menu">
          <Link to="/login">
            <div className="dropdown-item">Entrar</div>
          </Link>
          <Link to="/register">
            <div className="dropdown-item">Registrar</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
