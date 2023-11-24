import { useEffect, useRef } from 'react';

import { ArrowUpIcon } from '@heroicons/react/24/outline';

import useScroll from 'hooks/useScroll';

export default function TopButton() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const isVisible = useScroll();

    useEffect(() => {
        if (buttonRef.current) {
            if (isVisible) {
                buttonRef.current.style.visibility = 'visible';
            } else {
                buttonRef.current.style.visibility = 'hidden';
            }
        }
    }, [isVisible]);

    const handleClick = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    return (
        <button ref={buttonRef} type="button" onClick={handleClick} className="invisible fixed bottom-5 right-5 h-50pxr w-50pxr rounded-full bg-black">
            <ArrowUpIcon className="mx-auto h-5 w-5 text-white" />
        </button>
    );
}
