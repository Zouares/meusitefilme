// Login.jsx
import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import videoBg from '../assets/StargazerVideo-002390_1.mp4';
import { VideoContext } from '../VideoContext'; 

const Login = () => {
  const { videoRef, saveCurrentTime, restoreCurrentTime } = useContext(VideoContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    restoreCurrentTime(); 

    return () => {
      saveCurrentTime(); 
    };
  }, [restoreCurrentTime, saveCurrentTime]);

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const message = await response.text();
        alert(message);
        localStorage.setItem('userEmail', email); 
        window.location.href = '/user-profile'; 
      } else {
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao fazer login. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="login-container">
      <video ref={videoRef} className="video-bg" autoPlay loop muted disablePictureInPicture>
        <source src={videoBg} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className="login-box">
        <h1>Entrar</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email ou número de celular"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
