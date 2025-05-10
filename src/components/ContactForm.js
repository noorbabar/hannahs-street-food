import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {formSubmitted && (
        <div className="success-message">
          Thanks for your message! We will get back to you soon.
        </div>
      )}
      
      <div>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>
      
      <div>
        <label htmlFor="phone">Phone</label>
        <input 
          type="tel" 
          id="phone" 
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="subject">Subject</label>
        <input 
          type="text" 
          id="subject" 
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      
      <div className="full-width">
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          rows="5" 
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="full-width">
        <button type="submit" className="btn">Send Message</button>
      </div>
    </form>
  );
}

export default ContactForm;
