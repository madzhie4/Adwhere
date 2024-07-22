import React, { useState } from 'react';
import './index.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaFolderOpen, FaDownload, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import './components/Navbar';
import ContactUs from './components/ContactUs';

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
            linkHref: '/joinus',
            className: 'client'
        },
        {
            title: 'Vehicle owner',
            description: 'This is a paragraph text block describing what we do exactly for vehicle owners ...',
            linkText: 'become a vehicle owner',
            linkHref: '/vehicleowner',
            className: 'vehicle-owner'
        },
        {
            title: 'Driver',
            description: 'This is a paragraph text block describing what we do exactly for drivers ...',
            linkText: 'become a driver',
            linkHref: '/driverapplicationform',
            className: 'driver'
        },
        {
            title: 'Vehicle furbisher',
            description: 'This is a paragraph text block describing what we do exactly for vehicle furbishers ...',
            linkText: 'become a vehicle furbisher',
            linkHref: '/vehiclefurbishera1',
            className: 'vehicle-furbisher'
        }
    ];

    const filteredSections = sections.filter(section =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="home-page">
            <div className="title-and-search">
                <h1 className="main-title">Adwhere</h1>
            </div>

            <div className="navbar justify-between items-center mb-8">
                <Link to='#' className='menu-bars'>
                    {sidebar ? (
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                    ) : (
                    <FaIcons.FaBars onClick={showSidebar} />
                    )}
                </Link>
                <input type="text" placeholder="Search" className="search-bar" />
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                        </li>
                    );
                    })}
                </ul>
            </nav>

            {/* <div className="dropdown">
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
            </div> */}
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
                    <source src="video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="embed-contact-us">
                <ContactUs />
            </div>
        </div>
    );
};

export default Home;
