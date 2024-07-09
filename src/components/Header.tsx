import React from 'react';
import '../ClientApplicationForm.css';
import menuIcon from '../icons/menu.png';
import d_arrowIcon from '../icons/down-arrow.png';

interface HeaderProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <header>
      <nav className="navbar">
        <div className="menu-logo-container">
          <div className="logo">
            Ad<b>w</b>here
          </div>
        </div>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li className="dropdown">
            <a href="#applications" className="dropbtn">
              Applications
              <img src={d_arrowIcon} alt="arrow down" className="arrow-down" />
            </a>
            <div className="dropdown-content">
              <a href="#driver">Driver</a>
              <a href="#client">Client</a>
              <a href="#vehicle">Vehicle</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
