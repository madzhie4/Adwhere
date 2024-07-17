import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './Welcome';
import Signup from './Signup';
import Profile from './Profile';
import Welcome from './Welcome';
import Login from './Login';
import ClientRegistration from './ClientRegistration';
import VehicleOwner from './VehicleOwner';
import ClientApplicationForm from './ClientApplicationForm';
import VehicleFurbisherA1 from './VehicleFurbisherA1';
import VehicleFurbisherAlias from './VehicleFurbisherAlias';
import AcceptedClient from './AcceptedClient';
import HomePage from './HomePage';
import Furbisher from './Furbisher';
import VehicleOwnerApplication from './VehicleOwnerApplication';
import VehicleOwnerApplication2 from './VehicleOwnerApplication2';
import DriverApplicationForm from './DriverApplication';
import AcceptedVehicleOwner from './AcceptedVehicleOwner';
import VehicleOwnerPathway from './VehicleOwnerPathway';
import ContactUs from './components/ContactUs';
import Services from './Services';
import AboutUs from './AboutUs';

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ClientRegistration" element={<ClientRegistration />} />
        <Route path="/VehicleOwner" element={<VehicleOwner />} />
        <Route path="/ClientApplicationForm" element={<ClientApplicationForm />} />
        <Route path="/VehicleFurbisherA1" element={<VehicleFurbisherA1 />} />
        <Route path="/VehicleFurbisherAlias" element={<VehicleFurbisherAlias />} />
        <Route path="/AcceptedClient" element={<AcceptedClient />} />
        <Route path="/Furbisher" element={<Furbisher />} />
        <Route path="/VehicleOwnerApplication" element={<VehicleOwnerApplication />} />
        <Route path="/VehicleOwnerApplication2" element={<VehicleOwnerApplication2 />} />
        <Route path="/DriverApplicationForm" element={<DriverApplicationForm />} />
        <Route path="/AcceptedVehicleOwner" element={<AcceptedVehicleOwner />} />
        <Route path="/VehicleOwnerPathway" element={<VehicleOwnerPathway />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}


export default MainApp;