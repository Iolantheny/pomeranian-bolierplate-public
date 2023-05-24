import { useState } from 'react';
import { Button } from './Button';

export const SettingButton = ({ options }) => {
  const [newArray, setNewArray] = useState(options);
  const handleClick = (value) => {
    setNewArray(
      newArray.map((option) => {
        return { ...option, isActive: option.value === value };
      })
    );
  };

  return (
    <>
      {newArray.map((element) => {
        return (
          <Button
            key={element.value}
            isActive={element.isActive}
            onClick={() => handleClick(element.value)}
            label={element.label}
          />
        );
      })}
    </>
  );
};
