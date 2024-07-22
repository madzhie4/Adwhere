import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'leaflet/dist/leaflet.css';
import './index.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaFolderOpen, FaDownload, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import './components/Navbar';

const VehicleOwnerDashboard = () => {
  const [showWithdrawConfirm, setShowWithdrawConfirm] = useState(false);
  const [showNewDriverConfirm, setShowNewDriverConfirm] = useState(false);
  const [showExtendLease, setShowExtendLease] = useState(false);
  const [extendDate, setExtendDate] = useState(new Date());
  const [showTerminateConfirm, setShowTerminateConfirm] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
      <div className="dashboard">
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
    
            <div>
              <h1 className="main-title">Vehicle Owner </h1>
              <div className="vehicle-id">07KJbxs462</div>
            </div>
          

            <div className="card-container">
              <div className="card revenue-card">
                  <h3>Revenue</h3>
                  <p className="value">R1401.25</p>
                  <button className="btn-submit-green" onClick={() => setShowWithdrawConfirm(true)}>Withdraw</button>
                  {showWithdrawConfirm && (
                      <div className="confirmation">
                          <p>Are you sure?</p>
                          <span className="loading-confirmation">
                            <button className="btn-submit-green" onClick={() => setShowWithdrawConfirm(false)}>Yes</button>
                            <button className="btn-submit-red" onClick={() => setShowWithdrawConfirm(false)}>No</button>
                          </span>
                      </div>
                  )}
              </div>

              <div className="card driver-card">
                  <h3>Driver</h3>
                  <p>Name: Siybo</p>
                  <p>Surname: Xaba</p>
                  <p>Age: 27</p>
                  <p>Address: 41 X Site 8 Khayelitsha</p>
                  <p>Unique code: 218_W2W</p>
                  <button className="btn-submit-green" onClick={() => setShowNewDriverConfirm(true)}>Get new driver</button>
                  {showNewDriverConfirm && (
                      <div className="confirmation">
                          <p>Are you sure?</p>
                          <span className="loading-confirmation">
                            <button className="confirm-y btn-submit-green" onClick={() => setShowNewDriverConfirm(false)}>Yes</button>
                            <button className="reject btn-submit-red" onClick={() => setShowNewDriverConfirm(false)}>No</button>
                          </span>
                      </div>
                  )}
              </div>

              <div className="card trips-card">
                  <h3>Trips</h3>
                  <p className="circle">18</p>
              </div>

              <div className="card lease-card">
                  <h3>Lease Duration Days Left</h3>
                  <p className="circle">14</p>
                  <button className="btn-submit-green" onClick={() => setShowExtendLease(true)}>Extend</button>
                  {showExtendLease && (
                      <div className="card lease-extension-card">
                          <h3>Car Lease Extension Duration</h3>
                          <DatePicker selected={extendDate} onChange={(date) => setExtendDate(date || new Date())} />
                          <p>+13 Days</p>
                          <button className="btn-submit-green">Submit Extension</button>
                      </div>
                  )}
              </div>

              <div className="card trip-history-card">
                  <h3>Trip History</h3>
                  <table>
                      <thead>
                          <tr>
                              <th>Location</th>
                              <th>Destination</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Rondebosch</td>
                              <td>S1</td>
                          </tr>
                          <tr>
                              <td>Brand Hird</td>
                              <td>Alpine Street</td>
                          </tr>
                          <tr>
                              <td>15th Avenue</td>
                              <td>Monte Vista</td>
                          </tr>
                      </tbody>
                  </table>
                  <p>1/26</p>
              </div>

              <div className="card vehicle-location-card">
                  <h3>Vehicle Current Location</h3>
                  <MapContainer center={[-33.918861, 18.4233]} zoom={13} style={{ height: '200px', width: '100%' }}>
                      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                      <Marker position={[-33.918861, 18.4233]} />
                  </MapContainer>
              </div>

              <div className="card terminating-lease-card">
                  <h3>Terminating Lease</h3>
                  <button className="btn-submit-red" onClick={() => setShowTerminateConfirm(true)}>Terminate</button>
                  {showTerminateConfirm && (
                      <div className="confirmation">
                          <p>Are you sure?</p>
                          <span className="loading-confirmation">
                            <button className="btn-submit-green" onClick={() => setShowTerminateConfirm(false)}>Yes</button>
                            <button className="btn-submit-red" onClick={() => setShowTerminateConfirm(false)}>No</button>
                          </span>
                      </div>
                  )}
              </div>

              <div className="card penalty-fee-card">
                  <h3>Penalty Fee</h3>
                  <p className="penalty">R1401.25</p>
                  <button className="btn-submit-green" onClick={() => setShowPaymentOptions(true)}>Pay</button>
                  {showPaymentOptions && (
                      <div className="payment-options-card">
                          <h3>How Will You Pay?</h3>
                          <button className="btn-submit-orange">Card</button>
                          <button className="btn-submit-orange">Revenue</button>
                          <button className="btn-submit-orange">Both</button>
                          <div className="payment-inputs">
                              <input type="text" placeholder="Card amount" />
                              <input type="text" placeholder="Revenue amount" />
                          </div>
                      </div>
                  )}
              </div>
            </div>
          <button className="fixed-button">Next</button>
      </div>
  );
};

export default VehicleOwnerDashboard;
