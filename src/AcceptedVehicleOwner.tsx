import React, { ChangeEvent, useState } from 'react';
import './index.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

type FormData = {
  isHomeAddress: string;
  vehicleLocation: string;
  restrictedAreaMethod: string;
  listAreas: string[];
  serviceTimeFrom: string;
  serviceTimeTill: string;
  leaseStartDate: Date;
  leaseDuration: number;
  mapCenter: {
    lat: number;
    lng: number;
  };
  markerPosition: { lat: number; lng: number } | null;
};

type FormErrors = {
  isHomeAddress?: string;
  vehicleLocation?: string;
  restrictedAreaMethod?: string;
  listAreas?: string;
  serviceTimeFrom?: string;
  serviceTimeTill?: string;
  leaseStartDate?: string;
  leaseDuration?: string;
};

const VehicleOwnerForm = () => {
  const [formData, setFormData] = useState<FormData>({
    isHomeAddress: 'no',
    vehicleLocation: '32 Avenue\nSea Point\nCape Town',
    restrictedAreaMethod: 'pickOnMap',
    listAreas: ['E.g. All of Khayelitsha'],
    serviceTimeFrom: '00:00',
    serviceTimeTill: '23:59',
    leaseStartDate: new Date('2024-01-01'),
    leaseDuration: 32,
    mapCenter: { lat: -33.9249, lng: 18.4241 }, // Cape Town coordinates
    markerPosition: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'radio' ? (e.target as HTMLInputElement).value : value
    }));
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setFormData(prevState => ({
        ...prevState,
        markerPosition: {
          lat: event.latLng?.lat() || 0,
          lng: event.latLng?.lng() || 0,
        }
      }));
    }
  };

  const handleAddArea = () => {
    setFormData(prevState => ({
      ...prevState,
      listAreas: [...prevState.listAreas, '']
    }));
  };

  const handleAreaChange = (index: number, value: string) => {
    const newAreas = [...formData.listAreas];
    newAreas[index] = value;
    setFormData(prevState => ({
      ...prevState,
      listAreas: newAreas
    }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.vehicleLocation.trim()) {
      newErrors.vehicleLocation = 'Vehicle location is required';
    }

    if (!formData.serviceTimeFrom) {
      newErrors.serviceTimeFrom = 'Service time from is required';
    }

    if (!formData.serviceTimeTill) {
      newErrors.serviceTimeTill = 'Service time till is required';
    }

    if (!formData.leaseStartDate) {
      newErrors.leaseStartDate = 'Lease start date is required';
    }

    if (!formData.leaseDuration) {
      newErrors.leaseDuration = 'Lease duration is required';
    }

    if (formData.restrictedAreaMethod === 'listAreas' && formData.listAreas.some(area => !area.trim())) {
      newErrors.listAreas = 'All listed areas must be filled out';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted', formData);
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <form className="vehicle-owner-form" onSubmit={handleSubmit}>
      <h2>Vehicle owner <span className="checkmark">✓</span> <span className="id">03VOAci402</span></h2>

      <div className="form-group">
        <label>Is vehicle location same as home address</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="isHomeAddress"
              value="no"
              checked={formData.isHomeAddress === 'no'}
              onChange={handleInputChange}
            /> No
          </label>
          <label>
            <input
              type="radio"
              name="isHomeAddress"
              value="yes"
              checked={formData.isHomeAddress === 'yes'}
              onChange={handleInputChange}
            /> Yes
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Vehicle location</label>
        <textarea
          name="vehicleLocation"
          value={formData.vehicleLocation}
          onChange={handleInputChange}
          rows={3}
          required
        />
        {errors.vehicleLocation && <span className="error">{errors.vehicleLocation}</span>}
      </div>

      <div className="form-group">
        <label>Restricted car area</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="restrictedAreaMethod"
              value="pickOnMap"
              checked={formData.restrictedAreaMethod === 'pickOnMap'}
              onChange={handleInputChange}
            /> Pick on map
          </label>
          <label>
            <input
              type="radio"
              name="restrictedAreaMethod"
              value="listAreas"
              checked={formData.restrictedAreaMethod === 'listAreas'}
              onChange={handleInputChange}
            /> List areas
          </label>
        </div>
        {formData.restrictedAreaMethod === 'pickOnMap' && (
          <div className="map-container">
            <LoadScript googleMapsApiKey="AIzaSyDiXDSM9QtS7X3rG3Se_naPNBb57Qd5KLE">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={formData.mapCenter}
                zoom={10}
                onClick={handleMapClick}
              >
                {formData.markerPosition && <Marker position={formData.markerPosition} />}
              </GoogleMap>
            </LoadScript>
          </div>
        )}
        {formData.restrictedAreaMethod === 'listAreas' && (
          <div>
            {formData.listAreas.map((area, index) => (
              <input
                key={index}
                type="text"
                value={area}
                onChange={(e) => handleAreaChange(index, e.target.value)}
                placeholder="Enter area"
                required
              />
            ))}
            {errors.listAreas && <span className="error">{errors.listAreas}</span>}
            <button type="button" onClick={handleAddArea} className="add-button">+</button>
          </div>
        )}
      </div>

      <div className="form-group">
        <label>Vehicle daily service times</label>
        <div className="time-inputs">
          <input
            type="time"
            name="serviceTimeFrom"
            value={formData.serviceTimeFrom}
            onChange={handleInputChange}
            required
          />
          <span>—</span>
          <input
            type="time"
            name="serviceTimeTill"
            value={formData.serviceTimeTill}
            onChange={handleInputChange}
            required
          />
        </div>
        {errors.serviceTimeFrom && <span className="error">{errors.serviceTimeFrom}</span>}
        {errors.serviceTimeTill && <span className="error">{errors.serviceTimeTill}</span>}
      </div>

      <div className="form-group">
        <label>Car lease duration</label>
        <div className="calendar-container">
          <input
            type="date"
            name="leaseStartDate"
            value={formData.leaseStartDate.toISOString().split('T')[0]}
            onChange={(e) => setFormData(prev => ({ ...prev, leaseStartDate: new Date(e.target.value) }))}
            required
          />
          {/* Calendar component would go here */}
          <div className="calendar-placeholder">Calendar Placeholder</div>
          <span>{formData.leaseDuration} Days</span>
        </div>
        {errors.leaseStartDate && <span className="error">{errors.leaseStartDate}</span>}
        {errors.leaseDuration && <span className="error">{errors.leaseDuration}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">Submit</button>
        <button type="button" className="submit-journey-button">Submit & Go to journey</button>
        <button type="button" className="save-button">Save</button>
        <button type="button" className="edit-button">Edit</button>
      </div>
    </form>
  );
};

export default VehicleOwnerForm;
