import React from 'react';

function PersonDisplay({ person }) {
  return (
    <div className="person-display">
      <img src={person.photo} alt={person.name} />
      <h2>{person.name}</h2>
      <p>{person.intro}</p>
    </div>
  );
}

export default PersonDisplay;
