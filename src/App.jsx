import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Square from './components/Square/Square';
import Dropdown from './components/Dropdown/Dropdown';
import SquaresList from './components/SquaresList/SquaresList';
import "./App.css";
import { useCallback } from 'react';

const App = () => {
  const [modes, setModes] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedMode, setSelectedMode] = useState(null);
  const [activeSquares, setActiveSquares] = useState([]);

  useEffect(() => {
    axios.get('https://60816d9073292b0017cdd833.mockapi.io/modes')
      .then(response => {
        setSelectedMode(response.data[4])
        setModes(response.data)
      })
      .catch(error => console.error('Error fetching modes:', error));
  }, []);

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
  };

  const handleSquareInteraction = useCallback((squareName) => {
    setActiveSquares((prevActiveSquares) => {
      const index = prevActiveSquares.indexOf(squareName);
      if (index !== -1) {
        return prevActiveSquares.filter((name) => name !== squareName);
      } else {
        return [...prevActiveSquares, squareName];
      }
    });
  }, [setActiveSquares]);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <div className='columns-wrapper'>
      <div className='column1'>
        <div className='controller'>
          <Dropdown modes={modes} onChange={handleModeChange} />
          <button onClick={handleStart}>Start</button>
        </div>
        <div className='squares-wrapper'>
          {!isStarted && (<div className='mask'></div>)}
          {[...Array(25)].map((_, index) => {
            const row = Math.floor(index / 5) + 1;
            const column = (index % 5) + 1;

            return (
              <Square
                key={`${row}-${column}`}
                selectedMode={selectedMode}
                onSquareInteraction={handleSquareInteraction}
                name={`${row}-${column}`}
              />
            );
          })}
        </div>
      </div>
      <div className='column2'>
        <p>Hover squares</p>
        <SquaresList activeSquares={activeSquares} />
      </div>
    </div>
  );
};

export default App;
