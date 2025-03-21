import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SlotPage = () => {
  const { id } = useParams(); // Get parking ID from URL
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Total slots (example: 30 slots)
  const totalSlots = 30;

  // Handle slot selection
  const selectSlot = (slot) => {
    setSelectedSlot(slot);
  };

  // Confirm slot selection and redirect to SuccessPage
  const confirmSlot = () => {
    if (selectedSlot !== null) {
      // Navigate to SuccessPage first
      navigate('/success', { state: { slot: selectedSlot, id } });

      // Automatically redirect to ReceiptPage after 2 seconds
      setTimeout(() => {
        navigate('/receipt', { state: { slot: selectedSlot, id } });
      }, 2000);
    } else {
      alert('Please select a slot before confirming.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">Select Slot for Parking {id}</h1>
      <h2 className="text-xl mb-4">Select Your Slot</h2>

      {/* Slot Grid */}
      <div className="grid grid-cols-6 gap-4 mb-4">
        {Array.from({ length: totalSlots }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => selectSlot(index + 1)}
            className={`w-12 h-12 flex items-center justify-center border border-gray-400 rounded ${
              selectedSlot === index + 1
                ? 'bg-green-500 text-white border-green-600' // Green when selected
                : 'bg-gray-200 hover:bg-blue-300' // Hover color
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Confirm Button */}
      <button
        onClick={confirmSlot}
        className="mt-4 w-12 h-12 bg-black text-white rounded-md hover:bg-gray-800 flex items-center justify-center"
      >
        ✔
      </button>
    </div>
  );
};

export default SlotPage;
