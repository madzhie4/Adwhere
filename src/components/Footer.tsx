import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <nav>
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Services</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact us</a>
            </nav>
            <div className="social-icons">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaYoutube />
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 Website. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
