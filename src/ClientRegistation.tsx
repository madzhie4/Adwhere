import './ClientRegistration.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import {FaBars, FaChevronDown, FaHome} from 'react-icons/fa';

interface FormData {
    businessName: string;
    clientName: string;
    clientSurname: string;
    phone: string;
    gender: string;
    city: string;
    zip: string;
    province: string;
    address: string;
}

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        businessName: '',
        clientName: '',
        clientSurname: '',
        phone: '',
        gender: '',
        city: '',
        zip: '',
        province: '',
        address: '',
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
        if (!formData.businessName) newErrors.businessName = 'Business name is required';
        if (!formData.clientName) newErrors.clientName = 'Client name is required';
        if (!formData.clientSurname) newErrors.clientSurname = 'Client surname is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.zip) newErrors.zip = 'ZIP code is required';
        if (!formData.province) newErrors.province = 'Province is required';
        if (!formData.address) newErrors.address = 'Address is required';
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
        <div className="registration-form-page">
            <header className="registration-form-header">
                <FaBars className="menu-icon" />
                <h1>Client</h1>
            </header>
            <div className="registration-form-content">
                <div className="title-container">
                    <h2>Application form</h2>
                    <button className="dropdown-button">
                        Applications <FaChevronDown/>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="businessName">Business, Organization, Artist, Channel, etc. name</label>
                        <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            placeholder="e.g. Burger King, WHO, Lil young, Hot link"
                            value={formData.businessName}
                            onChange={handleChange}
                            required
                        />
                        {errors.businessName && <div className="error">{errors.businessName}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="clientName">Client representative name</label>
                        <input
                            type="text"
                            id="clientName"
                            name="clientName"
                            placeholder="e.g. Name"
                            value={formData.clientName}
                            onChange={handleChange}
                            required
                        />
                        {errors.clientName && <div className="error">{errors.clientName}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="e.g. Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        {errors.phone && <div className="error">{errors.phone}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="clientSurname">Client representative surname</label>
                        <input
                            type="text"
                            id="clientSurname"
                            name="clientSurname"
                            placeholder="e.g. Surname"
                            value={formData.clientSurname}
                            onChange={handleChange}
                            required
                        />
                        {errors.clientSurname && <div className="error">{errors.clientSurname}</div>}
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <div className="gender-options">
                            <label htmlFor="male">M</label>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="M"
                                checked={formData.gender === 'M'}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="female">F</label>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="F"
                                checked={formData.gender === 'F'}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="other">O</label>
                            <input
                                type="radio"
                                id="other"
                                name="gender"
                                value="O"
                                checked={formData.gender === 'O'}
                                onChange={handleChange}
                                required
                            />

                        </div>
                        {errors.gender && <div className="error">{errors.gender}</div>}
                    </div>
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
                        {errors.city && <div className="error">{errors.city}</div>}
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
                        {errors.zip && <div className="error">{errors.zip}</div>}
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
                        {errors.province && <div className="error">{errors.province}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="e.g. 57 Buitengracht Street"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                        {errors.address && <div className="error">{errors.address}</div>}
                    </div>

                    <button type="submit">Register</button>

                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
