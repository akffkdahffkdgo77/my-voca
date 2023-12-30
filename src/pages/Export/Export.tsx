import { useCallback, useMemo, useState } from 'react';

import { Step1, Step2, Step3 } from './components';

import { getWords } from 'utils/data';

export default function Export() {
    const words = useMemo(() => getWords(), []);
    const [step, setStep] = useState(1);

    const handleStep = useCallback((selected: number) => setStep(selected), []);

    return (
        <div className="flex min-h-screen w-full items-center justify-center gap-x-10 px-10 py-16 bg-grid-light">
            {step === 1 && <Step1 onClick={handleStep} />}
            {step === 2 && <Step2 words={words} />}
            {step === 3 && <Step3 words={words} />}
        </div>
    );
}
