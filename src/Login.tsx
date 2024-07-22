// Login.js

import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import './index.css';
import { useNavigate  } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // State to track if OTP is sent
  const [otp, setOtp] = useState(''); // State to store OTP
  const [verificationInProgress, setVerificationInProgress] = useState(false); // State to track verification process

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate ();

  const handleSignIn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Simulate API call to request OTP (replace with actual backend API call)
    try {
      // Replace with actual backend endpoint
      const response = await fetch('https://your-backend-api.com/request-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send email or phone number to backend
      });
      
      if (response.ok) {
        setOtpSent(true); // OTP request successful
      } else {
        console.error('Failed to request OTP:', response.statusText);
      }
    } catch (error) {
      console.error('Error requesting OTP:', error);
    }

    navigate('/homepage');
  };

  const handleVerifyOtp = async () => {
    // Simulate API call to verify OTP (replace with actual backend API call)
    try {
      // Replace with actual backend endpoint
      const response = await fetch('https://your-backend-api.com/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp }), // Send OTP to backend for verification
      });

      if (response.ok) {
        const data = await response.json();
        console.log('OTP verified successfully:', data);
        // Handle successful login or redirection to authenticated page
      } else {
        console.error('Failed to verify OTP:', response.statusText);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Login</h1>
        {!otpSent ? (
          <>
            <div className="form-group">
              <label>Email</label>
              <div className="input-box">
                <FaEnvelope className="icon-envelope" />
                <input
                  className="input-field"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="input-box">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="input-field"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {showPassword ? (
                  <FaEyeSlash className="icon-toggle-password" onClick={togglePasswordVisibility} />
                ) : (
                  <FaEye className="icon-toggle-password" onClick={togglePasswordVisibility} />
                )}
              </div>
            </div>
            <button className="btn-sign-in" onClick={handleSignIn}>
              Login
            </button>
            <p className="create-account">
                Don't have an account? <a href="/signup" className="create-account-link">Create Account</a><br></br>
                <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            </p>
          </>
        ) : (
          <>
            <div className="form-group">
              <label>Enter OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
              />
            </div>
            <button className="btn-verify-otp" onClick={handleVerifyOtp} disabled={verificationInProgress}>
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>

  );
};

export default Login;
