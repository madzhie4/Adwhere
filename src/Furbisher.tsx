//Listing of dependencies and declaring
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Furbisher.css';
import menuIcon from './icons/menu.png';
import d_arrowIcon from './icons/down-arrow.png';
import Header from './components/Header';


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
    <div className="furbisher-app">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
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
              <button type="button">Save</button>
              <button type="submit" className="apply-button">Apply</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default MainForm;
