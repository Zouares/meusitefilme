import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
