import React, { useState, useEffect } from 'react';
import { MoleImg } from '../../../../Components/Icons/MoleImg';

export const Game = ({ time, moles, setGame, score, setScore }) => {
  const SizeOfBoard = 10;
  const RandomArray = [...new Array(moles)].map(() =>
    Math.round(Math.random() * SizeOfBoard)
  );
  const [timer, setTimer] = useState({ minutes: time, seconds: 0 });
  const [field, setField] = useState(RandomArray);
  const [correctField, setCorrectField] = useState(false);
  const [wrongField, setWrongField] = useState(false);

  useEffect(() => {
    setTimeout(
      setField(RandomArray) && setCorrectField(false) && setWrongField(false),
      5000
    );

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

  const CorrectClick = () => {
    setScore(score + 1);
    setCorrectField(true);
  };

  const WrongClick = () => {
    setWrongField(true);
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
                  <div
                    key={n}
                    className={`mole-field ${
                      correctField ? 'correct-field' : ''
                    }`}
                    onClick={() => CorrectClick()}
                  >
                    <MoleImg />
                  </div>
                );
              } else {
                return (
                  <div
                    key={n}
                    className={`mole-field ${wrongField ? 'wrong-field' : ''}`}
                    onClick={() => WrongClick()}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};
