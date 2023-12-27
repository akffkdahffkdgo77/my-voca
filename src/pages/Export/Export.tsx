import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useModal } from 'components';

import { Step1, Step2, Step3 } from './components';

import { useMobile } from 'hooks';
import { getWords } from 'utils/data';

export default function Export() {
    const navigate = useNavigate();
    const isMobile = useMobile();
    const handleModal = useModal();

    const words = useMemo(() => getWords(), []);
    const [step, setStep] = useState(1);

    const handleStep = useCallback((selected: number) => setStep(selected), []);

    useEffect(() => {
        if (isMobile) {
            handleModal({
                message: '데이터 백업은\nPC 환경에서만 이용 가능합니다.'
            }).then(() => {
                navigate('/', { replace: true });
            });
        }
    }, [isMobile]);

    if (isMobile) {
        return <div className="min-h-screen w-full bg-white" />;
    }

    return (
        <div className="bg-grid-light flex min-h-screen w-full items-center justify-center gap-x-10 px-10 py-16">
            {step === 1 && <Step1 onClick={handleStep} />}
            {step === 2 && <Step2 words={words} />}
            {step === 3 && <Step3 words={words} />}
        </div>
    );
}
