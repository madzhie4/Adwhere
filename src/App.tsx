import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Login from './Login';
import VehicleOwner from './VehicleOwner';
import Signup from './Signup';
import Profile from './Profile';
import DriverApplication from './DriverApplication';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './Welcome';
import Signup from './Signup';
import Profile from './Profile';
import Welcome from './Welcome';
import Login from './Login';
import ClientRegistation from './ClientRegistation';
import VehicleOwner from './VehicleOwner';
import ClientApplicationForm from './ClientApplicationForm';
import VehicleFurbisherA1 from './VehicleFurbisherA1';
import Furbisher from './Furbisher';
function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ClientRegistation" element={<ClientRegistation />} />
        <Route path="/VehicleOwner" element={<VehicleOwner />} />
        <Route path="/ClientApplicationForm" element={<ClientApplicationForm />} />
        <Route path="/VehicleFurbisherA1" element={<VehicleFurbisherA1 />} />
        <Route path="/Furbisher" element={<Furbisher />} />
      </Routes>
    </Router>
  );
}


export default MainApp;
