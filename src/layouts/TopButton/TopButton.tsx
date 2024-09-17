import { useEffect, useRef } from 'react';

import { ArrowUpIcon } from '@heroicons/react/24/outline';

import { useScroll } from '@hooks/utils';

const TopButton = () => {
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
    <button
      ref={buttonRef}
      className="invisible fixed bottom-5 right-5 h-12.5 w-12.5 rounded-full bg-black"
      type="button"
      onClick={handleClick}
    >
      <ArrowUpIcon className="mx-auto h-5 w-5 text-white" />
    </button>
  );
};

export default TopButton;
