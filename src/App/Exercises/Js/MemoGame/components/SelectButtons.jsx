import { useState } from 'react';
import { Button } from './Button';

export const SelectButtons = (props) => {
  const { options, setBoardSize } = props;

  const [newOptions, setNewOptions] = useState(options);

  function handleClick(value) {
    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value,
        };
      })
    );
    setBoardSize(value);
  }

  return (
    <>
      {newOptions.map(({ label, value, isActive }) => (
        <Button
          key={value}
          onClick={() => handleClick(value)}
          isActive={isActive}
        >
          {label}
        </Button>
      ))}
    </>
  );
};
