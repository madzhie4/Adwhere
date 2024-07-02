import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Welcome(){

    const handleCreateAccount = () => {
    alert('Create Account button clicked');
    };

    const handleLogin = () => {
    alert('Log In button clicked');
    };

    return(
        <div>
            <h1>Welcome to Adwhere</h1>
            <button onClick={handleCreateAccount}>Create Account</button>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}
export default Welcome;