// UserProfile.jsx
import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const userEmail = localStorage.getItem('userEmail'); 

  return (
    <div className="user-profile-container">
      <header className="user-profile-header">
        <h1>Perfil do Usuário</h1>
        <div className="user-info">
          <h2>{userEmail}</h2>
          <button className="logout-button" onClick={() => {
            localStorage.removeItem('userEmail');
            window.location.href = '/login'; 
          }}>
            Sair
          </button>
        </div>
      </header>

      <div className="user-content">
        <h3>Minhas Séries e Filmes</h3>
        <div className="user-movies">
          {/* Aqui você pode adicionar componentes para listar filmes/séries */}
          <div className="movie-item">
            <img src="https://via.placeholder.com/150" alt="Movie Poster" />
            <p>Título do Filme/Série</p>
          </div>
          {/* Adicione mais itens conforme necessário */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
