import React, { useState } from 'react';
import './styles.css';

export const Exercise3 = () => {
  const [number, setNumber] = useState();

  const Answer = number > 10 ? 'Tak' : 'Nie';

  return (
    <div className="exercise3">
      <h2>Czy A jest większe od 10?</h2>
      <input
        type="number"
        placeholder="A"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <p>{Answer}</p>
    </div>
  );
};
