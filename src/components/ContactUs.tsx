// src/ContactUs.tsx
import React from 'react';
import './ContactUs.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const ContactUs: React.FC = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="contact-us-page">
                    <h2 className="title">Contact Us</h2>
                    <div className="contact-container">
                        <div className="contact-info">
                            <p>
                                We'd love to hear from you! Whether you have a question about our services,
                                need assistance with a booking, or just want to share your feedback, our team is here to help.
                                Please fill out the form below with your details and message, and we'll get back to you as soon as possible.
                                You can also reach us at the number below. Thank you for choosing us for your transportation needs
                                and supporting our mission to create safer rides for women.
                            </p>
                            <ul>
                                <li><strong>Call</strong><br />+91 98765</li>
                                <li><strong>Email</strong><br />info@example.com</li>
                                <li><strong>Address</strong><br />Lorem ipsum dolor sit</li>
                            </ul>
                            <div className="social-media">
                                <p>Follow</p>
                                <div className="icons">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn />
                                    </a>
                                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                        <FaYoutube />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone" placeholder="Phone Number" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" placeholder="Your Message..." required></textarea>
                                </div>
                                <button type="submit" className="submit-button">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
