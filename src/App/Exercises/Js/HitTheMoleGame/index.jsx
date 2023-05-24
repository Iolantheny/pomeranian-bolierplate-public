import React, { useState } from 'react';
import './styles.css';
import { SettingButton } from './components/SettingButton';

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
  const [gameSettings, setGameSettings] = useState();
  console.log(gameSettings);
  return (
    <div className="molegame">
      {!game && (
        <>
          <h2>
            Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
            którym się pojawił.{' '}
          </h2>
          <div className="molegame-start-content">
            <div className="molegame-start-settings">
              <p>CZAS GRY</p>
              <SettingButton
                options={ChooseTime}
                setGameSettings={setGameSettings}
              />
            </div>
            <div className="molegame-start-settings">
              <p>LICZBA KRETÓW</p>
              <SettingButton
                options={ChooseMoles}
                setGameSettings={setGameSettings}
              />
            </div>
            <div className="molegame-start-settings">
              <p>PRZYCISKI STERUJĄCE</p>
              <button onClick={() => setGame(true)}>START</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
