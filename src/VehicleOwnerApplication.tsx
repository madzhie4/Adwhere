import './VehicleOwnerApplication.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaBars, FaCar, FaInfoCircle, FaChevronDown } from 'react-icons/fa';

interface FormData {
    vehicleType: string;
    carMake: string;
    nextOfKinName: string;
    nextOfKinSurname: string;
    nextOfKinId: string;
    relationship: string;
}

const VehicleOwnerApplication: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        vehicleType: '',
        carMake: '',
        nextOfKinName: '',
        nextOfKinSurname: '',
        nextOfKinId: '',
        relationship: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.vehicleType) newErrors.vehicleType = '\nVehicle type is required';
        if (!formData.carMake) newErrors.carMake = '\nCar make is required';
        if (!formData.nextOfKinName) newErrors.nextOfKinName = '\nNext of kin name is required';
        if (!formData.nextOfKinSurname) newErrors.nextOfKinSurname = '\nNext of kin surname is required';
        if (!formData.nextOfKinId) newErrors.nextOfKinId = '\nNext of kin ID/Passport number is required';
        if (!formData.relationship) newErrors.relationship = '\nRelationship with next of kin is required';
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
                        <label htmlFor="vehicleType">Vehicle type</label>
                        <input
                            type="text"
                            id="vehicleType"
                            name="vehicleType"
                            placeholder="e.g. Hatchback"
                            value={formData.vehicleType}
                            onChange={handleChange}
                            required
                        />
                        <FaInfoCircle className="info-icon" />
                        {errors.vehicleType && <div className="error">{errors.vehicleType}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="carMake">Car make</label>
                        <input
                            type="text"
                            id="carMake"
                            name="carMake"
                            placeholder="e.g. Mazda or Ford"
                            value={formData.carMake}
                            onChange={handleChange}
                            required
                        />
                        <FaInfoCircle className="info-icon" />
                        {errors.carMake && <div className="error">{errors.carMake}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="nextOfKinName">Next of kin name</label>
                        <input
                            type="text"
                            id="nextOfKinName"
                            name="nextOfKinName"
                            placeholder="e.g. Susan"
                            value={formData.nextOfKinName}
                            onChange={handleChange}
                            required
                        />
                        <FaInfoCircle className="info-icon" />
                        {errors.nextOfKinName && <div className="error">{errors.nextOfKinName}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="nextOfKinSurname">Next of kin surname</label>
                        <input
                            type="text"
                            id="nextOfKinSurname"
                            name="nextOfKinSurname"
                            placeholder="e.g. Williams"
                            value={formData.nextOfKinSurname}
                            onChange={handleChange}
                            required
                        />
                        <FaInfoCircle className="info-icon" />
                        {errors.nextOfKinSurname && <div className="error">{errors.nextOfKinSurname}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="nextOfKinId">Next of kin ID number</label>
                        <input
                            type="text"
                            id="nextOfKinId"
                            name="nextOfKinId"
                            placeholder="e.g. 1234567891234"
                            value={formData.nextOfKinId}
                            onChange={handleChange}
                            required
                        />
                        <FaInfoCircle className="info-icon" />
                        {errors.nextOfKinId && <div className="error">{errors.nextOfKinId}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="relationship">Relationship with next of kin</label>
                        <select
                            id="relationship"
                            name="relationship"
                            value={formData.relationship}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select relationship</option>
                            <option value="Mother">Mother</option>
                            <option value="Father">Father</option>
                            <option value="Sibling">Sibling</option>
                            <option value="Spouse">Spouse</option>
                            <option value="Friend">Friend</option>
                            <option value="Other">Other</option>
                        </select>
                        <FaInfoCircle className="info-icon" />
                        {errors.relationship && <div className="error">{errors.relationship}</div>}
                    </div>
                    <div className="form-group-end">
                        <FaCar className="car-icon" onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VehicleOwnerApplication;
