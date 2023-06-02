import { useEffect, useState } from 'react';
import { MenuView } from './MenuView';

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const getRandomLetters = (amount) => {
  const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
};

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

const generateBoard = (size) => {
  const randomLetters = getRandomLetters(size / 2);

  const letters = randomLetters.map((letter) => {
    return {
      id: null,
      value: letter,
      isPaired: false,
    };
  });

  const mergedLetters = [...letters, ...letters];

  return shuffleArray(mergedLetters).map((obj, index) => {
    return { ...obj, id: index + 1 };
  });
};

const FIELD_RESET_CLICK = 800;

export const Board = ({
  boardSize,
  setStepAmount,
  stepAmount,
  setPairAmount,
  pairAmount,
  setGameStarted,
  setGameResult,
}) => {
  const [board, setBoard] = useState(generateBoard(boardSize));
  const [firstClicked, setFirstClicked] = useState();
  const [secendClicked, setSecendClicked] = useState();

  useEffect(() => {
    if (firstClicked && secendClicked) {
      const firstValue = board.find((item) => item.id === firstClicked).value;
      const secondValue = board.find((item) => item.id === secendClicked).value;

      if (firstValue === secondValue) {
        setPairAmount(pairAmount + 1);
        setBoard(
          board.map((obj) => {
            const isFieldPaired =
              obj.id === firstClicked || obj.id === secendClicked;

            return {
              ...obj,
              isPaired: obj.isPaired ? true : isFieldPaired,
            };
          })
        );
      }
    }

    const checkResult = board.every(({ isPaired }) => isPaired === true);
    if (checkResult) {
      setGameStarted(false);
      setGameResult(true);
    }
  }, [firstClicked, secendClicked]);

  const resetFirstClick = () => {
    setTimeout(() => {
      setFirstClicked();
    }, FIELD_RESET_CLICK);
  };

  const resetSecendClick = () => {
    setTimeout(() => {
      setSecendClicked();
    }, FIELD_RESET_CLICK);
  };

  const handleClick = (obj) => {
    if (firstClicked && firstClicked !== obj.id) {
      setSecendClicked(obj.id);
      setStepAmount(stepAmount + 1);
      resetSecendClick();
    } else {
      setFirstClicked(obj.id);
      resetFirstClick();
    }
  };

  return (
    <>
      <div className="board">
        {board.map((field) => {
          const isClicked =
            field.id === firstClicked || field.id === secendClicked;

          const clickedField = isClicked ? 'field-clicked' : null;
          const pairedFields = field.isPaired ? 'field-paired' : null;

          return (
            <div
              key={field.id}
              className={`board-field ${(clickedField, pairedFields)}`}
              onClick={() => handleClick(field)}
            >
              {(isClicked || field.isPaired) && field.value}
            </div>
          );
        })}
      </div>
    </>
  );
};
