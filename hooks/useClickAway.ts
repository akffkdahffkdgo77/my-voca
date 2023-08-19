'use client';

import { BaseSyntheticEvent, RefObject, useEffect } from 'react';

interface IClickAway<T> {
    ref: RefObject<T>;
    onClickOutside: () => void;
}

const useClickAway = <T>({ ref, onClickOutside }: IClickAway<T>) => {
    useEffect(() => {
        const handleClickOutside = (event: BaseSyntheticEvent | MouseEvent) => {
            const element = ref.current as HTMLElement;
            if (element && !element.contains(event.target)) {
                onClickOutside();
            }
        };
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [ref]);
};

export default useClickAway;
