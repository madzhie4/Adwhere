import React from 'react';
import './index.css';

function Welcome() {
  const handleCreateAccount = () => {
    alert('Create Account button clicked');
  };

  const handleLogin = () => {
    alert('Log In button clicked');
  };

  return (
    <div className='Welcome-container'>
      <div className='content-wrapper'>
            <h1>
            Welcome to
            <span className="adwhere">
                Ad<span className="highlight" style={{ display: 'inline' }}>w</span>here
            </span>
            </h1>
            <button onClick={handleCreateAccount}>Create account</button>
            <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Welcome;