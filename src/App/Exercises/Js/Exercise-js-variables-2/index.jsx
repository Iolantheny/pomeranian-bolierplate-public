import './styles.css';
import React, { useState } from 'react';

export function Exercise() {
  const calculatePixels = (px1, px2) => {
    let newPX1 = px1.replace('px', '');
    let newPX2 = px2.replace('px', '');
    const x = Number(newPX1);
    const y = Number(newPX2);
    return (
      <p>
        {x * y}px = {((x * y) / 1000000).toFixed(3)}MP
      </p>
    );
  };

  const getInfoAboutValue = (x) => {
    return (
      <div>
        <p>Typ wartości: {typeof x}</p>
        <p>wartość: {String(x)}</p>
        <p>Wartość logiczna: {Boolean(x).toString()}</p>
      </div>
    );
  };

  const [text, setText] = useState('');
  const [censure, setCensure] = useState(false);

  const word = 'kurde';

  const ShowText = (text) => {
    if (text.includes(word)) {
      setCensure(true);
      setText(text.replace(word, '*****'));
    }
    return (
      <div>
        {censure && <p>TEXT ZOSTAŁ OCENZUROWANY</p>}
        <p>{text}</p>
      </div>
    );
  };

  return (
    <div>
      {calculatePixels('1080px', '1920px')}
      <hr />
      {getInfoAboutValue('abc')}
      <hr />
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {ShowText(text)}
      </div>
    </div>
  );
}
