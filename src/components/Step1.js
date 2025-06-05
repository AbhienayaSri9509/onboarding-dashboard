import React, { useState } from 'react';

const Step1 = ({ onNext }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <h2>Step 1: Personal Info</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step1;
