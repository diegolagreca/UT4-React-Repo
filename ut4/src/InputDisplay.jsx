// src/InputDisplay.jsx
import React, { useState } from 'react';

const InputDisplay = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese algo..."
        value={inputValue}
        onChange={handleChange}
      />
      <p>Usted ha ingresado: {inputValue}</p>
    </div>
  );
};

export default InputDisplay;
