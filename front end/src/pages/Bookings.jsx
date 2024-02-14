import React, { useState } from 'react';

const styles = {
  eventRegistrationContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '400px',
    margin: 'auto',
  },
  h2: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  /* Added styles for email field */
  emailInput: {
    /* Customize the styles for the email input field */
  },
};

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    eventDate: '',
    eventType: '',
    description: '',
    headCount: '',
    cateringService: false,
    email: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your event registration logic here (e.g., API call, validation, etc.)
    console.log('Form Data:', formData);
    // Reset form after submission
    setFormData({
      eventDate: '',
      eventType: '',
      description: '',
      headCount: '',
      cateringService: false,
      email: '',
    });
  };

  return (
    <div style={styles.eventRegistrationContainer}>
      <h2 style={styles.h2}>Event Registration</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
         
      <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ ...styles.input, ...styles.emailInput }}
          />
        </label>
        <label style={styles.label}>
          Event Date:
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Event Type:
          <input
            type="text"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Head Count:
          <input
            type="number"
            name="headCount"
            value={formData.headCount}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        
        <label style={styles.label}>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={styles.input}
          ></textarea>
        </label>
       
       
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
