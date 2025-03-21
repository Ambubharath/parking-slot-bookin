import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/slot.css';

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
    <div className="slot-container">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">Select Slot for Parking {id}</h1>
      <h2 className="text-xl mb-4">Select Your Slot</h2>

      {/* Slot Grid */}
      <div className="slot-grid">
        {Array.from({ length: totalSlots }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => selectSlot(index + 1)}
            className={`slot-button ${
              selectedSlot === index + 1 ? 'slot-selected' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Confirm Button */}
      <button onClick={confirmSlot} className="confirm-button">
        ✔
      </button>
    </div>
  );
};

export default SlotPage;
