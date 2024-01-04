import React, { useState } from 'react';

const Square = React.memo(({ selectedMode, onSquareInteraction, name }) => {
  const [isActive, setIsActive] = useState(false);
  const size = selectedMode ? selectedMode.field : 57;

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: '1px solid black',
        backgroundColor: isActive ? 'blue' : 'transparent',
      }}
      onMouseEnter={() => {
        setIsActive(!isActive);
        onSquareInteraction(name);
      }}
    >
    </div>
  );
});

export default Square;
