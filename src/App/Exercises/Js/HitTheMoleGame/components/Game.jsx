import React, { useState, useEffect } from 'react';

export const Game = ({ time, moles, setGame, score }) => {
  const [timer, setTimer] = useState({ minutes: time, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer.seconds > 0) {
        setTimer((prev) => ({ ...prev, seconds: timer.seconds - 1 }));
      }
      if (timer.seconds === 0) {
        if (timer.minutes === 0) {
          clearInterval(setTimer(interval));
        } else {
          setTimer({ minutes: timer.minutes - 1, seconds: 59 });
        }
      }
    }, 1000);
  }, [timer]);

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
          <button onClick={() => setGame(false)} className="game-btn-active">
            STOP
          </button>
        </div>
      </div>
    </div>
  );
};
