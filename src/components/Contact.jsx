import React, { useState } from 'react';
import './Contact.css'; // Assuming you have a separate CSS file for styles

function Contact() {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you would save the data, like sending it to a server or saving in local storage.
    console.log('User Data:', formData);

    // After submission, reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Optional: Show a success message or animation
    alert('Thank you for reaching out! We will get back to you soon.');

    // Additional code to handle form submission (like sending an email or saving to a database) can be added here.
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Name Input */}
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Message Input */}
          <div className="input-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
