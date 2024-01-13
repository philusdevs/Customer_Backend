import React from 'react';
import CustomerForm from '../components/CustomerForm';

const CustomerFormPage = ({ onSubmit }) => (
  <div>
    <CustomerForm onSubmit={onSubmit} />
  </div>
);

export default CustomerFormPage;

