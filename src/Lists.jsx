import React, { useState } from 'react';

const Lists = () => {

  const [inputValue, setInputValue] = useState('');


  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems((prevItems) => [...prevItems, inputValue]);
      
      setInputValue('');
    }
  };

  return (
   
    <div>
        <h1>Input Text</h1>
      <input

        type="text"
        value={inputValue}
        onChange={handleInputChange}
         placeholder="Enter item"
      />
  
      <button onClick={handleAddItem}>Add</button>

    
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;