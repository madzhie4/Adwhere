import React, { ChangeEvent, useState } from 'react';
import './VehicleOwnerForm.css';

const VehicleOwnerForm = () => {
  const [formData, setFormData] = useState({
    homeAddress: false,
    vehicleLocation: '',
    restrictedCarArea: '',
    serviceTimeFrom: '00:00',
    serviceTimeTill: '23:59',
    leaseStartDate: new Date(),
    leaseDuration: 32,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prevState => ({
        ...prevState,
        [name]: checked
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  return (
    <div className="vehicle-owner-form">
      <h2>Vehicle owner <span className="checkmark">✓</span></h2>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="homeAddress"
            checked={formData.homeAddress}
            onChange={handleInputChange}
          />
          Is vehicle location same as home address
        </label>
      </div>

      <div className="form-group">
        <label>Vehicle location</label>
        <textarea
          name="vehicleLocation"
          value={formData.vehicleLocation}
          onChange={handleInputChange}
          placeholder="e.g. 123 Main Street, Sea Point, Cape Town"
        />
      </div>

      <div className="form-group">
        <label>Restricted car area</label>
        <input
          type="text"
          name="restrictedCarArea"
          value={formData.restrictedCarArea}
          onChange={handleInputChange}
        />
        <div className="map-placeholder"></div>
      </div>

      <div className="form-group">
        <label>Vehicle daily service times</label>
        <div className="time-inputs">
          <label>
            From:
            <input
              type="time"
              name="serviceTimeFrom"
              value={formData.serviceTimeFrom}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Till:
            <input
              type="time"
              name="serviceTimeTill"
              value={formData.serviceTimeTill}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Car lease duration</label>
        <div className="calendar-container">
          {/* Placeholder for calendar component */}
          <div className="calendar-placeholder"></div>
          <span>{formData.leaseDuration} Days</span>
        </div>
      </div>

      <div className="form-actions">
        <button className="submit-button">Submit</button>
        <button className="submit-journey-button">Submit & Go to journey</button>
        <button className="save-button">Save</button>
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
};

export default VehicleOwnerForm;
