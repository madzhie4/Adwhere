import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './ClientApplicationForm.css';


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

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Adwhere</div>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li className="dropdown">
            <a href="#applications" className="dropbtn">Applications</a>
            <div className="dropdown-content">
              <a href="#driver">Driver</a>
              <a href="#client">Client</a>
              <a href="#vehicle">Vehicle</a>
            </div>
          </li>
        </ul>
      </nav>
      <main>
        <div className="form-container">
            
          <form>
            <label htmlFor="clientType">Client type</label>
            <select id="clientType" name="clientType">
              <option value="1">Client type as number 1</option>
            </select>

            <label htmlFor="clientWebsite">Client website (Optional)</label>
            <input type="text" id="clientWebsite" name="clientWebsite" placeholder="e.g https://www.apple.com/"/>

            <fieldset>
              <legend>Select Services</legend>
              <div className="radio-group">
                <div>
                  <input type="radio" id="selectedItems" name="serviceType" value="selectedItems" />
                  <label htmlFor="selectedItems">Selected item and or services</label>
                </div>
                <div>
                  <input type="radio" id="allItems" name="serviceType" value="allItems" />
                  <label htmlFor="allItems">All items and or services</label>
                </div>
                <div>
                  <input type="radio" id="allExcept" name="serviceType" value="allExcept" />
                  <label htmlFor="allExcept">All items and or services except</label>
                </div>
              </div>
            </fieldset>

            <label htmlFor="fileUpload">Upload file</label>
            <input type="file" id="fileUpload" name="fileUpload" />

            <div className="button-container">
              <button type="submit">Save</button>
              <button type="button" className="apply-button">Apply</button>
            </div>
          </form>
        </div>
      </main>
      <footer className="footer">
            

        <hr style={hrStyles} />
            <p>&copy; 2024 Adwhere. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default MainForm;
