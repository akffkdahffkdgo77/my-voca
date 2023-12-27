import { useCallback, useState } from 'react';

import { CustomizedFullPageLoader } from 'components';
import Header from 'layout/Header';

import { Step1, Step2, Step3 } from './components';

import { StyleThemes } from 'utils/theme';

export default function Register() {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleStep = useCallback((selected: number) => setStep(selected), []);

    const handleLoading = useCallback(() => setIsLoading(true), []);

    return (
        <div className="bg-grid-light flex min-h-screen w-full items-center justify-center gap-x-10 p-10">
            <Header theme={StyleThemes.Gray} />
            {isLoading && (
                <div className="fixed bottom-0 left-0 right-0 top-0 z-10">
                    <CustomizedFullPageLoader />
                </div>
            )}
            {step === 1 && <Step1 onClick={handleStep} />}
            {step === 2 && <Step2 onLoading={handleLoading} />}
            {step === 3 && <Step3 isLoading={isLoading} onLoading={handleLoading} />}
        </div>
    );
}
