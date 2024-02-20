import React, { useState } from 'react';
import './AuthForm.css'

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    gstNumber: '',
    companyName: '',
    companyWebsite: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        GST Number:
        <input
          type="text"
          name="gstNumber"
          value={formData.gstNumber}
          onChange={handleChange}
        />
      </label>

      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </label>

      <label>
        Company Website:
        <input
          type="text"
          name="companyWebsite"
          value={formData.companyWebsite}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CompanyForm;
