// src/ClientRegistration.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import './ClientRegistration.css';
import menuIcon from './icons/menu.png';

interface FormData {
    businessName: string;
    representativeName: string;
    phone: string;
    representativeSurname: string;
    gender: string;
    city: string;
    zip: string;
    province: string;
    address: string;
}

const ClientRegistration: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        businessName: '',
        representativeName: '',
        phone: '',
        representativeSurname: '',
        gender: '',
        city: '',
        zip: '',
        province: '',
        address: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.businessName) newErrors.businessName = 'Business name is required';
        if (!formData.representativeName) newErrors.representativeName = 'Representative name is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!/^\d+$/.test(formData.phone)) newErrors.phone = 'Phone number must be numeric';
        if (!formData.representativeSurname) newErrors.representativeSurname = 'Representative surname is required';
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
        <div className="registration-container">
            <img src={menuIcon} alt="menu" className="menu-icon" />
            <h2 className="registration-title">Client Registration Form</h2>
            <form className="registration-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="businessName">Business, Organization, Artist, Channel etc. name</label>
                    <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        placeholder="e.g. Burger King, WHO, Lil Wayne, Hot Ink"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                    />
                    {errors.businessName && <span className="error">{errors.businessName}</span>}
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="representativeName">Client representative name</label>
                        <input
                            type="text"
                            id="representativeName"
                            name="representativeName"
                            placeholder="e.g. Name"
                            value={formData.representativeName}
                            onChange={handleChange}
                            required
                        />
                        {errors.representativeName && <span className="error">{errors.representativeName}</span>}
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
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="representativeSurname">Client representative surname</label>
                    <input
                        type="text"
                        id="representativeSurname"
                        name="representativeSurname"
                        placeholder="e.g. Surname"
                        value={formData.representativeSurname}
                        onChange={handleChange}
                        required
                    />
                    {errors.representativeSurname && <span className="error">{errors.representativeSurname}</span>}
                </div>
                <div className="form-row">
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
                </div>
                <div className="form-group">
                    <h3>Location</h3>
                </div>
                <div className="form-row">
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
                        <option value="eastern-cape">Eastern Cape</option>
                        <option value="free-state">Free State</option>
                        <option value="gauteng">Gauteng</option>
                        <option value="kwazulu-natal">KwaZulu-Natal</option>
                        <option value="limpopo">Limpopo</option>
                        <option value="mpumalanga">Mpumalanga</option>
                        <option value="northern-cape">Northern Cape</option>
                        <option value="north-west">North West</option>
                        <option value="western-cape">Western Cape</option>
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
                    ></textarea>
                    {errors.address && <span className="error">{errors.address}</span>}
                </div>
                <div className="form-row">
                    <button type="button" className="home-button">Home</button>
                    <button type="submit" className="submit-button">Register</button>

                </div>
            </form>
        </div>
    );
};

export default ClientRegistration;
