import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const userEmail = localStorage.getItem('userEmail');
  const [isSettingsVisible, setSettingsVisible] = useState(false);
  const [username, setUsername] = useState(userEmail); 
  const [backgroundColor, setBackgroundColor] = useState('#e50914'); 

  const handleSettingsToggle = () => {
    setSettingsVisible(!isSettingsVisible);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSave = () => {
    localStorage.setItem('userEmail', username); 
  };

  const handleRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div className="user-profile-container">
      <aside className="sidebar">
        <div className="user-info">
          <div className="user-avatar" style={{ backgroundColor }}>
            {username.charAt(0).toUpperCase()}
          </div>
          <h2 className="username-display">{username}</h2>
          <button className="logout-button" onClick={() => {
            localStorage.removeItem('userEmail');
            window.location.href = '/login';
          }}>
            Sair
          </button>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li onClick={handleSettingsToggle}>{isSettingsVisible ? 'Voltar' : 'Configurações'}</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        {isSettingsVisible ? (
          <section className="settings-section">
            <h3>Trocar Nome de Usuário</h3>
            <div className="settings-input-container">
              <input
                type="text"
                className="username-input"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Novo Nome de Usuário"
              />
              <button className="save-button" onClick={handleSave}>Salvar</button>
            </div>
            <button className="color-button" onClick={handleRandomColor}>Trocar Cor do Fundo</button>
          </section>
        ) : (
          <>
            <section className="watch-time-section">
              <h3>Resumo de Tempo Assistido Semanal</h3>
              <div className="chart">
                <p>22 horas 37 minutos</p>
                {/* Aqui você pode adicionar um gráfico real */}
              </div>
            </section>

            <section className="user-movies-section">
              <h3>Seus Filmes/Séries Mais Assistidos Esta Semana</h3>
              <div className="user-movies">
                <div className="movie-item">
                  <img src="https://via.placeholder.com/150" alt="Movie Poster" />
                  <p>Título do Filme/Série 1</p>
                </div>
                <div className="movie-item">
                  <img src="https://via.placeholder.com/150" alt="Movie Poster" />
                  <p>Título do Filme/Série 2</p>
                </div>
                <div className="movie-item">
                  <img src="https://via.placeholder.com/150" alt="Movie Poster" />
                  <p>Título do Filme/Série 3</p>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default UserProfile;
