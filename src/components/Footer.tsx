// src/components/Footer.tsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src="path-to-your-logo.png" alt="Logo" className="logo" />
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About us</a>
                    <a href="#services">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact us</a>
                </nav>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 <span>Website</span>. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#terms">Terms & Conditions</a>
                    <span>|</span>
                    <a href="#privacy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
