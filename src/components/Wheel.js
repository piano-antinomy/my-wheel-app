import React, { useState } from 'react';

function Wheel({ people, onSelection }) {
  const [rotating, setRotating] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    if (rotating) return;
    setRotating(true);
    const randomIndex = Math.floor(Math.random() * people.length);
    const selectedPerson = people[randomIndex];
    const newRotation = rotation + 1440 + (360 / people.length) * randomIndex;
    
    setRotation(newRotation);
    
    setTimeout(() => {
      setRotating(false);
      onSelection(selectedPerson);
    }, 5000); // Simulate wheel rotation for 5 seconds
  };

  const getColor = (index) => {
    const colors = [
      '#FF6B6B', // Red
      '#4ECDC4', // Teal
      '#45B7D1', // Sky Blue
      '#F7D794', // Light Yellow
      '#786FA6', // Purple
      '#FF8C42', // Orange
      '#3A7D44', // Green
      '#F64C72', // Pink
      '#2C3E50', // Navy Blue
      '#FFA07A', // Light Salmon
      '#7FDBDA', // Light Cyan
      '#9B59B6'  // Amethyst
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="wheel-container" onClick={handleClick}>
      <div 
        className={`wheel ${rotating ? 'rotating' : ''}`} 
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {people.map((person, index) => {
          const angle = 360 / people.length;
          const rotate = angle * index + angle / 2;
          return (
            <div 
              key={person.id} 
              className="wheel-item"
              style={{
                transform: `rotate(${angle * index}deg)`,
                backgroundColor: getColor(index),
              }}
            >
              <div className="wheel-item-content" style={{ transform: `rotate(${rotate}deg)` }}>
                {person.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="wheel-center"></div>
    </div>
  );
}

export default Wheel;
