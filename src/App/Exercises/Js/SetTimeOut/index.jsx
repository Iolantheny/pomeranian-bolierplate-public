import { useState, useEffect } from 'react';
import './styles.css';

export const SetTimeOut = () => {
  // const wait = (ms) =>
  //   new Promise((resolve, reject) => setTimeout(resolve, ms));
  // for (let i = 0; i < 3; i++) {
  //   wait(i * 100).then(() => console.log(i));
  // }

  // const [visible, setVisible] = useState(true);
  // const [style1, setStyle1] = useState({ opacity: 1, transition: 'all 3s' });

  // const changeOpacity = () => {
  //   setStyle1((prev) => ({ ...prev, opacity: 0 }));
  //   setTimeout(() => {
  //     setVisible(false);
  //   }, 3 * 1000);
  // };

  const [counter, setCounter] = useState(60);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const [style, setStyle] = useState({
    position: 'absolute',
    left: -500,
    transition: 'all 5s',
  });

  setTimeout(() => {
    setStyle((prev) => ({ ...prev, left: 500 }));
  }, 5 * 1000);

  const [style2, setStyle2] = useState({
    backgroundColor: 'green',
    height: 50,
    width: 50,
    transition: 'all 5s',
  });

  const changeElement = () => {
    setTimeout(() => {
      setStyle2((prev) => ({
        ...prev,
        height: 100,
        width: 100,
        transform: 'rotate(90deg)',
      }));
    }, 1000);
  };

  return (
    <div>
      {/* {visible && <p style={style1}>My name is ruin</p>}
      <button onClick={changeOpacity()}>Vanish the paragrapf</button>*/}
      <div>Countdown: {counter}</div>
      <p style={style}>Promocja</p>
      <div style={style2} />
      <button onClick={changeElement}>Change Me</button>
    </div>
  );
};
