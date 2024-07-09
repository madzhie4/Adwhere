import React from 'react';
import { FaBars, FaInfoCircle } from 'react-icons/fa';
import './Profile.css';

const Profile: React.FC = () => {
    return (
        <div className="profile-page">
            <header className="profile-header">
                <FaBars className="menu-icon" />
                <h1>Profile</h1>
            </header>
            <div className="profile-content">
                <button className="profile-button-one">
                    Client
                    <FaInfoCircle className="info-icon" />
                </button>
                <button className="profile-button-two">
                    Vehicle Owner
                    <FaInfoCircle className="info-icon" />
                </button>
                <button className="profile-button-three">
                    Driver
                    <FaInfoCircle className="info-icon" />
                </button>
                <button className="profile-button-four">
                    Vehicle Refurbisher
                    <FaInfoCircle className="info-icon" />
                </button>
            </div>
        </div>
    );
};

export default Profile;
