  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import './Navbar.css';
  import { FaUserCircle } from 'react-icons/fa'; 

  const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false); 

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
            <Link to="/">
            <li>Início</li>
            </Link>
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
