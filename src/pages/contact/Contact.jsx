import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you would typically handle form submission, e.g., sending data to a server.
  };

  return (
    <div className="contactContainer">
      <Navbar />
      <div className="contactWrapper">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contactForm">
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submitButton">Submit</button>
        </form>
        <div className="contactDetails">
          <h3>Our Contact Information</h3>
          <p><strong>Email:</strong> <a href="mailto:webgi215.official@gmail.com">webgi215.official@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919342570232">+91-9342570232</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
