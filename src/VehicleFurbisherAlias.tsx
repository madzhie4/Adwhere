import React, { useState } from 'react';
import './index.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaFolderOpen, FaDownload, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import './components/Navbar';

const VehicleFurbisherAlias = () => {

  // For sidebar viewing
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  // Show the table upon clicking the view all button
  const [showTable, setShowTable] = useState(false);
  const handleViewAll = () => {
    setShowTable(!showTable);
  };

  return (
    
    <div className="page-container">
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
      
      <div className="grid-container">
        {/* <div className="vehicle-heading">
          <h1 className="main-title">Vehicle Furbisher</h1>
        </div> */}
        <div className="furbish-container">
          <h2 className="section-title">Vehicles to Furbish</h2>
          <div className="vehicle-no">26</div>
        </div>

        <div className="req-con-vehicle">
          <div className="vehicle-container">
            <h2 className="section-title">Vehicles Requirements</h2>
            <div className="vehicle-req">
              <span className="vehicle-tag">Toyota XR</span>
              <span className="vehicle-tag">Woolworths</span>
              <span className="vehicle-tag">Design</span>
            </div>
            <div className="action-buttons">
              <div className="left-buttons">
                <div className="action-link" onClick={handleViewAll}>
                  <FaIcons.FaFolderOpen className="action-icon" />
                  <span>View all</span>
                </div>
                <div className="action-link">
                  <FaIcons.FaDownload className="action-icon" />
                  <span>Download all</span>
                </div>
                <div className="action-link">
                  <FaIcons.FaArrowRight className="action-icon" />
                  <span>Next</span>
                </div>
              </div>
            </div>
          </div>

          <div className="confirmation-container">
            <h2 className="section-title">Confirm Complete Vehicles</h2>
            <div className="vehicle-req">
              <span className="vehicle-tag">Toyota XR</span>
              <span className="vehicle-tag">Woolworths</span>
              <span className="vehicle-tag">Design</span>
            </div>
            <div className="action-buttons">
              <div className="left-buttons">
                <div className="action-link" onClick={handleViewAll}>
                  <FaIcons.FaFolderOpen className="action-icon" />
                  <span>View all</span>
                </div>
                <div className="action-link">
                  <FaIcons.FaCheckCircle className="action-icon" />
                  <span>Confirm all complete</span>
                </div>
                <div className="action-link">
                  <FaIcons.FaArrowRight className="action-icon" />
                  <span>Next</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {showTable && (
        <div className="table-container-vehicle">
          <table className="styled-table-data">
            <thead>
              <tr>
                <th>Car</th>
                <th>Car Owner</th>
                <th>Client</th>
                <th>Car Owner Address</th>
                <th>Phone Number</th>
                <th>Design</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Toyota XR</td>
                <td>Greg</td>
                <td>Woolworths</td>
                <td>Port Beulah, Iowa 89712, United States of America</td>
                <td>905-068-8439</td>
                <td></td>
              </tr>
              <tr>
                <td>Rollin Fadel</td>
                <td>Steuber LLC</td>
                <td>Rollin_Fadel@gmail.com</td>
                <td>Lake Matilde, Tennessee 74052, United States of America</td>
                <td>(217) 057-6055</td>
                <td></td>
              </tr>
              <tr>
                <td>Lera Stroman</td>
                <td>Konopelski Group</td>
                <td>Lera_Stroman39@gmail.com</td>
                <td>Vicentview, Mississippi 47516-9630, United States of America</td>
                <td>166-619-2267</td>
                <td></td>
              </tr>
              <tr>
                <td>Adan Schiller</td>
                <td>Harber Inc</td>
                <td>Adan_Schiller19@yahoo.com</td>
                <td>Yorunlenberg, Delaware 90074-0032, United States of America</td>
                <td>(899) 824-5724</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default VehicleFurbisherAlias;
