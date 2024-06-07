import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { db } from '../../DB/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "contacts"), form);
      alert("Form submitted successfully");
      setForm({ firstName: '', lastName: '', email: '', message: '' });
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error submitting form");
    }
  };

  return (
    <div className="contactContainer ">
      <Navbar />
      <div className="contactWrapper">
        <div className="contactInfo">
          <h2>Contact us</h2>
          <p>Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.</p>
          <div className="contactDetails">
            <p><strong>Email:</strong> <a href="mailto:webgi215.official@gmail.com">webgi215.official@gmail.com</a></p>
            <p><strong>Phone:</strong> +91-9342570232</p>
          </div>
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="firstName">First name*</label>
              <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label htmlFor="lastName">Last name*</label>
              <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label htmlFor="message">What can we help you with?</label>
              <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submitButton">Submit</button>
          </form>
        </div>
      </div>
      <div className="confotter"></div>
      < Footer />
    </div>
  );
};

export default Contact;
