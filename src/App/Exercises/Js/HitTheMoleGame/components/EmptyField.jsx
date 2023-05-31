import { useEffect, useState } from 'react';

export const EmptyField = ({ setScore, score }) => {
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    setTimeout(() => setWrong(false), 300);
  });

  const CorrectClick = () => {
    setScore(score - 1);
    setWrong(true);
  };

  return (
    <div
      className={`mole-field ${wrong ? 'wrong-field' : ''}`}
      onClick={() => CorrectClick()}
    />
  );
};
