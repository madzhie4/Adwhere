import React, { useState, ChangeEvent, FormEvent } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaFolderOpen, FaDownload, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import './components/Navbar';

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

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="registration-page">
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
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="header">
            <h1>Vehicle Owner</h1>
            <div className="applications-button">Applications ▼</div>
        </div>
        <h4>Personal Information</h4>
        <div className="form-group">
          <label htmlFor="birthDate">Birth Date</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
          {errors.birthDate && <span className="error-message">{errors.birthDate}</span>}
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="gender-options">
            <span className="gender-label">
              <input type="radio" name="gender" value="M" onChange={handleChange} />
              <label>
                 Male
              </label>
            </span>
            <span className="gender-label">
              <input type="radio" name="gender" value="O" onChange={handleChange} /> 
              <label>
                  Female
              </label>
            </span>
            <span className="gender-label">
              <input type="radio" name="gender" value="O" onChange={handleChange} /> 
              <label>
                  Other
              </label>
            </span>
          </div>
          {errors.gender && <span className="error-message">{errors.gender}</span>}
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
          {errors.city && <span className="error-message">{errors.city}</span>}
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
          {errors.zip && <span className="error-message">{errors.zip}</span>}
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
          {errors.province && <span className="error-message">{errors.province}</span>}
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
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-button">Register</button>
        </div>
      </form>
    </div>




  );
}

export default VehicleRegistrationForm;
