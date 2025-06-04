const ProgressBar = ({ step }) => {
  const steps = ['Personal Info', 'Business Info', 'Preferences'];

  return (
    <div className="flex mb-4">
      {steps.map((label, index) => (
        <div
          key={index}
          className={`flex-1 p-2 text-center ${
            step === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
