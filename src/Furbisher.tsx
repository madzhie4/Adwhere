//Listing of dependencies and declaring
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import menuIcon from './icons/menu.png';
import d_arrowIcon from './icons/down-arrow.png';
import Header from './components/Header';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaFolderOpen, FaDownload, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import './components/Navbar';


const MainForm: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  
    const hrStyles = {
        border: 'none',
        borderTop: '1px solid #ccc',
        margin: '20px 0',
    };

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="furbisher-app">
      {/* <Header menuOpen={menuOpen} toggleMenu={toggleMenu} /> */}
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
      <main>
        <div className="application-title">
            <h1><em className="title-vehicle">Vehicle Furbisher</em> Application Form</h1>
        </div>
        <div className="form-container">
          <form>
            <div className="proof-existance">
                <span>Proof of company existance</span>
            </div>

            <div className="file-upload-wrapper">
              <label htmlFor="fileUpload" className="file-upload-label">
                Upload file
              </label>
              <input type="file" id="fileUpload" name="fileUpload" className="file-upload-input" />
            </div>

            <div className="button-container">
              <button type="button" className="save-button">Save</button>
              <button type="submit" className="apply-button">Apply</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default MainForm;
