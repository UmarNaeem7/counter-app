import React, { useState } from 'react';
import './App.css';
import ItemList from './Components/ItemList';
import Navbar from './Components/Navbar';

function App() {
  const [length, setLength] = useState(3);

  const handleData = (value) => {
    setLength(value);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Navbar value={length} />
      <ItemList customProp={handleData} />
    </div>
  );
}

export default App;
