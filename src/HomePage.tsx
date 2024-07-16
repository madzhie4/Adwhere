import React, { useState } from 'react';


const Home: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const sections = [
        {
            title: 'Client',
            description: 'This is a paragraph text block describing what we do exactly for clients ...',
            linkText: 'become a client',
            linkHref: '/client',
            className: 'client'
        },
        {
            title: 'Vehicle owner',
            description: 'This is a paragraph text block describing what we do exactly for vehicle owners ...',
            linkText: 'become a vehicle owner',
            linkHref: '/vehicle-owner',
            className: 'vehicle-owner'
        },
        {
            title: 'Driver',
            description: 'This is a paragraph text block describing what we do exactly for drivers ...',
            linkText: 'become a driver',
            linkHref: '/driver',
            className: 'driver'
        },
        {
            title: 'Vehicle furbisher',
            description: 'This is a paragraph text block describing what we do exactly for vehicle furbishers ...',
            linkText: 'become a vehicle furbisher',
            linkHref: '/vehicle-furbisher',
            className: 'vehicle-furbisher'
        }
    ];

    const filteredSections = sections.filter(section =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="home-page">
                <div className="title-and-search">
                    <h1 className="main-title">ADWHERE</h1>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-bar"
                    />
                </div>
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
                <div className="sections">
                    {filteredSections.map((section, index) => (
                        <div className="section" key={index}>
                            <h2 className={`section-title ${section.className}`}>{section.title}</h2>
                            <p className="section-description">
                                {section.description}
                                <a href={section.linkHref}>{section.linkText}</a>
                            </p>
                        </div>
                    ))}
                </div>
                <div className="how-we-work">
                    <h2>How we work</h2>
                    <video controls>
                        <source src="path/to/your/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Home;
