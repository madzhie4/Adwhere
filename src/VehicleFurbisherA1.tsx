//Listing of dependencies and declaring
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useNavigate } from 'react-router-dom';
import infoIcon from './icons/info-circle.png';
import addIcon from './icons/add.png';
import menuIcon from './icons/menu.png';
import d_arrowIcon from './icons/down-arrow.png';
import Header from './components/Header';
import image from './images/cars.jpg';
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

    const [numberOfBranches, setNumberOfBranches] = useState<number>(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfBranches(event.target.valueAsNumber);
    };

    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/furbisher');
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
