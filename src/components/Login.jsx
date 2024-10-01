import React, { useContext, useEffect } from 'react';
import './Login.css';
import videoBg from '../assets/StargazerVideo-002390_1.mp4';
import { VideoContext } from '../VideoContext'; // Importando o VideoContext

const Login = () => {
  const { videoRef, saveCurrentTime, restoreCurrentTime } = useContext(VideoContext);

  useEffect(() => {
    restoreCurrentTime(); // Restaura o tempo atual quando a página é carregada

    return () => {
      saveCurrentTime(); // Salva o tempo atual quando a página é desmontada
    };
  }, [restoreCurrentTime, saveCurrentTime]);

  return (
    <div className="login-container">
      <video ref={videoRef} className="video-bg" autoPlay loop muted disablePictureInPicture>
        <source src={videoBg} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className="login-box">
        <h1>Entrar</h1>
        <form>
          <div className="form-group">
            <input type="text" id="email" name="email" placeholder="Email ou número de celular" required />
          </div>
          <div className="form-group">
            <input type="password" id="password" name="password" placeholder="Senha" required />
          </div>
          <button type="submit" className="login-button">Entrar</button>
          <div className="login-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembre-se de mim</label>
            </div>
            <a href="/forgot-password" className="forgot-password">Esqueceu a senha?</a>
          </div>
        </form>
        <div className="signup">
          <span>Novo por aqui?</span> <a href="/register">Assine agora.</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
