import React from 'react';

function ProtectionSlider({ isProtected, toggleProtection }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px' }}>
      <span role="img" aria-label="locked">🔒</span>
      <label className="switch">
        <input type="checkbox" checked={isProtected} onChange={toggleProtection} />
        <span className="slider"></span>
      </label>
      <span role="img" aria-label="unlocked">🔓</span>
    </div>
  );
}

export default ProtectionSlider;
