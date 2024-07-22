import React, { ChangeEvent, FormEvent, useState } from 'react';
import './index.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Footer from './components/Footer';
import { FaFolderOpen, FaDownload, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import './components/Navbar';
// import Header from './components/Header2';

const JoinUs = () => {
  const [showApplications, setShowApplications] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const toggleApplications = () => {
    setShowApplications(!showApplications);
  };

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="joinus-page">
        {/* <Header /> */}
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
        <h1 className="main-title">Client</h1>

        <div className="button-group">
          <button className="purple-button">New application</button>
          <button className="purple-button" onClick={toggleApplications}>Resume application</button>
          <button className="purple-button">View applications</button>
          <button className="gray-button">Accepted Client</button>
        </div>

        {showApplications && (
          <div className="applications-popup">
            <ul>
              <li>01CLA-p0807</li>
              <li>02CLA-p0812</li>
              <li>03CLA-p0818</li>
              <li>04CLA-p0901</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default JoinUs;