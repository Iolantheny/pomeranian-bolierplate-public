import { useState, useEffect } from 'react';
import { Button } from './Button';

export const SettingButton = ({ options, setGameSettings }) => {
  const [newArray, setNewArray] = useState(options);
  const handleClick = (value) => {
    setNewArray(
      newArray.map((option) => {
        return { ...option, isActive: option.value === value };
      })
    );
  };

  const ActivSettingsTime = (array) => {
    if (array[0].label === '1 minuta') {
      const newArray = array.find((item) => item.isActive === true);
      return newArray.value;
    }
  };

  const ActivSettingsMoles = (array) => {
    if (array[0].label === '1 kret') {
      const newArray = array.find((item) => item.isActive === true);
      return newArray.value;
    }
  };

  const ActivSettings = (array) => {
    const newArray = array.find((item) => item.isActive === true);
    return newArray.value;
  };

  useEffect(() => {
    setGameSettings({
      time: ActivSettingsTime(newArray),
      moles: ActivSettingsMoles(newArray),
    });
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
