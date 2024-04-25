import React, { useState, useEffect } from 'react';
function Letreiro() {
    const [text, setText] = useState('');
  const originalText = 'Conheça a Fatec';

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setText((prevText) => {
        const nextChar = originalText[index];
        index = (index + 1) % originalText.length;
        return prevText + nextChar;
      });
    }, 200); // Adjust typing speed here (milliseconds)

    return () => clearInterval(typingInterval);
  }, []);

    return (
      <>
          <h1>Meu Letreiro</h1>
          <p>{texto}</p>
      </>
    );
  }
  
  export default Letreiro;
  
