import React, { useState, ChangeEvent, FormEvent } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function VehicleRegistrationForm() {
  const [formData, setFormData] = useState({
    birthDate: '',
    gender: '',
    city: '',
    zip: '',
    province: '',
    address: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.birthDate) newErrors.birthDate = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zip) newErrors.zip = 'ZIP code is required';
    if (!formData.province) newErrors.province = 'Province is required';
    if (!formData.address) newErrors.address = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <div className="page-container">
      <div className="registration-container">
        <header>
          <div className="menu-icon">☰</div>
          <div className="heading">
            <h1>Vehicle owner</h1>
          </div>
        </header>
        <h2>Registration form</h2>
        <h4>Personal Information</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="birthDate">Birth date</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
            {errors.birthDate && <span className="error">{errors.birthDate}</span>}
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="gender-options">
              <label>
                <input type="radio" name="gender" value="M" onChange={handleChange} /> M
              </label>
              <label>
                <input type="radio" name="gender" value="F" onChange={handleChange} /> F
              </label>
              <label>
                <input type="radio" name="gender" value="O" onChange={handleChange} /> O
              </label>
            </div>
            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>
          <h4>Location</h4>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="e.g. Cape Town"
              value={formData.city}
              onChange={handleChange}
              required
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="zip">ZIP</label>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="e.g. 7785"
              value={formData.zip}
              onChange={handleChange}
              required
            />
            {errors.zip && <span className="error">{errors.zip}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="province">Province</label>
            <select
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
            >
              <option value="">Select Province</option>
              <option value="Eastern Cape">Eastern Cape</option>
              <option value="Free State">Free State</option>
              <option value="Gauteng">Gauteng</option>
              <option value="KwaZulu-Natal">KwaZulu-Natal</option>
              <option value="Limpopo">Limpopo</option>
              <option value="Mpumalanga">Mpumalanga</option>
              <option value="Northern Cape">Northern Cape</option>
              <option value="North West">North West</option>
              <option value="Western Cape">Western Cape</option>
            </select>
            {errors.province && <span className="error">{errors.province}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              placeholder="e.g. 57B Bafano, Cf Mandalay"
              value={formData.address}
              onChange={handleChange}
              required
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>
          <footer>
            <button type="submit" className="register-button">Register</button>
          </footer>
        </form>
      </div>
      <div className="company-image-container"></div>
    </div>
  );
}

export default VehicleRegistrationForm;
