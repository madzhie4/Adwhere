import './index.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

interface FormData {
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const Signup: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.surname) newErrors.surname = 'Surname is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

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
        <div className="signup-form">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="name">Name</label>
                    <div className="input-wrapper">
                        <FaUser className="icon" />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="input-container">
                    <label htmlFor="surname">Surname</label>
                    <div className="input-wrapper">
                        <FaUser className="icon" />
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            placeholder="Surname"
                            value={formData.surname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {errors.surname && <span className="error">{errors.surname}</span>}
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <div className="input-wrapper">
                        <FaEnvelope className="icon" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="username@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="input-container">
                    <label htmlFor="phone">Phone</label>
                    <div className="input-wrapper">
                        <FaPhone className="icon" />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <div className="input-wrapper">
                        <FaLock className="icon"/>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <div className="password-toggle-icon">
                            {showConfirmPassword ? <FaEyeSlash/> : <FaEye/>}
                        </div>
                    </div>
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="input-container">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="input-wrapper">
                        <FaLock className="icon"/>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <div className="password-toggle-icon">
                            {showConfirmPassword ? <FaEyeSlash/> : <FaEye/>}
                        </div>
                    </div>
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
