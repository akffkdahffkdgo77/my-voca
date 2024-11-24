import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback: (id: string) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const elementId = entry.target.innerHTML;
            callback(elementId);
          }
        }
      },
      { threshold: 0 },
    );

    if (ref.current) {
      const children = ref.current.getElementsByTagName('h2');
      [...children].forEach((child) => {
        io.observe(child as Element);
      });
    }

    return () => {
      if (ref.current) {
        const children = ref.current.getElementsByTagName('h2');
        [...children].forEach((child) => {
          io.unobserve(child as Element);
        });
      }
    };
  }, []);

  return { ref };
};

export default useIntersectionObserver;
