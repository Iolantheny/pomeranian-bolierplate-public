import { useState } from 'react';
import { MoleImg } from '../../../../Components/Icons/MoleImg';

export const FieldWithMole = ({ setScore, score }) => {
  const [correct, setCorrect] = useState(false);

  const CorrectClick = () => {
    setScore(score + 1);
    setCorrect(true);
  };

  return (
    <div
      className={`mole-field ${correct ? 'correct-field' : ''}`}
      onClick={() => CorrectClick()}
    >
      <MoleImg />
    </div>
  );
};
