import React, { useState } from 'react';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
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
    // Handle the form submission, e.g., send data to a server or payment gateway
    console.log('Form submitted:', formData);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        margin: '50px auto',
      }}
    >
      <h1>Payment Page</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#f4f4f4',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            marginBottom: '15px',
            textAlign: 'left',
          }}
        >
          <label style={{ display: 'block', marginBottom: '8px' }}>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Enter card number"
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              required
            />
          </label>
        </div>
        <div
          style={{
            marginBottom: '15px',
            textAlign: 'left',
          }}
        >
          <label style={{ display: 'block', marginBottom: '8px' }}>
            Card Holder:
            <input
              type="text"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
              placeholder="Enter card holder's name"
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              required
            />
          </label>
        </div>
        <div
          style={{
            marginBottom: '15px',
            textAlign: 'left',
          }}
        >
          <label style={{ display: 'block', marginBottom: '8px' }}>
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              pattern="\d\d/\d\d"
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              required
            />
          </label>
        </div>
        <div
          style={{
            marginBottom: '20px',
            textAlign: 'left',
          }}
        >
          <label style={{ display: 'block', marginBottom: '8px' }}>
            CVV:
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="Enter CVV"
              pattern="\d{3,4}"
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
