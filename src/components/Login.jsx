import React, { useState } from 'react';
import { getUsers } from './Json.jsx'; 
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

   
    const users = getUsers();

    
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
     
      console.log('Başarılı giriş:', user.email);
      window.location.href = "/data";
    } else {
     
      setError('Hatalı e-posta veya şifre');
    }
  };

  return (
    <div className="login-container">
      <h1 className='n'>Giriş Yap</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Giriş Yap</button>
        <Link to="/forgetpassword"><button type="submit">Şifremi unuttum</button></Link>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;