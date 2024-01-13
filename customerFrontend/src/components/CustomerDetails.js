import React from 'react';

const CustomerDetails = ({ customer }) => (
  <div>
    <h2>Customer Details</h2>
    {customer ? (
      <div>
        <p>ID: {customer.customerID}</p>
        <p>Name: {customer.firstName} {customer.lastName}</p>
        <p>Username: {customer.username}</p>
        <p>Email: {customer.emailAddress}</p>
        <p>Date of Birth: {customer.dateOfBirth}</p>
        <p>Age: {customer.age}</p>
        <p>Created: {customer.created}</p>
        <p>Edited: {customer.edited ? customer.edited : 'Not edited'}</p>
        <p>Is Deleted: {customer.isDeleted ? 'Yes' : 'No'}</p>
      </div>
    ) : (
      <p>No customer details available.</p>
    )}
  </div>
);

export default CustomerDetails;
