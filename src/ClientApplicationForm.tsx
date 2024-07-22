//Listing of dependencies and declaring
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import infoIcon from './icons/info-circle.png';
import cartIcon from './icons/cart-add.png';
import menuIcon from './icons/menu.png';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import d_arrowIcon from './icons/down-arrow.png';
import Header from './components/Header';
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
      <div className="app">
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
              <h1><em className="title-client">Client</em> Application Form</h1>
          </div>
          <div className="form-container">
            <form>
              <label htmlFor="clientType">Client type</label>
              <select id="clientType" name="clientType">
                <option disabled selected hidden>Choose client type...</option>
                <option disabled>e.g YouTube Channel</option>
                <option value="1">Client type 1</option>
                <option value="2">Client type 2</option>
              </select>

              <label htmlFor="clientWebsite">Client website (Optional)</label>
              <input type="text" id="clientWebsite" name="clientWebsite" placeholder="e.g https://www.apple.com/"/>

              <fieldset>
                <legend>Select Services</legend>
                <div className="radio-group">
                  <div className="radio-item">
                    <input type="radio" id="selectedItems" name="serviceType" value="selectedItems" />
                    <label htmlFor="selectedItems">Selected item and or services</label>
                  </div>
                  <div className="radio-item">
                    <input type="radio" id="allItems" name="serviceType" value="allItems" />
                    <label htmlFor="allItems">All items and or services</label>
                  </div>
                  <div className="radio-item">
                    <input type="radio" id="allExcept" name="serviceType" value="allExcept" />
                    <label htmlFor="allExcept">All items and or services except</label>
                  </div>
                </div>
              </fieldset>

              <div className="items-container">
                <div className="item">
                  <span>Item 1 or service</span>
                  <button type="button" className="delete-button">Delete</button>
                </div>
                <div className="item">
                  <span>Item 2 or service</span>
                  <button type="button" className="delete-button">Delete</button>
                </div>
                <img src={cartIcon} alt="cart" className="cart-add-icon" />
              </div>

              <div className="client-ownership-info">
                  <span>Client type proof of ownerships
                    <img src={infoIcon} alt="info" className="info-icon" />
                  </span>
              </div>

              <div className="file-upload-wrapper">
                <label htmlFor="fileUpload" className="file-upload-label">
                  Upload file
                </label>
                <input type="file" id="fileUpload" name="fileUpload" className="file-upload-input" />
              </div>

              <div className="button-container">
                <button type="submit" className="save-button">Save</button>
                <button type="button" className="apply-button">Apply</button>
              </div>
            </form>
          </div>
        </main>
      </div>
  );
};

export default MainForm;
