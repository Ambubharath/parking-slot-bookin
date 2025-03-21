import React from 'react';

function Confirmation({ booking, onPay }) {
  return (
    <div className="confirmation">
      <h3>Booking Confirmation</h3>
      <p>Date: {booking.date}</p>
      <p>Vehicle: {booking.vehicle}</p>
      <p>Slot: {booking.slot}</p>
      <button onClick={onPay}>Pay</button>
    </div>
  );
}

export default Confirmation;
