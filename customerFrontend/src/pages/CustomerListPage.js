import React, { useState } from 'react';
import CustomerList from '../components/CustomerList';
import ConfirmModal from '../components/ConfirmModal';

const CustomerListPage = ({ customers, onDeleteClick, onCustomerClick }) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleCloseModal = () => {
    setSelectedCustomer(null);
  };

  return (
    <div>
      <CustomerList customers={customers} onCustomerClick={handleCustomerClick} onDeleteClick={onDeleteClick} />
      <ConfirmModal isOpen={selectedCustomer !== null} onCancel={handleCloseModal} onConfirm={() => onDeleteClick(selectedCustomer)} />
    </div>
  );
};

export default CustomerListPage;
