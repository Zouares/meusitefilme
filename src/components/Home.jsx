import React, { useContext, useEffect } from 'react';
import './Home.css';
import videoBg from '../assets/StargazerVideo-002390_1.mp4';
import { VideoContext } from '../VideoContext'; // Importando o VideoContext

const Home = () => {
  const { videoRef, saveCurrentTime, restoreCurrentTime } = useContext(VideoContext);

  useEffect(() => {
    restoreCurrentTime(); 

    return () => {
      saveCurrentTime(); 
    };
  }, [restoreCurrentTime, saveCurrentTime]);

  return (
    <div className="home">
      <video ref={videoRef} className="video-bg" autoPlay loop muted disablePictureInPicture>
        <source src={videoBg} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
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
