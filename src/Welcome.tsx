import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate ();

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='Welcome-container'>
      <div className='content-wrapper'>
            <h1>
            Welcome to
            <span className="adwhere">
                Adwhere
            </span>
            </h1>
            <button onClick={handleCreateAccount}>Create account</button>
            <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Welcome;