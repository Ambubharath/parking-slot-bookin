import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';


function Login() {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      storedUser.username === user.username &&
      storedUser.password === user.password
    ) {
      navigate('/main');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don’t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;
