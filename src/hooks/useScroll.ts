import { useEffect, useRef, useState } from 'react';

const HEADER_HEIGHT = 64;
const OFFSET = 100; // 너무 빨리 노출/미노출되지 않도록

const useScroll = () => {
    const [isVisible, setIsVisible] = useState(true);
    const previousScroll = useRef(0);

    const handleScroll = () => {
        const pageHeight = document.body.offsetHeight;
        const viewportHeight = window.innerHeight;
        const previousScrollPosition = previousScroll.current;
        const currentScrollPosition = window.scrollY;

        // 헤더 높이 이상으로 스크롤 이동했을 경우에만 헤더 미노출
        // 현재 스크롤 위치과 직전 스크롤 위치가 다를 경우 미노출
        if (
            currentScrollPosition < HEADER_HEIGHT ||
            currentScrollPosition === previousScrollPosition ||
            currentScrollPosition === previousScrollPosition + OFFSET ||
            currentScrollPosition === previousScrollPosition - OFFSET
        ) {
            return;
        }

        // 사파리 스크롤 바운스
        if (currentScrollPosition < 0 || currentScrollPosition + viewportHeight > pageHeight) {
            return;
        }

        setIsVisible(currentScrollPosition < previousScrollPosition);
        previousScroll.current = currentScrollPosition;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return isVisible;
};

export default useScroll;
