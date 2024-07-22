import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header';
import d_arrowIcon from './icons/down-arrow.png';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaFolderOpen, FaDownload, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import './components/Navbar';
import Navbar from './components/Navbar';

const AcceptedClient: React.FC = () => {
  const [numVehicles, setNumVehicles] = useState<number>(8);
  const [fullyFurbished, setFullyFurbished] = useState<number>(3);
  const [halfFurbished, setHalfFurbished] = useState<number>(3);
  const [littleFurbished, setLittleFurbished] = useState<number>(2);
  const [increasedSales, setIncreasedSales] = useState<boolean>(true);
  const [newCustomers, setNewCustomers] = useState<boolean>(false);
  const [adStartDate, setAdStartDate] = useState<string>('');
  const [adEndDate, setAdEndDate] = useState<string>('');
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [extraNote, setExtraNote] = useState<string>('');

  const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(prev => prev + 1);
  };

  const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setDesignFile(event.target.files[0]);
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
  };

  const hrStyles = {
      border: 'none',
      borderTop: '1px solid #ccc',
      margin: '10px 0',
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (  
    <div className="my-5">
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
      <div className="form-section">
        <h3 className="mb-4">Vehicle Refurbishment</h3>
        <hr style={hrStyles}/>
        <div className="mb-3 vehicle-refurbishment">
          <label className="form-label">Number of vehicles</label>
          <div className="input-group">
            <button className="btn-vehicles" onClick={() => handleDecrement(setNumVehicles)}>-</button>
            <input type="number" className="form-control text-center" value={numVehicles} readOnly />
            <button className="btn-vehicles" onClick={() => handleIncrement(setNumVehicles)}>+</button>
          </div>
        </div>
        <div className="mb-3 vehicle-refurbishment">
          <label className="form-label">Fully furbished</label>
          <div className="input-group">
            <button className="btn-vehicles" onClick={() => handleDecrement(setFullyFurbished)}>-</button>
            <input type="number" className="form-control text-center" value={fullyFurbished} readOnly />
            <button className="btn-vehicles" onClick={() => handleIncrement(setFullyFurbished)}>+</button>
          </div>
        </div>
        <div className="mb-3 vehicle-refurbishment">
          <label className="form-label">Half furbished</label>
          <div className="input-group">
            <button className="btn-vehicles" onClick={() => handleDecrement(setHalfFurbished)}>-</button>
            <input type="number" className="form-control text-center" value={halfFurbished} readOnly />
            <button className="btn-vehicles" onClick={() => handleIncrement(setHalfFurbished)}>+</button>
          </div>
        </div>
        <div className="mb-3 vehicle-refurbishment">
          <label className="form-label">Little furbished</label>
          <div className="input-group">
            <button className="btn-vehicles" onClick={() => handleDecrement(setLittleFurbished)}>-</button>
            <input type="number" className="form-control text-center" value={littleFurbished} readOnly />
            <button className="btn-vehicles" onClick={() => handleIncrement(setLittleFurbished)}>+</button>
          </div>
        </div>

        <h3 className="mb-4">Customers</h3>
        <hr style={hrStyles}/>
        <div className="form-check mb-3 customer">
          <input className="form-check-input" type="checkbox" id="increasedSales" checked={increasedSales} onChange={() => setIncreasedSales(!increasedSales)} />
          <label className="form-check-label" htmlFor="increasedSales">
            Increased current customer sales
          </label>
        </div>
        <div className="form-check mb-3 customer">
          <input className="form-check-input" type="checkbox" id="newCustomers" checked={newCustomers} onChange={() => setNewCustomers(!newCustomers)} />
          <label className="form-check-label" htmlFor="newCustomers">
            Get new customers
          </label>
        </div>

        <h3 className="mb-4">Period of ad campaign</h3>
        <hr style={hrStyles}/>
        <div className="mb-3">
          <label className="form-label">Start Date</label>
          <input type="date" className="form-control" value={adStartDate} onChange={(e) => setAdStartDate(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">End Date</label>
          <input type="date" className="form-control" value={adEndDate} onChange={(e) => setAdEndDate(e.target.value)} />
        </div>
      </div>

      <div className="form-section">
        <h3 className="mb-4">Ad channel</h3>
        <hr style={hrStyles}/>
        <div className="form-check mb-3 ad-channel">
          <input className="form-check-input" type="checkbox" id="adIncreasedSales" checked={increasedSales} onChange={() => setIncreasedSales(!increasedSales)} />
          <label className="form-check-label" htmlFor="adIncreasedSales">
            Poster(Stickers)
          </label>
        </div>
        <div className="form-check mb-3 ad-channel">
          <input className="form-check-input" type="checkbox" id="adNewCustomers" checked={newCustomers} onChange={() => setNewCustomers(!newCustomers)} />
          <label className="form-check-label" htmlFor="adNewCustomers">
            Video
          </label>
        </div>

        <h3 className="mb-4">Design requirements</h3>
        <hr style={hrStyles}/>
        <div className="mb-3">
          <input type="file" className="form-control" onChange={handleFileChange} />
        </div>
        <div>
            <label>
              <input type="radio" name="designFor" value="all" />
              Design is for ALL vehicles
            </label>
            <label>
              <input type="radio" name="designFor" value="some" />
              Design is for SOME vehicles
            </label>
        </div>

        <h3 className="mb-4">Extra Note (Additional Notes)</h3>
        <hr style={hrStyles}/>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Example text" value={extraNote} onChange={(e) => setExtraNote(e.target.value)} />
        </div>

        <div className="button-container-4">
          <div className="button-row">
            <button type="submit" className="btn-submit">Submit</button>
            <button type="button" className="btn-submit-journey">Submit & Go to Journey</button>
          </div>
          <div className="button-row">
            <button type="button" className="btn-save">Save</button>
            <button type="button" className="btn-edit">Edit</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AcceptedClient;
