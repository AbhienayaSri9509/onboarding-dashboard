import React, { useState } from 'react';

const Step3 = ({ onBack, onNext }) => {
  const [theme, setTheme] = useState('light');
  const [layout, setLayout] = useState('default');

  return (
    <div>
      <h2>Step 3: Preferences</h2>
      <label>
        Theme:
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label><br />
      <label>
        Layout:
        <select value={layout} onChange={(e) => setLayout(e.target.value)}>
          <option value="default">Default</option>
          <option value="compact">Compact</option>
        </select>
      </label><br />
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Finish</button>
    </div>
  );
};

export default Step3;
