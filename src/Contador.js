import React, { useState } from 'react';
import homem from './homem.png';
import mulher from './mulher.png';
import './style.css';

function ContarPessoas() {
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
      <div>Total:</div>
      <div>
        <span>{total}</span>
      </div>
      <div class="homem">
        <img src={homem}/>
        Homens: {men}
        <button onClick={incrementMen}>+</button>
        <button onClick={decrementMen}>-</button>
      </div>
      <div class="mulher">
        <img src={mulher}/>
        Mulheres: {women}
        <button onClick={incrementWomen}>+</button>
        <button onClick={decrementWomen}>-</button>
      </div>
    </div>
  );
}

export default ContarPessoas;
