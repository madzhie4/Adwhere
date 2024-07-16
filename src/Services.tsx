import React, { useState } from 'react';
import './OurServices.css';

const servicesData = [
    {
        title: 'Client',
        description: 'This is a paragraph text block describing what we do exactly for clients ...',
        videoSrc: 'path/to/client/video.mp4',
        className: 'client'
    },
    {
        title: 'Vehicle owner',
        description: 'This is a paragraph text block describing what we do exactly for vehicle owners ...',
        videoSrc: 'path/to/vehicle-owner/video.mp4',
        className: 'vehicle-owner'
    },
    {
        title: 'Driver',
        description: 'This is a paragraph text block describing what we do exactly for drivers ...',
        videoSrc: 'path/to/driver/video.mp4',
        className: 'driver'
    },
    {
        title: 'Vehicle furbisher',
        description: 'This is a paragraph text block describing what we do exactly for vehicle furbishers ...',
        videoSrc: 'path/to/vehicle-furbisher/video.mp4',
        className: 'vehicle-furbisher'
    },
];

const OurServices: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredServices = servicesData.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>

            <div className="our-services-page">
                <h1 className="main-title">Our services</h1>
                <div className="dropdown">
                    <button className="dropbtn" onClick={toggleMenu}>
                        Menu
                    </button>
                    {menuOpen && (
                        <div className="dropdown-content">
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                            <a href="#">Option 3</a>
                        </div>
                    )}
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
                <div className="services-sections">
                    {filteredServices.map((service, index) => (
                        <div className="section" key={index}>
                            <h2 className={`section-title ${service.className}`}>{service.title}</h2>
                            <p className="section-description">
                                {service.description}
                                <button className="apply-button">Apply</button>
                            </p>
                            <div className="video-container">
                                <video controls>
                                    <source src={service.videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;
