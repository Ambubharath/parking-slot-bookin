import React from 'react';

function Banner({ space, onBook }) {
  return (
    <div className="banner">
      <h3>{space.name}</h3>
      <p>Cars: {space.car} | Bikes: {space.bike}</p>
      <button onClick={onBook}>Book</button>
    </div>
  );
}

export default Banner;
