import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa'; 

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    window.location.href = '/'; 
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">SOARESFLIX</Link>
      <div className="navbar-left">
        <ul>
          <Link to="/"><li>Início</li></Link>
          <Link to="/filmes"><li>Filmes</li></Link>
          <Link to="/series"><li>Séries</li></Link>
          <li>Minha Lista</li>
          <li>Favoritos</li>
        </ul>
      </div>
      <div className="profile-icon" onClick={toggleDropdown}>
        <FaUserCircle size={30} color="white" />
      </div>
      {dropdownOpen && (
        <div className="dropdown-menu">
          {isLoggedIn ? (
            <>
              <Link to="/user-profile">
                <div className="dropdown-item">Meu Perfil</div>
              </Link>
              <div className="dropdown-item" onClick={handleLogout}>Sair</div>
            </>
          ) : (
            <>
              <Link to="/login">
                <div className="dropdown-item">Entrar</div>
              </Link>
              <Link to="/register">
                <div className="dropdown-item">Registrar</div>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
