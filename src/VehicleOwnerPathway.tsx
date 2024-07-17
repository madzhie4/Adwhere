import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'leaflet/dist/leaflet.css';
import './index.css';

const VehicleOwnerDashboard = () => {
  const [showWithdrawConfirm, setShowWithdrawConfirm] = useState(false);
  const [showNewDriverConfirm, setShowNewDriverConfirm] = useState(false);
  const [showExtendLease, setShowExtendLease] = useState(false);
  const [extendDate, setExtendDate] = useState(new Date());
  const [showTerminateConfirm, setShowTerminateConfirm] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);


  return (
    <div className="dashboard">
      <h1>Vehicle owner <span role="img" aria-label="car">🚗</span></h1>
      <div>07KJbxs462</div>

      <div className="card-container">
        <div className="card">
          <h3>Revenue</h3>
          <p className="value">1401.25</p>
          <button onClick={() => setShowWithdrawConfirm(true)}>Withdraw</button>
          {showWithdrawConfirm && (
            <div>
              <p>Are you sure?</p>
              <button onClick={() => setShowWithdrawConfirm(false)}>Yes</button>
              <button onClick={() => setShowWithdrawConfirm(false)}>No</button>
            </div>
          )}
        </div>

        <div className="card">
          <h3>Driver</h3>
          <p>Name: Siybo</p>
          <p>Surname: Xaba</p>
          <p>Age: 27</p>
          <p>Address: 41 X Site 8 Khayelitsha</p>
          <p>Unique code: 218_W2W</p>
          <button onClick={() => setShowNewDriverConfirm(true)}>Get new driver</button>
          {showNewDriverConfirm && (
            <div>
              <p>Are you sure?</p>
              <button onClick={() => setShowNewDriverConfirm(false)}>Yes</button>
              <button onClick={() => setShowNewDriverConfirm(false)}>No</button>
            </div>
          )}
        </div>

        <div className="card">
          <h3>Trips</h3>
          <p className="circle">18</p>
        </div>

        <div className="card">
          <h3>Lease duration days left</h3>
          <p className="circle">14</p>
          <button onClick={() => setShowExtendLease(true)}>Extend</button>
        </div>

        {showExtendLease && (
          <div className="card">
            <h3>Car lease extension duration</h3>
            <DatePicker selected={extendDate} onChange={(date) => setExtendDate(date || new Date())} />
            <p>+13 Days</p>
            <button>Submit ext</button>
          </div>
        )}

        <div className="card">
          <h3>Trip history</h3>
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

        <div className="card">
          <h3>Vehicle current location</h3>
            {<MapContainer center={[-33.918861, 18.4233]} zoom={13} style={{ height: '200px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-33.918861, 18.4233]} />
            </MapContainer>}
        </div>

        <div className="card">
          <h3>Terminating lease</h3>
          <button onClick={() => setShowTerminateConfirm(true)}>Terminate</button>
          {showTerminateConfirm && (
            <div>
              <p>Are you sure?</p>
              <button onClick={() => setShowTerminateConfirm(false)}>Yes</button>
              <button onClick={() => setShowTerminateConfirm(false)}>No</button>
            </div>
          )}
        </div>

        <div className="card">
          <h3>Penalty fee</h3>
          <p className="penalty">1401.25</p>
          <button onClick={() => setShowPaymentOptions(true)}>Pay</button>
        </div>

        {showPaymentOptions && (
          <div className="card">
            <h3>How will you pay?</h3>
            <button>Card</button>
            <button>Revenue</button>
            <button>Both</button>
            <div>
              <input type="text" placeholder="Card amount" />
              <input type="text" placeholder="Revenue amount" />
            </div>
          </div>
        )}
      </div>
      <button className="fixed-button">Next</button>
    </div>
  );
};

export default VehicleOwnerDashboard;
