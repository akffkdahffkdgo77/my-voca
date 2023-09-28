import { useEffect, useRef } from 'react';

export default function TopButton() {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (buttonRef.current) {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    buttonRef.current.style.visibility = 'visible';
                } else {
                    buttonRef.current.style.visibility = 'hidden';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            type="button"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            className="invisible fixed bottom-5 right-5 h-[50px] w-[50px] animate-bounce rounded-full bg-black font-mono font-bold text-white"
        >
            TOP
        </button>
    );
}
