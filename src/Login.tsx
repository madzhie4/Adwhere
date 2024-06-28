// Login.js

import React, { useState, ChangeEvent, MouseEvent } from 'react'; // Import ChangeEvent and MouseEvent
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import './index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => { // Define e as ChangeEvent<HTMLInputElement>
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => { // Define e as ChangeEvent<HTMLInputElement>
    setPassword(e.target.value);
  };

  const handleSignIn = (e: MouseEvent<HTMLButtonElement>) => { // Define e as MouseEvent<HTMLButtonElement>
    e.preventDefault(); // Prevent the default form submission if using a form element
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your sign-in logic here
  };

  return (
    <div className="login-container">
      <div className="input-container">
        <label>Email</label>
        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>

      <div className="input-container">
        <label>Password</label>
        <div className="input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {showPassword ? (
            <FaEyeSlash className="password-toggle-icon" onClick={togglePasswordVisibility} />
          ) : (
            <FaEye className="password-toggle-icon" onClick={togglePasswordVisibility} />
          )}
        </div>
      </div>

      <button className="sign-in-button" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
