// src/ContactUs.tsx
import React from 'react';
import './ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const ContactUs: React.FC = () => {
    return (
        <div className="content">
            <div className="contact-us-page">
                <div className="contact-container">
                    <div className="contact-info">
                        <h1 className="contact-title">Contact Us</h1>
                        <p>
                            We'd love to hear from you! Whether you have a question about our services,
                            need assistance with a booking, or just want to share your feedback, our team is here to help.
                            Please fill out the form below with your details and message, and we'll get back to you as soon as possible.
                            You can also reach us at the number below. Thank you for choosing us for your transportation needs
                            and supporting our mission to create safer rides for women.
                        </p>
                        <ul>
                            <li className="horizon-icons">
                                <FaPhone className="icon" />
                                <div>
                                    <strong>Call</strong><br />+91 98765
                                </div>
                            </li>
                            <li className="horizon-icons">
                                <FaEnvelope className="icon" />
                                <div>
                                    <strong>Email</strong><br />info@example.com
                                </div>
                            </li>
                            <li className="horizon-icons">
                                <FaMapMarkerAlt className="icon" />
                                <div>
                                    <strong>Address</strong><br />Cape Town
                                </div>
                            </li>
                        </ul>
                        <div className="social-media">
                            <p>Follow</p>
                            <div className="icons">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <div className="form-group-contact">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Name" required />
                            </div>
                            <div className="form-group-contact">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" placeholder="Phone Number" required />
                            </div>
                            <div className="form-group-contact">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Email" required />
                            </div>
                            <div className="form-group-contact">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Your Message..." required></textarea>
                            </div>
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
