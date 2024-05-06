import React, { useState, useEffect } from 'react';
function Relogio() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
        <h1>Meu Relógio</h1>
        <div>
        <p>Data: {dateTime.toLocaleDateString()}</p>
        <p>Hora: {dateTime.toLocaleTimeString()}</p>
      </div>
    </>
  );
}

export default Relogio;
