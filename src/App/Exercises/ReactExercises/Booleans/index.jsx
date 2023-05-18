import React, { useState } from 'react';
import './styles.css';

export const Booleans = () => {
  const [number, setNumber] = useState(0);

  const checkResult = (number) => {
    if (number <= 0) {
      return 'za mały promień';
    }
    if (number > 10) {
      return 'za duży promień';
    }

    if (number % 2) {
      return 'liczba jest nieparzysta';
    }

    const field = Math.PI * Math.pow(number, 2);
    return (
      <p>
        Pole koła o promoeniu {number} wynosi {field.toFixed(3)}
      </p>
    );
  };

  return (
    <div>
      <p>Wprowadź promień koła</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>{checkResult(Number(number))}</div>
    </div>
  );
};
