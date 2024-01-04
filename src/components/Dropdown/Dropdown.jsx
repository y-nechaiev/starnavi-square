import React from 'react';
import "./Dropdown.css";

const Dropdown = ({ modes, onChange }) => {
  const handleModeChange = (e) => {
    const selectedMode = modes.find(mode => mode.name === e.target.value);
    onChange(selectedMode);
  };

  return (
    <div className="dropdown">
      <select defaultValue="" onChange={handleModeChange}>
        <option value="" disabled>Select a mode</option>
        {modes.map(mode => (
          <option key={mode.id} value={mode.name}>{mode.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
