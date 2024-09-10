import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register-page">
      <h1>Registrar</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
