import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNext = (vehicleType) => {
    navigate(`/slot/${id}?vehicle=${vehicleType}`);
  };

  return (
    <div className="booking-page">
      <h2>Booking for Parking Space {id}</h2>
      <BookingForm onSubmit={handleNext} />
    </div>
  );
}

export default BookingPage;
