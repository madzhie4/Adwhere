// src/components/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src="path-to-your-logo.png" alt="Logo" className="logo" />
                <nav>
                    <a href="#about">About us</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                    <a href="#join">Join us</a>
                    <a href="#journeys">Journeys</a>
                </nav>
            </div>
            <div className="header-right">
                <button className="login-button">Login</button>
                <button className="create-account-button">Create account</button>
            </div>
        </header>
    );
};

export default Header;
