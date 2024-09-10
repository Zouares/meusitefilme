import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Bem-vindo ao SOARESFLIX</h1>
        <p>Assista aos melhores filmes e séries em um só lugar.</p>
        <div className="home-buttons">
          <a href="/login">
            <button className="home-button">Entrar</button>
          </a>
          <a href="/register">
            <button className="home-button">Registrar</button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Home;
