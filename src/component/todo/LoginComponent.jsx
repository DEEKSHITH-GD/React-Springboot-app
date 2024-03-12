import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

const LoginComponent = () => {
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('password');
  const [hasLoginFailed, setHasLoginFailed] = useState(false);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    if (username === 'user' && password === '123') {
      console.log('Successful');
      setShowLoginSuccess(true);
      setHasLoginFailed(false);
      AuthenticationService.registerSuccessfulLogin(username, password);
      navigate(`/welcome/${username}`);
    } else {
      console.log('Failed');
      setHasLoginFailed(true);
      setShowLoginSuccess(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="container">
        {hasLoginFailed && (
          <div className="alert alert-warning">Invalid Credentials</div>
        )}
        {showLoginSuccess && <div>Login Successful</div>}
        User Name :{' '}
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        Password :{' '}
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button className="btn btn-success" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
