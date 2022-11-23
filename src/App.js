import './App.css';
import React, { useState } from 'react';
import { Button } from './components/Button'
import { Snackbar } from './components/Snackbar'

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <Button onClick={handleClick}>OPEN SIMPLE SNACKBAR</Button>
      { isActive && (
        <Snackbar
          autoHideDuration={5000}
          message='I love snacks'
          position='topCentre'
        />
      )}
    </div>
  );
}

export default App;
