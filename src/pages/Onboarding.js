import { useState, useContext } from 'react';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import ProgressBar from '../components/ProgressBar';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const next = (data) => {
    setFormData({ ...formData, ...data });
    if (step < 3) setStep(step + 1);
    else {
      localStorage.setItem('userData', JSON.stringify({ ...formData, ...data }));
      setUserData({ ...formData, ...data });
      navigate('/dashboard');
    }
  };

  const back = () => step > 1 && setStep(step - 1);

  return (
    // Center wrapper start
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-4 max-w-xl w-full bg-white rounded shadow">
        <ProgressBar step={step} />
        {step === 1 && <Step1 onNext={next} />}
        {step === 2 && <Step2 onNext={next} onBack={back} />}
        {step === 3 && <Step3 onNext={next} onBack={back} />}
      </div>
    </div>
    // Center wrapper end
  );
};

export default Onboarding;
