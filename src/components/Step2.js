import React, { useState } from 'react';

const Step2 = ({ onNext, onBack }) => {
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('');
  const [size, setSize] = useState('');

  return (
    <div>
      <h2>Step 2: Company Info</h2>
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      /><br />
      <input
        type="text"
        placeholder="Industry"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      /><br />
      <input
        type="text"
        placeholder="Company Size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      /><br />
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step2;
