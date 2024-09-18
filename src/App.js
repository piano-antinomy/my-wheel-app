import React, { useState } from 'react';
import Wheel from './components/Wheel';
import PersonDisplay from './components/PersonDisplay';
import people from './data/people';
import './styles.css';

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [remainingPeople, setRemainingPeople] = useState(people);

  const handleSelection = (person) => {
    setSelectedPerson(person);
    setRemainingPeople(remainingPeople.filter(p => p.id !== person.id));
  };

  return (
    <div className="App">
      <img src="/images/Snapchat-Logo.png" alt="Snap Logo" className="snap-logo" />
      <h1>Know the team! </h1>
      <div className="content-container">
        {remainingPeople.length > 0 ? (
          <Wheel people={remainingPeople} onSelection={handleSelection} />
        ) : (
          <p>All people have been selected!</p>
        )}
        <div className="person-display-container">
          {selectedPerson && <PersonDisplay person={selectedPerson} />}
        </div>
      </div>
    </div>
  );
}

export default App;
