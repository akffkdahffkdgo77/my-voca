import { useCallback, useState } from 'react';

import { CustomizedFullPageLoader } from 'components';

import { Step1, Step2, Step3 } from './components';

export default function Register() {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleStep = useCallback((selected: number) => setStep(selected), []);

    const handleLoading = useCallback(() => setIsLoading(true), []);

    return (
        <div className="flex min-h-screen w-full items-center justify-center gap-x-10 p-10 bg-grid-light">
            {isLoading && (
                <div className="fixed bottom-0 left-0 right-0 top-0 z-10 cursor-progress">
                    <CustomizedFullPageLoader />
                </div>
            )}
            {step === 1 && <Step1 onClick={handleStep} />}
            {step === 2 && <Step2 onLoading={handleLoading} />}
            {step === 3 && <Step3 isLoading={isLoading} onLoading={handleLoading} onClick={handleStep} />}
        </div>
    );
}
