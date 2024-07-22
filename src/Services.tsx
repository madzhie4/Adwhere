import React, { useState } from 'react';
import './index.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaFolderOpen, FaDownload, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import './components/Navbar';
import ContactUs from './components/ContactUs';

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

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="our-services-page">
            <h1 className="main-title">Our services</h1>
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
            <div className="embed-contact-us">
                <ContactUs />
            </div>
        </div>
    );
};

export default OurServices;
