import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios'; // Ensure axios is imported
import './DriverApplicationForm.css'; // Update to include the correct path for your CSS file

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
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
  };

  const openCamera = async () => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
      console.error('Failed to get canvas context');
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    video.play();

    document.body.appendChild(video);

    video.addEventListener('click', () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], 'selfie.jpg', { type: 'image/jpeg' });
          setFormData({ ...formData, selfie: file });
          video.remove();
        }
      }, 'image/jpeg');
    });
  };

  const triggerFileInput = (inputId: string) => {
    document.getElementById(inputId)?.click();
  };

  return (
    <div className="driver-application-container">
      <form onSubmit={handleSubmit} className="driver-application-form">
        <div className="header">
          <h1>Driver</h1>
          <h2>Application form</h2>
          <div className="applications-button">Applications ▼</div>
        </div>
        
        <div className="form-group">
          <label htmlFor="nextOfKinName">Next of kin name</label>
          <input
            type="text"
            id="nextOfKinName"
            name="nextOfKinName"
            value={formData.nextOfKinName}
            onChange={handleInputChange}
            placeholder="e.g. Susan"
          />
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
          />
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
          />
        </div>

        <div className="form-group">
          <label htmlFor="selfie">
            Selfie
            <span className="info-icon">ⓘ</span>
          </label>
          <div className="file-input">
            {/* <button type="button" onClick={openCamera}>Upload</button> */}
            <button type="button" onClick={() => triggerFileInput('selfie')}>Choose File</button>
            <input
              type="file"
              id="selfie"
              name="selfie"
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <span className="file-status">{formData.selfie ? formData.selfie.name : 'No file chosen'}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="criminalRecordCheck">
            Criminal record check certificate
            <span className="info-icon">ⓘ</span>
          </label>
          <div className="file-input">
            <button type="button" onClick={() => triggerFileInput('criminalRecordCheck')}>Choose File</button>
            <input
              type="file"
              id="criminalRecordCheck"
              name="criminalRecordCheck"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <span className="file-status">{formData.criminalRecordCheck ? formData.criminalRecordCheck.name : 'No file chosen'}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="drivingEvaluationCertificate">
            Driving evaluation certificate
            <span className="info-icon">ⓘ</span>
          </label>
          <div className="file-input">
            <button type="button" onClick={() => triggerFileInput('drivingEvaluationCertificate')}>Choose File</button>
            <input
              type="file"
              id="drivingEvaluationCertificate"
              name="drivingEvaluationCertificate"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <span className="file-status">{formData.drivingEvaluationCertificate ? formData.drivingEvaluationCertificate.name : 'No file chosen'}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="drivingLicense">
            Driving license with PrDP front and back
            <span className="info-icon">i</span>
          </label>
          <div className="file-input">
            <button type="button" onClick={() => triggerFileInput('drivingLicense')}>Choose File</button>
            <input
              type="file"
              id="drivingLicense"
              name="drivingLicense"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <span className="file-status">{formData.drivingLicense ? formData.drivingLicense.name : 'No file chosen'}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="certifiedId">
            Certified ID
            <span className="info-icon">i</span>
          </label>
          <div className="file-input">
            <button type="button" onClick={() => triggerFileInput('certifiedId')}>Choose File</button>
            <input
              type="file"
              id="certifiedId"
              name="certifiedId"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <span className="file-status">{formData.certifiedId ? formData.certifiedId.name : 'No file chosen'}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="proofOfAddress">
            Proof of address
            <span className="info-icon">i</span>
          </label>
          <div className="file-input">
            <button type="button" onClick={() => triggerFileInput('proofOfAddress')}>Choose File</button>
            <input
              type="file"
              id="proofOfAddress"
              name="proofOfAddress"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <span className="file-status">{formData.proofOfAddress ? formData.proofOfAddress.name : 'No file chosen'}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleTextChange}
            placeholder="Describe your driving experience"
          />
        </div>

        <div className="form-actions">
        <button type="button" className="save-button">Save</button>
        <button type="button" className="apply-button">Apply</button>
      </div>
      </form>
    </div>
  );
};

export default DriverApplicationForm;
