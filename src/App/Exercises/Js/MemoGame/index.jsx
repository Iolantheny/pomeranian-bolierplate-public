import './styles.css';
import { MenuView } from './components/MenuView';
import { Board } from './components/Board';
import { useState, useEffect } from 'react';
import { GameView } from './components/GameView';

export function MemoGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [stepAmount, setStepAmount] = useState(0);
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const [pairAmount, setPairAmount] = useState(0);
  const [gameResult, setGameResult] = useState(false);
  const [boardSize, setBoardSize] = useState(8);

  useEffect(() => {
    const gameTimer = setTimeout(() => {
      if (timer.seconds === 59) {
        setTimer({ minutes: timer.minutes + 1, seconds: 0 });
      } else {
        setTimer((prev) => ({ ...prev, seconds: timer.seconds + 1 }));
      }
    }, 1000);

    if (!gameStarted) {
      clearTimeout(gameTimer);
    }
  }, [timer]);

  return (
    <div className="memo-game">
      <h2>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h2>
      {gameResult && (
        <p className="memogame-result-text">
          Gratuluje! Twój wynik to {pairAmount} par w czasie {timer.minutes} :
          {timer.seconds}
        </p>
      )}
      {!gameStarted && (
        <MenuView
          setGameStarted={setGameStarted}
          setTimer={setTimer}
          setPairAmount={setPairAmount}
          setStepAmount={setStepAmount}
          setBoardSize={setBoardSize}
        />
      )}

      {gameStarted && (
        <>
          <GameView
            setGameStarted={setGameStarted}
            stepAmount={stepAmount}
            timer={timer}
          />
          <Board
            boardSize={boardSize}
            setStepAmount={setStepAmount}
            stepAmount={stepAmount}
            setPairAmount={setPairAmount}
            pairAmount={pairAmount}
            setGameStarted={setGameStarted}
            setGameResult={setGameResult}
          />
        </>
      )}
    </div>
  );
}
