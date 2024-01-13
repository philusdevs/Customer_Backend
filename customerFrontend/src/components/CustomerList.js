
import React from 'react';
const CustomerList = ({ customers }) => (
  <div>
    <h2>Customer List</h2>
    {customers.length > 0 ? (
      <ul>
        {customers.map((customer) => (
          <li key={customer.customerID}>
            <p>ID: {customer.customerID}</p>
            <p>Name: {customer.firstName} {customer.lastName}</p>
            <p>Username: {customer.username}</p>
            <p>Email: {customer.emailAddress}</p>
            <p>Date of Birth: {customer.dateOfBirth}</p>
            <p>Age: {customer.age}</p>
            <p>Created: {customer.created}</p>
            <p>Edited: {customer.edited ? customer.edited : 'Not edited'}</p>
            <p>Is Deleted: {customer.isDeleted ? 'Yes' : 'No'}</p>
            <hr />
          </li>
        ))}
      </ul>
    ) : (
      <p>No customers available.</p>
    )}
  </div>
);

export default CustomerList;
