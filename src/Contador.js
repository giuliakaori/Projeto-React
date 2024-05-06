import React, { useState } from 'react';
import homem from './homem.png';

function PeopleCounter() {
  const [total, setTotal] = useState(0);
  const [men, setMen] = useState(0);
  const [women, setWomen] = useState(0);

  const incrementTotal = () => {
    setTotal(total + 1);
  };

  const decrementTotal = () => {
    if (total > 0) {
      setTotal(total - 1);
    }
  };

  const incrementMen = () => {
    setMen(men + 1);
    setTotal(total + 1);
  };

  const decrementMen = () => {
    if (men > 0) {
      setMen(men - 1);
      setTotal(total - 1);
    }
  };

  const incrementWomen = () => {
    setWomen(women + 1);
    setTotal(total + 1);
  };

  const decrementWomen = () => {
    if (women > 0) {
      setWomen(women - 1);
      setTotal(total - 1);
    }
  };

  return (
    <div className="people-counter">
      <div>Total: {total}</div>
      <div>
        <button onClick={decrementTotal}>-</button>
        <span>{total}</span>
        <button onClick={incrementTotal}>+</button>
      </div>
      <div>
        <img src={homem}/>
        Homens: {men}
        <button onClick={decrementMen}>-</button>
        <button onClick={incrementMen}>+</button>
      </div>
      <div>
        Mulheres: {women}
        <button onClick={decrementWomen}>-</button>
        <button onClick={incrementWomen}>+</button>
      </div>
    </div>
  );
}

export default PeopleCounter;
