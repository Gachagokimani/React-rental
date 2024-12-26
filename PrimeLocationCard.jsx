import React from 'react';
import './prime-location-card.css'; // Adjusted to import the correct CSS file

const PrimeLocationCard = ({ variant, title, description }) => {
  return (
    <div className={`card mb-4 shadow-sm location-card ${variant}`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  );
};

export default PrimeLocationCard;
