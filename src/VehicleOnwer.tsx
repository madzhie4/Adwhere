import React, { useState, ChangeEvent, FormEvent } from 'react';
import './index.css'; // Assuming you have created this CSS file

function VehicleRegistrationForm() {
  const [formData, setFormData] = useState({
    birthDate: '',
    gender: '',
    city: '',
    zip: '',
    province: '',
    address: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    <div className="registration-container">
      <header>
        <div className="menu-icon">☰</div>
        <h1>Vehicle owner</h1>
        <div className="search-icon">🔍</div>
      </header>
      <h2>Registration form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="birthDate">Birth date</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="M"
                checked={formData.gender === 'M'}
                onChange={handleRadioChange}
              /> M
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="F"
                checked={formData.gender === 'F'}
                onChange={handleRadioChange}
              /> F
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">ZIP</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="province">Province</label>
          <select
            id="province"
            name="province"
            value={formData.province}
            onChange={handleChange}
          >
            <option value="">Select Province</option>
            {/* Add province options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
      <footer>
        <button className="home-button">🏠</button>
      </footer>
    </div>
  );
}

export default VehicleRegistrationForm;
