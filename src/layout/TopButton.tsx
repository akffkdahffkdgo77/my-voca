import { useEffect, useRef } from 'react';

import { ArrowUpIcon } from '@heroicons/react/24/outline';

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
            className="h-50pxr w-50pxr invisible fixed bottom-5 right-5 rounded-full bg-black"
        >
            <ArrowUpIcon className="mx-auto h-5 w-5 text-white" />
        </button>
    );
}
