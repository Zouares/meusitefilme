
import React, { useContext, useEffect, useState } from 'react';
import './Register.css';
import videoBg from '../assets/StargazerVideo-002390_1.mp4';
import { VideoContext } from '../VideoContext'; 

const Register = () => {
  const { videoRef, saveCurrentTime, restoreCurrentTime } = useContext(VideoContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    restoreCurrentTime(); 

    return () => {
      saveCurrentTime(); 
    };
  }, [restoreCurrentTime, saveCurrentTime]);

  const handleRegister = async (event) => {
    event.preventDefault();
  
    console.log('Email:', email);
    console.log('Password:', password); 
  
    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const message = await response.text();
        alert(message);
      } else {
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao registrar. Tente novamente mais tarde.');
    }
  };
  

  return (
    <div className="register-container">
      <video ref={videoRef} className="video-bg" autoPlay loop muted disablePictureInPicture>
        <source src={videoBg} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className="register-box">
        <h1>Registrar</h1>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
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
