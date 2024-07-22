import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './index.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaFolderOpen, FaDownload, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import './components/Navbar';

const DriverApplicationForm = () => {
  const [formData, setFormData] = useState({
    nextOfKinName: '',
    nextOfKinSurname: '',
    nextOfKinIdNumber: '',
    selfie: null as File | null,
    criminalRecordCheck: null as File | null,
    drivingEvaluationCertificate: null as File | null,
    drivingLicense: null as File | null,
    certifiedId: null as File | null,
    proofOfAddress: null as File | null,
    experience: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    }
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.nextOfKinName) newErrors.nextOfKinName = 'Next of kin name is required';
    if (!formData.nextOfKinSurname) newErrors.nextOfKinSurname = 'Next of kin surname is required';
    if (!formData.nextOfKinIdNumber) newErrors.nextOfKinIdNumber = 'Next of kin ID number is required';
    if (!formData.selfie) newErrors.selfie = 'Selfie is required';
    if (!formData.criminalRecordCheck) newErrors.criminalRecordCheck = 'Criminal record check certificate is required';
    if (!formData.drivingEvaluationCertificate) newErrors.drivingEvaluationCertificate = 'Driving evaluation certificate is required';
    if (!formData.drivingLicense) newErrors.drivingLicense = 'Driving license with PrDP front and back is required';
    if (!formData.certifiedId) newErrors.certifiedId = 'Certified ID is required';
    if (!formData.proofOfAddress) newErrors.proofOfAddress = 'Proof of address is required';
    if (!formData.experience) newErrors.experience = 'Experience is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const data = new FormData();
      for (const key in formData) {
        const value = formData[key as keyof typeof formData];
        if (value) {
          data.append(key, value);
        }
      }

      try {
        const response = await axios.post('/api/driver-application', data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        console.log('Application submitted:', response.data);
        // Handle success (e.g., show a success message, redirect)
      } catch (error) {
        console.error('Error submitting application:', error);
        // Handle error (e.g., show error message)
      }
    } else {
      console.log('Validation failed');
    }
  };

  const triggerFileInput = (inputId: string) => {
    document.getElementById(inputId)?.click();
  };

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="driver-application-container">
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

      <form onSubmit={handleSubmit} className="driver-application-form">
        <div className="header">
          <h1>Driver</h1>
          <h2>Application form</h2>
          {/* <div className="applications-button">Applications ▼</div> */}
        </div>

        <div className="form-sections">
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="nextOfKinName">Next of kin name</label>
              <input
                type="text"
                id="nextOfKinName"
                name="nextOfKinName"
                value={formData.nextOfKinName}
                onChange={handleInputChange}
                placeholder="e.g. Susan"
                required
              />
              {errors.nextOfKinName && <span className="error">{errors.nextOfKinName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="nextOfKinSurname">Next of kin surname</label>
              <input
                type="text"
                id="nextOfKinSurname"
                name="nextOfKinSurname"
                value={formData.nextOfKinSurname}
                onChange={handleInputChange}
                placeholder="e.g. Williams"
                required
              />
              {errors.nextOfKinSurname && <span className="error">{errors.nextOfKinSurname}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="nextOfKinIdNumber">Next of kin ID number</label>
              <input
                type="text"
                id="nextOfKinIdNumber"
                name="nextOfKinIdNumber"
                value={formData.nextOfKinIdNumber}
                onChange={handleInputChange}
                placeholder="e.g. 1234567891234"
                required
              />
              {errors.nextOfKinIdNumber && <span className="error">{errors.nextOfKinIdNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="experience">Experience</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleTextChange}
                placeholder="Describe your driving experience"
                required
              />
              {errors.experience && <span className="error">{errors.experience}</span>}
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label htmlFor="selfie">
                Selfie
              </label>
              <div className="file-input">
                <button type="button" onClick={() => triggerFileInput('selfie')}>Choose File</button>
                <input
                  type="file"
                  id="selfie"
                  name="selfie"
                  onChange={handleFileChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                  required
                />
                <span className="file-status">{formData.selfie ? formData.selfie.name : 'No file chosen'}</span>
              </div>
              {errors.selfie && <span className="error">{errors.selfie}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="criminalRecordCheck">
                Criminal record check certificate
              </label>
              <div className="file-input">
                <button type="button" onClick={() => triggerFileInput('criminalRecordCheck')}>Choose File</button>
                <input
                  type="file"
                  id="criminalRecordCheck"
                  name="criminalRecordCheck"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  required
                />
                <span className="file-status">{formData.criminalRecordCheck ? formData.criminalRecordCheck.name : 'No file chosen'}</span>
              </div>
              {errors.criminalRecordCheck && <span className="error">{errors.criminalRecordCheck}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="drivingEvaluationCertificate">
                Driving evaluation certificate
              </label>
              <div className="file-input">
                <button type="button" onClick={() => triggerFileInput('drivingEvaluationCertificate')}>Choose File</button>
                <input
                  type="file"
                  id="drivingEvaluationCertificate"
                  name="drivingEvaluationCertificate"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  required
                />
                <span className="file-status">{formData.drivingEvaluationCertificate ? formData.drivingEvaluationCertificate.name : 'No file chosen'}</span>
              </div>
              {errors.drivingEvaluationCertificate && <span className="error">{errors.drivingEvaluationCertificate}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="drivingLicense">
                Driving license with PrDP front and back
              </label>
              <div className="file-input">
                <button type="button" onClick={() => triggerFileInput('drivingLicense')}>Choose File</button>
                <input
                  type="file"
                  id="drivingLicense"
                  name="drivingLicense"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  required
                />
                <span className="file-status">{formData.drivingLicense ? formData.drivingLicense.name : 'No file chosen'}</span>
              </div>
              {errors.drivingLicense && <span className="error">{errors.drivingLicense}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="certifiedId">
                Certified ID
              </label>
              <div className="file-input">
                <button type="button" onClick={() => triggerFileInput('certifiedId')}>Choose File</button>
                <input
                  type="file"
                  id="certifiedId"
                  name="certifiedId"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  required
                />
                <span className="file-status">{formData.certifiedId ? formData.certifiedId.name : 'No file chosen'}</span>
              </div>
              {errors.certifiedId && <span className="error">{errors.certifiedId}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="proofOfAddress">
                Proof of address
              </label>
              <div className="file-input">
                <button type="button" onClick={() => triggerFileInput('proofOfAddress')}>Choose File</button>
                <input
                  type="file"
                  id="proofOfAddress"
                  name="proofOfAddress"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  required
                />
                <span className="file-status">{formData.proofOfAddress ? formData.proofOfAddress.name : 'No file chosen'}</span>
              </div>
              {errors.proofOfAddress && <span className="error">{errors.proofOfAddress}</span>}
            </div>
          </div>
        </div>
        <div className="form-actions">
            <button type="submit" className="save-button">Save</button>
            <button type="submit" className="apply-button">Apply</button>
          </div>
      </form>
    </div>
    
  );
};

export default DriverApplicationForm;
