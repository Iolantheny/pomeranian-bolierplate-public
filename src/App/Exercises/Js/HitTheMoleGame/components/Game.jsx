import React, { useState, useEffect } from 'react';
import { FieldWithMole } from './FieldWithMole';
import { EmptyField } from './EmptyField';

export const Game = ({ time, moles, setGame, score, setScore }) => {
  let SizeOfBoard = 10;

  if (moles === 2) {
    SizeOfBoard = 15;
  }

  if (moles === 3) {
    SizeOfBoard = 20;
  }

  const RandomArray = [...new Array(moles)].map(() =>
    Math.round(Math.random() * (SizeOfBoard - 1))
  );
  const [timer, setTimer] = useState({ minutes: time, seconds: 0 });
  const [field, setField] = useState(RandomArray);

  useEffect(() => {
    if (moles === 1) {
      setTimeout(() => setField(RandomArray), 1000);
    }
    if (moles === 2) {
      setTimeout(() => setField(RandomArray), 500);
    }

    if (moles === 3) {
      setTimeout(() => setField(RandomArray), 350);
    }

    setTimeout(() => {
      if (timer.seconds > 0) {
        setTimer((prev) => ({ ...prev, seconds: timer.seconds - 1 }));
      }
      if (timer.seconds === 0) {
        if (timer.minutes === 0) {
          setGame(false);
        } else {
          setTimer({ minutes: timer.minutes - 1, seconds: 59 });
        }
      }
    }, 1000);
  }, [timer]);

  const EndGame = () => {
    setGame(false);
  };

  return (
    <div className="molegame-start-content">
      <div>
        <div className="molegame-start-settings">
          <p>CZAS DO KOŃCA</p>
          <div className="molegame-setting">
            {timer.minutes} : {timer.seconds}
          </div>
        </div>
        <div className="molegame-start-settings">
          <p>WYNIK</p>
          <div className="molegame-setting">{score}</div>
        </div>
        <div className="molegame-start-settings">
          <p>PRZYCISKI STERUJĄCE</p>
          <button onClick={() => EndGame()} className="game-btn-active">
            STOP
          </button>
        </div>
        <div className="fields-container">
          {Array(SizeOfBoard)
            .fill()
            .map((_, n) => {
              if (field.includes(n)) {
                return (
                  <FieldWithMole key={n} setScore={setScore} score={score} />
                );
              } else {
                return <EmptyField key={n} setScore={setScore} score={score} />;
              }
            })}
        </div>
      </div>
    </div>
  );
};
