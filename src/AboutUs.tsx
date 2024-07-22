import React, { ChangeEvent, FormEvent, useState } from 'react';
import './index.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaFolderOpen, FaDownload, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import './components/Navbar';
import ContactUs from './components/ContactUs';

const AboutUs = () => {
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

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="about-us">
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
      <h1 className="main-title">About Us</h1>
      <p className="about-text">
        Welcome to Adwhere, your premier destination for innovative solutions and
        exceptional service. Founded in 2024, we are dedicated to delivering top-notch products
        and unparalleled customer support. Our team of experts is passionate about pushing the
        boundaries of what's possible, ensuring that our clients receive the best the industry has to
        offer. Whether you're seeking cutting-edge technology, creative strategies, or reliable
        partnerships, Adwhere is here to help you achieve your goals and exceed your
        expectations.
      </p>
      <div className="embed-contact-us">
        <ContactUs />
      </div>
    </div>
  );
};

export default AboutUs;
