import React from 'react';
import './UserProfile.css';
 

const UserProfile = () => {
  const userEmail = localStorage.getItem('userEmail'); 

  return (
    <div className="user-profile-container">
      <aside className="sidebar">
        <div className="user-info">
          <img
            src="https://via.placeholder.com/50" 
            alt="User Avatar"
            className="user-avatar"
          />
          <h2>{userEmail}</h2>
          <button className="logout-button" onClick={() => {
            localStorage.removeItem('userEmail');
            window.location.href = '/login'; 
          }}>
            Sair
          </button>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li>Manage profile</li>
            <li>Membership & Billing</li>
            <li>Plan Details</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <section className="watch-time-section">
          <h3>Weekly Watch Time Breakdown</h3>
          {/* Gráfico de horas assistidas */}
          <div className="chart">
            <p>22 hours 37 minutes</p>
            {/* Aqui você pode adicionar um gráfico real */}
          </div>
        </section>

        <section className="user-movies-section">
          <h3>Your Most Watched This Week</h3>
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
      </main>
    </div>
  );
};

export default UserProfile;
