//Listing of dependencies and declaring

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './VehicleFurbisherA1.css';
import { useNavigate } from 'react-router-dom';
import infoIcon from './icons/info-circle.png';
import addIcon from './icons/add.png';
import menuIcon from './icons/menu.png';
import d_arrowIcon from './icons/down-arrow.png';
import Header from './components/Header';
import image from './images/cars.jpg';


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

    const [numberOfBranches, setNumberOfBranches] = useState<number>(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfBranches(event.target.valueAsNumber);
    };

    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/furbisher');
    };


return (
    <div className="app">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main>
        <div className="application-title">
            <h1><em className="title-vehicle">Vehicle Furbisher</em> Application Form</h1>
        </div>
        <div className="form-container">
            <form>
                <label htmlFor="business">Business/Company name</label>
                <input type="text" id="business" name="business" placeholder="e.g CAV Paintings" required />

                <label htmlFor="Website">Website</label>
                <input type="text" id="Website" name="Website" placeholder="e.g https://www.apple.com/" required />

                <label htmlFor="AnySpec">Any Specialization (Optional)</label>
                <input type="text" id="AnySpec" name="AnySpec" placeholder="e.g Interior Design" />

                <label htmlFor="numberofbranch">Number of Branch(s)</label>
                <input
                    type="number" id="numberofbranch" name="numberofbranch" placeholder="0" onChange={handleInputChange} required/>

                <div className="items-container">
                    <label htmlFor="location">Location of Branch(s)</label>
                    <div className="item">
                    <span>Cape Town</span>
                    <button type="button" className="delete-button">Delete</button>
                    </div>
                    <img src={addIcon} alt="cart" className="add-icon" />
                </div>

                <div className="proof-ownership">
                    <span>Proof of company ownerships</span>
                </div>

                <div className="file-upload-wrapper">
                    <label htmlFor="fileUpload" className="file-upload-label">
                    Upload file
                    </label>
                    <input type="file" id="fileUpload" name="fileUpload" className="file-upload-input"/>
                </div>

                <div className="button-container">
                    <button type="button" className="next-button" onClick={handleNextClick}>Next</button>
                </div>
            </form>
        </div>
      </main>
    </div>
  );
};

export default MainForm;
