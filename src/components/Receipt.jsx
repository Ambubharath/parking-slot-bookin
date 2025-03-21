import React from 'react';

function Receipt({ booking }) {
  return (
    <div className="receipt">
      <h3>Booking Receipt</h3>
      <p>Date: {booking.date}</p>
      <p>Vehicle: {booking.vehicle}</p>
      <p>Slot: {booking.slot}</p>
      <p>Thank you for using our service!</p>
    </div>
  );
}

export default Receipt;
