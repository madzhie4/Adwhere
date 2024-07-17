import './index.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { FaBars, FaCar, FaInfoCircle, FaChevronDown } from 'react-icons/fa';

interface FormData {
    licensePlate: string;
    vehiclePhotos: File | null;
    certifiedId: File | null;
    proofOfAddress: File | null;
    proofOfOwnership: File | null;
    vehicleRegistration: File | null;
    dekraCertificate: File | null;
}

const VehicleOwnerApplication2: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        licensePlate: '',
        vehiclePhotos: null,
        certifiedId: null,
        proofOfAddress: null,
        proofOfOwnership: null,
        vehicleRegistration: null,
        dekraCertificate: null,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [progress, setProgress] = useState<{ [key: string]: number }>({
        vehiclePhotos: 0,
        certifiedId: 0,
        proofOfAddress: 0,
        proofOfOwnership: 0,
        vehicleRegistration: 0,
        dekraCertificate: 0,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, files } = target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };


    const handleUpload = (name: string, file: File) => {
        const formData = new FormData();
        formData.append(name, file);

        axios.post('/upload-endpoint', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent: any) => {
                if (progressEvent.total) {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setProgress((prevProgress) => ({
                        ...prevProgress,
                        [name]: percentCompleted,
                    }));
                }
            },
        })
            .then((response: any) => {
                console.log(`${name} uploaded successfully`);
            })
            .catch((error: any) => {
                console.error(`Error uploading ${name}:`, error);
            });            
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            setFormData({
                ...formData,
                [name]: files[0],
            });
            handleUpload(name, files[0]);
        }
    };


    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.licensePlate) newErrors.licensePlate = 'License plate is required';
        if (!formData.vehiclePhotos) newErrors.vehiclePhotos = 'Photo of vehicle is required';
        if (!formData.certifiedId) newErrors.certifiedId = 'Certified ID is required';
        if (!formData.proofOfAddress) newErrors.proofOfAddress = 'Proof of address is required';
        if (!formData.proofOfOwnership) newErrors.proofOfOwnership = 'Proof of vehicle ownership is required';
        if (!formData.vehicleRegistration) newErrors.vehicleRegistration = 'Vehicle registration is required';
        if (!formData.dekraCertificate) newErrors.dekraCertificate = 'Dekra self-inspection certificate is required';
        return newErrors;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Form submitted:', formData);
            // Add your form submission logic here
        }
    };

    return (
        <div className="application-form-page">
            <header className="application-form-header">
                <FaBars className="menu-icon" />
                <h1>Vehicle Owner</h1>
            </header>
            <div className="application-form-content">
                <div className="title-container">
                    <h2>Application form</h2>
                    <button className="dropdown-button">
                        Applications <FaChevronDown />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="licensePlate">License plate</label>
                        <input
                            type="text"
                            id="licensePlate"
                            name="licensePlate"
                            placeholder="License plate"
                            value={formData.licensePlate}
                            onChange={handleChange}
                            required
                        />
                        <FaInfoCircle className="info-icon" />
                        {errors.licensePlate && <div className="error">{errors.licensePlate}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehiclePhotos">Photo of vehicle (All 4 sides)</label>
                        <input
                            type="file"
                            id="vehiclePhotos"
                            name="vehiclePhotos"
                            onChange={handleFileChange}
                            required
                        />
                        <FaInfoCircle className="info-icon" />
                        {errors.vehiclePhotos && <div className="error">{errors.vehiclePhotos}</div>}
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${progress.vehiclePhotos}%` }}></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="certifiedId">Certified ID</label>
                        <input
                            type="file"
                            id="certifiedId"
                            name="certifiedId"
                            onChange={handleFileChange}
                            required
                        />
                        <FaInfoCircle className="info-icon" />
                        {errors.certifiedId && <div className="error">{errors.certifiedId}</div>}
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${progress.certifiedId}%` }}></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="proofOfAddress">Proof of address</label>
                        <input
                            type="file"
                            id="proofOfAddress"
                            name="proofOfAddress"
                            onChange={handleFileChange}
                            required
                        />
                        <FaInfoCircle className="info-icon" />
                        {errors.proofOfAddress && <div className="error">{errors.proofOfAddress}</div>}
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${progress.proofOfAddress}%` }}></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="proofOfOwnership">Proof of vehicle ownership</label>
                        <input
                            type="file"
                            id="proofOfOwnership"
                            name="proofOfOwnership"
                            onChange={handleFileChange}
                            required
                        />
                        <FaInfoCircle className="info-icon" />
                        {errors.proofOfOwnership && <div className="error">{errors.proofOfOwnership}</div>}
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${progress.proofOfOwnership}%` }}></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicleRegistration">Vehicle registration</label>
                        <input
                            type="file"
                            id="vehicleRegistration"
                            name="vehicleRegistration"
                            onChange={handleFileChange}
                            required
                        />
                        <FaInfoCircle className="info-icon" />
                        {errors.vehicleRegistration && <div className="error">{errors.vehicleRegistration}</div>}
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${progress.vehicleRegistration}%` }}></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dekraCertificate">Dekra self-inspection certificate</label>
                        <input
                            type="file"
                            id="dekraCertificate"
                            name="dekraCertificate"
                            onChange={handleFileChange}
                            required
                        />
                        <FaInfoCircle className="info-icon" />
                        {errors.dekraCertificate && <div className="error">{errors.dekraCertificate}</div>}
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${progress.dekraCertificate}%` }}></div>
                        </div>
                    </div>
                    <div className="form-group-end">
                        <button type="button" className="save-button">Save</button>

                        <FaCar className="car-icon" onClick={handleSubmit}/>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default VehicleOwnerApplication2;
