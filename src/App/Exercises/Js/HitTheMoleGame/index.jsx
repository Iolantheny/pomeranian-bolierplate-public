import React, { useState } from 'react';
import './styles.css';
import { SettingButton } from './components/SettingButton';
import { Game } from './components/Game';

export const HitTheMoleGame = () => {
  const ChooseTime = [
    { value: 1, label: '1 minuta', isActive: true },
    { value: 2, label: '2 minuty', isActive: false },
    { value: 3, label: '3 minuty', isActive: false },
  ];
  const ChooseMoles = [
    { value: 1, label: '1 kret', isActive: true },
    { value: 2, label: '2 krety', isActive: false },
    { value: 3, label: '3 krety', isActive: false },
  ];

  const [game, setGame] = useState(false);
  const [time, setTime] = useState(1);
  const [moles, setMoles] = useState(1);
  const [score, setScore] = useState(0);

  const StartGame = () => {
    setScore(0);
    setGame(true);
  };

  return (
    <div className="molegame">
      <h2>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.{' '}
      </h2>
      {!game && (
        <>
          <div className="molegame-start-content">
            {score > 0 && (
              <p className="molegame-start-result">
                Gratulację! Twój wynik to {score} złapane krety w czasie {time}{' '}
                minut!
              </p>
            )}
            <div className="molegame-start-settings">
              <p>CZAS GRY</p>
              <SettingButton options={ChooseTime} setter={setTime} />
            </div>
            <div className="molegame-start-settings">
              <p>LICZBA KRETÓW</p>
              <SettingButton options={ChooseMoles} setter={setMoles} />
            </div>
            <div className="molegame-start-settings">
              <p>PRZYCISKI STERUJĄCE</p>
              <button onClick={() => StartGame()}>START</button>
            </div>
          </div>
        </>
      )}
      {game && (
        <Game
          time={time}
          moles={moles}
          setGame={setGame}
          score={score}
          setScore={setScore}
        />
      )}
    </div>
  );
};
