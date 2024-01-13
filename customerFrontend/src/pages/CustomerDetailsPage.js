import React from 'react';
import CustomerDetails from '../components/CustomerDetails';

const CustomerDetailsPage = ({ customer }) => (
  <div>
    <CustomerDetails customer={customer} />
  </div>
);

export default CustomerDetailsPage;