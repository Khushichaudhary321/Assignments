import React, { useState } from 'react';

const TODOapp = () => {
 
  const [inputValue, setInputValue] = useState('');

  
  const [items, setItems] = useState([]);

 
  const [selectedItems, setSelectedItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

 
  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
     
      setItems((prevItems) => [...prevItems, inputValue]);
      
      setInputValue('');
    }
  };

  const handleDeleteSelectedItems = () => {
   
    const updatedItems = items.filter((_, index) => !selectedItems.includes(index));
   
    setItems(updatedItems);
    
    setSelectedItems([]);
  };

  
  const handleToggleSelectItem = (index) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(index)) {
       
        return prevSelectedItems.filter((item) => item !== index);
      } else {
       
        return [...prevSelectedItems, index];
      }
    });
  };

  return (
    <div>
      <h1>TODO APP</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter item"
      />

      <button onClick={handleAddItem}>Add</button>
      <button onClick={handleDeleteSelectedItems}>Delete </button>

     
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={selectedItems.includes(index)}
              onChange={() => handleToggleSelectItem(index)}
            />
            {item}
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default TODOapp;
 