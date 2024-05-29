import React, { useState } from 'react';
import './Projeto.css';

function App() {
  const [value, setValue] = useState(0);
  const [inputText, setInputText] = useState('');
  const [textInfo, setTextInfo] = useState({
    length: 0,
    alphabets: 0,
    numbers: 0,
    symbols: 0,
    spaces: 0,
  });

  const handleCounter = (operation) => {
    switch (operation) {
      case '+':
        setValue(value + 1);
        break;
      case '-':
        setValue(value - 1);
        break;
      case '*':
        setValue(value * 2);
        break;
      case '/':
        setValue(value / 2);
        break;
      case 'x2':
        setValue(value ** 2);
        break;
      case 'x3':
        setValue(value ** 3);
        break;
      case '0':
        setValue(0);
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    setTextInfo({
      length: text.length,
      alphabets: (text.match(/[a-zA-Z]/g) || []).length,
      numbers: (text.match(/[0-9]/g) || []).length,
      symbols: (text.match(/[^a-zA-Z0-9\s]/g) || []).length,
      spaces: (text.match(/\s/g) || []).length,
    });
  };

  return (
    <div className="App">
      <h1>Dinâmica - REGEX</h1>
      <h2>Mult Functional Counters</h2>
      <p>Value: {value}</p>
      <div className="buttons">
        <button onClick={() => handleCounter('+')}>+</button>
        <button onClick={() => handleCounter('-')}>-</button>
        <button onClick={() => handleCounter('*')}>*</button>
        <button onClick={() => handleCounter('/')}>/</button>
        <button onClick={() => handleCounter('x2')}>x²</button>
        <button onClick={() => handleCounter('x3')}>x³</button>
        <button onClick={() => handleCounter('0')}>0</button>
      </div>
      <h3>Character Counter</h3>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Digite algo..."
      />
      <p>Text Length: {textInfo.length}</p>
      <p>Alphabets: {textInfo.alphabets}</p>
      <p>Numbers: {textInfo.numbers}</p>
      <p>Symbols: {textInfo.symbols}</p>
      <p>Spaces: {textInfo.spaces}</p>
    </div>
  );
}

export default App;
