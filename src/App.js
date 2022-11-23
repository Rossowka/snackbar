import './App.css';
import React, { useState } from 'react';
import { Button } from './components/Button'
import { Snackbar } from './components/Snackbar'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(e => !e);
  };

  return (
    <div>
      <Button onClick={handleClick}>OPEN SIMPLE SNACKBAR</Button>
      { isOpen ? <Snackbar/> : false }
    </div>
  );
}

export default App;
