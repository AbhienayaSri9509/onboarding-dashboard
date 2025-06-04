import { useState } from 'react';
import Step1 from '../assets/Step1.jpg';

const Step1 = ({ onNext }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!name || !email) return alert('All fields are required');
    onNext({ name, email });
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Step 1: Personal Info</h2>
      <input
        className="input mt-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input mt-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn mt-4" onClick={handleSubmit}>
        Next
      </button>
    </div>
  );
};

export default Step1;
