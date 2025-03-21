import React, { useState } from 'react';

function BookingForm({ onSubmit }) {
  const [vehicleType, setVehicleType] = useState('car');

  const handleSubmit = () => {
    onSubmit(vehicleType);
  };

  return (
    <div className="booking-form">
      <h3>Select Vehicle Type</h3>
      <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
        <option value="car">Car</option>
        <option value="bike">Bike</option>
      </select>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default BookingForm;
