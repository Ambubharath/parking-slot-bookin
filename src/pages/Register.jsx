import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';


function Register() {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = () => {
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
