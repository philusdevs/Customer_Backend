import React, { useState } from 'react';

const CustomerForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    dateOfBirth: '',
    age: 0, 
    created: '',
    edited: null,
    isDeleted: false,

  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Create a New Customer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email Address:
          <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </label>
        <br />
        <label>
          Is Deleted:
          <input type="checkbox" name="isDeleted" checked={formData.isDeleted} onChange={handleChange} />
        </label>
        <br />
        <br />
        <button type="submit">Create Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;
