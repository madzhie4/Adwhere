import React from 'react';
import './Header.css';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-left">
                <FaBars className="menu-icon" />
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                    <a href="#">Join us</a>
                    <a href="#">Journeys</a>
                </nav>
            </div>
            <div className="header-right">
                <button className="sign-out-button">
                    <FaSignOutAlt />
                    Sign out
                </button>
                <span className="profile-button">
                    Viwe Jack
                </span>
            </div>
        </header>
    );
};

export default Header;
