import { useEffect, useRef } from 'react';

import { TopIconButton } from '@components/IconButton';

import { useScroll } from '@hooks/utils';

const Fab = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScroll();

  useEffect(() => {
    if (ref.current) {
      if (isVisible) {
        ref.current.style.visibility = 'visible';
      } else {
        ref.current.style.visibility = 'hidden';
      }
    }
  }, [isVisible]);

  const handleClick = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <div ref={ref} className="invisible fixed bottom-5 right-5">
      <TopIconButton onClick={handleClick} />
    </div>
    // <button
    //   ref={buttonRef}
    //   className=" h-12.5 w-12.5 rounded-full bg-black"
    //   type="button"
    //   onClick={handleClick}
    // >
    //   <ArrowUpIcon className="mx-auto h-5 w-5 text-white" />
    // </button>
  );
};

export default Fab;
