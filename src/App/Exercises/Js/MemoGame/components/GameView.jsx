import { Button } from './Button';
import { Menu } from './Menu';

export const GameView = ({ setGameStarted, stepAmount, timer }) => {
  const StopGame = () => {
    setGameStarted(false);
  };

  return (
    <>
      <Menu label="CZAS GRY">
        <div className="memogame-setting">
          {timer.minutes} : {timer.seconds}
        </div>
      </Menu>
      <Menu label="LICZBA RUCHÓW">
        <div className="memogame-setting">{stepAmount}</div>
      </Menu>
      <Menu label="PRZYCISKI STERUJĄCE">
        <Button onClick={() => StopGame()}>Stop</Button>
      </Menu>
    </>
  );
};
