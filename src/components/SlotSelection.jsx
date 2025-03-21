import React, { useState } from 'react';

function SlotSelection({ onConfirm }) {
  const [slot, setSlot] = useState('');

  const handleConfirm = () => {
    if (slot) {
      onConfirm(slot);
    } else {
      alert('Please enter a valid slot number.');
    }
  };

  return (
    <div className="slot-selection">
      <h3>Select Your Slot</h3>
      <input
        type="text"
        placeholder="Enter Slot Number"
        value={slot}
        onChange={(e) => setSlot(e.target.value)}
      />
      <button onClick={handleConfirm}>Confirm Slot</button>
    </div>
  );
}

export default SlotSelection;
