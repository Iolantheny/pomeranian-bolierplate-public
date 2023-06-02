import { Button } from './Button';
import { Menu } from './Menu';
import { SelectButtons } from './SelectButtons';

export const MenuView = ({
  setGameStarted,
  setTimer,
  setPairAmount,
  setStepAmount,
  setBoardSize,
}) => {
  const StartGame = () => {
    setGameStarted(true);
    setTimer({ minutes: 0, seconds: 0 });
    setPairAmount(0);
    setStepAmount(0);
  };
  return (
    <>
      <Menu label="LICZBA ELEMENTÓW">
        <SelectButtons
          options={[
            { label: '8 elementów', value: 8, isActive: true },
            { label: '16 elementów', value: 16, isActive: false },
            { label: '20 elementów', value: 20, isActive: false },
          ]}
          setBoardSize={setBoardSize}
        />
      </Menu>
      <Menu label="PRZYCISKI STERUJĄCE">
        <Button onClick={() => StartGame()}>Start</Button>
      </Menu>
    </>
  );
};
