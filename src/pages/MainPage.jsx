import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';

const parkingSpaces = [
  { id: 1, name: 'Parking A', car: 5, bike: 10 },
  { id: 2, name: 'Parking B', car: 3, bike: 8 },
];

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <input type="text" placeholder="Search Parking..." />
      {parkingSpaces.map((space) => (
        <Banner key={space.id} space={space} onBook={() => navigate(`/booking/${space.id}`)} />
      ))}
    </div>
  );
}

export default MainPage;
