import React, { ChangeEvent, FormEvent, useState } from 'react';

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="about-us">
      <div className="menu-icon">☰</div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <h1>About Us</h1>
      <p className="about-text">
        Welcome to [Company Name], your premier destination for innovative solutions and
        exceptional service. Founded in [Year], we are dedicated to delivering top-notch products
        and unparalleled customer support. Our team of experts is passionate about pushing the
        boundaries of what's possible, ensuring that our clients receive the best the industry has to
        offer. Whether you're seeking cutting-edge technology, creative strategies, or reliable
        partnerships, [Company Name] is here to help you achieve your goals and exceed your
        expectations.
      </p>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Whether you have a question about our services, need assistance with a booking, or just want to share your feedback, our team is here to help. Please fill out the form below, and we'll get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message..." onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
        <div className="contact-info">
          <p>Call: +91 80785</p>
          <p>Email: info@example.com</p>
          <p>Address: Lorem ipsum dolor sit</p>
          <div className="social-icons">
            {/* Add social media icons here */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
