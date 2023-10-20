import { useEffect, useState } from 'react';

const MOBILE_WIDTH = 768;

const useMobile = () => {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        if (window.innerWidth < MOBILE_WIDTH) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < MOBILE_WIDTH) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};

export default useMobile;
