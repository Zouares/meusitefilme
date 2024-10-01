import React, { useContext, useEffect } from 'react';
import './Register.css';
import videoBg from '../assets/StargazerVideo-002390_1.mp4';
import { VideoContext } from '../VideoContext'; // Importando o VideoContext

const Register = () => {
  const { videoRef, saveCurrentTime, restoreCurrentTime } = useContext(VideoContext);

  useEffect(() => {
    restoreCurrentTime(); // Restaura o tempo atual quando a página é carregada

    return () => {
      saveCurrentTime(); // Salva o tempo atual quando a página é desmontada
    };
  }, [restoreCurrentTime, saveCurrentTime]);

  return (
    <div className="register-container">
      <video ref={videoRef} className="video-bg" autoPlay loop muted disablePictureInPicture>
        <source src={videoBg} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className="register-box">
        <h1>Registrar</h1>
        <form>
          <div className="form-group">
            <input type="text" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" id="password" name="password" placeholder="Senha" required />
          </div>
          <button type="submit" className="register-button">Registrar</button>
        </form>
        <div className="login-link">
          <span>Já tem uma conta?</span> <a href="/login">Entre aqui.</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
