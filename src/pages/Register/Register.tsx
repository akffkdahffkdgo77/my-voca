import { useCallback, useState } from 'react';

import { FullPageLoader, Step1, Step2, Step3 } from './components';

const Register = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleStep = useCallback((selected: number) => setStep(selected), []);

  const handleLoading = useCallback(() => setIsLoading(true), []);

  return (
    <div className="flex min-h-screen w-full items-center justify-center gap-x-10 p-10 bg-grid-light">
      {isLoading && <FullPageLoader />}
      {step === 1 && <Step1 onClick={handleStep} />}
      {step === 2 && <Step2 onLoading={handleLoading} />}
      {step === 3 && <Step3 isLoading={isLoading} onClick={handleStep} onLoading={handleLoading} />}
    </div>
  );
};

export default Register;
