import React from 'react';
import './SquaresList.css';

const SquaresList = ({ activeSquares }) => {
  const renderSquares = () => {
    if (activeSquares ) {
      return activeSquares.map((square, index) => (
        <li key={index}>{`Row: ${square[0]}, Col: ${square[2]}`}</li>
      ));
    }
  };

  return (
    <div className="squares-list">
      <ul>
        {renderSquares()}
      </ul>
    </div>
  );
}

export default SquaresList;