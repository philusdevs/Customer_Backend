import React from 'react';

const ConfirmModal = ({ isOpen, onCancel, onConfirm }) => (
  isOpen && (
    <div>
      <p>Are you sure you want to delete this customer?</p>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  )
);

export default ConfirmModal;
