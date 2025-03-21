import React from 'react';
import { useLocation } from 'react-router-dom';

const ReceiptPage = () => {
  const location = useLocation();
  const { slot, id } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">🧾 Booking Receipt</h1>
      <div className="bg-white p-6 rounded shadow-md w-96 text-center">
        <p className="text-xl mb-2">🚗 Parking ID: <strong>{id}</strong></p>
        <p className="text-xl mb-2">🅿️ Slot Number: <strong>{slot}</strong></p>
        <p className="text-lg text-green-600 mt-4">✅ Your slot has been successfully booked!</p>
      </div>
    </div>
  );
};

export default ReceiptPage;
