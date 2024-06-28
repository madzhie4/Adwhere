// src/Profile.tsx
import React, { useState } from 'react';
import './Profile.css';
import infoIcon from './icons/info.png';
import menuIcon from './icons/menu.png';

const Profile: React.FC = () => {


    return (
        <div className="profile-container">
            <img src={menuIcon} alt="menu" className="menu-icon" />
            <h2>Profile</h2>
            <div className="profile-option">
                <button className="profile-button">Client</button>
                <img
                    src={infoIcon}
                    alt="info"
                    className="info-icon"
                />
            </div>
            <div className="profile-option">
                <button className="profile-button">Vehicle Owner</button>
                <img
                    src={infoIcon}
                    alt="info"
                    className="info-icon"

                />
            </div>
            <div className="profile-option">
                <button className="profile-button">Driver</button>
                <img
                    src={infoIcon}
                    alt="info"
                    className="info-icon"

                />
            </div>
            <div className="profile-option">
                <button className="profile-button">Vehicle Refurbisher</button>
                <img
                    src={infoIcon}
                    alt="info"
                    className="info-icon"

                />
            </div>
        </div>
    );
};

export default Profile;
