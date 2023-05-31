import { useState, useEffect } from 'react';
import { Button } from './Button';

export const SettingButton = ({ options, setter }) => {
  const [newArray, setNewArray] = useState(options);
  const handleClick = (value) => {
    setNewArray(
      newArray.map((option) => {
        return { ...option, isActive: option.value === value };
      })
    );
  };

  const ActivSettings = (array) => {
    const newArray = array.find((item) => item.isActive === true);
    return newArray.value;
  };

  useEffect(() => {
    setter(ActivSettings(newArray));
  }, [newArray]);

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
