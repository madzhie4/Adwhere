// Login.js

import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import './index.css';

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
    <div className="login-container">
        <h1>Login</h1>

      {!otpSent ? (
        <>
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
        </>
      ) : (
        <>
          <div className="input-container">
            <label>Enter OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
            />
          </div>

          <button className="verify-otp-button" onClick={handleVerifyOtp} disabled={verificationInProgress}>
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
