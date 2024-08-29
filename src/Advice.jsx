import dividerMobileIcon from './assets/pattern-divider-mobile.svg';
import dividerDesktopIcon from './assets/pattern-divider-desktop.svg';
import iconDice from './assets/icon-dice.svg';
import { useState, useEffect } from 'react';

const URL = 'https://api.adviceslip.com/advice';

const Advice = () => {
  const [num, setNum] = useState([]);
  const [advice, setAdvice] = useState([]);

  // Data fetching with useeffect hook
  // useEffect(
  //   function () {
  //     async function fetchAdvice() {
  //       const res = await fetch(URL);
  //       const data = await res.json();
  //       console.log(data);
  //       setNum(data.slip.id);
  //       setAdvice(data.slip.advice);
  //     }
  //     fetchAdvice();
  //   },
  //   [num, advice]
  // );

  // Abstract fetch call into a callback that is called by button
  async function fetchAdvice() {
    const res = await fetch(URL);
    const data = await res.json();

    console.log(data);
    setNum(data.slip.id);
    setAdvice(data.slip.advice);
  }
  // Call the function once in a mounting useeffect hook
  useEffect(function () {
    fetchAdvice();
  }, []);
  return (
    <div className="card">
      <h5>Advice # {num}</h5>
      <p>{advice}</p>
      <img
        src={dividerMobileIcon}
        alt="pattern-divider"
        className="divider-mobile"
      />
      <img
        src={dividerDesktopIcon}
        alt="pattern-divider"
        className="divider-desktop"
      />
      <img src={iconDice} alt="dice" className="dice" onClick={fetchAdvice} />
    </div>
  );
};

export default Advice;
