import { useState } from 'react';
import Step3 from '../assets/Step3.jpg';

const Step3 = ({ onNext, onBack }) => {
  const [theme, setTheme] = useState('light');
  const [layout, setLayout] = useState('default');

  const handleSubmit = () => {
    onNext({ theme, layout });
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Step 3: Preferences</h2>

      <label className="block mt-2">Theme:</label>
      <select
        className="input"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <label className="block mt-2">Dashboard Layout:</label>
      <select
        className="input"
        value={layout}
        onChange={(e) => setLayout(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="compact">Compact</option>
      </select>

      <div className="mt-4">
        <button className="btn" onClick={onBack}>
          Back
        </button>
        <button className="btn ml-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;
