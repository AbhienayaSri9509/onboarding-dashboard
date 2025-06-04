import { useState } from 'react';

const Step2 = ({ onNext, onBack }) => {
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = () => {
    if (!company || !industry || !size) return alert('All fields are required');
    onNext({ company, industry, size });
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Step 2: Business Info</h2>
      <input
        className="input mt-2"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        className="input mt-2"
        placeholder="Industry"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      />
      <input
        className="input mt-2"
        placeholder="Size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />

      <div className="mt-4">
        <button className="btn" onClick={onBack}>
          Back
        </button>
        <button className="btn ml-2" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
