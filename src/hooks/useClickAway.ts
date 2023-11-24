import { BaseSyntheticEvent, RefObject, useEffect } from 'react';

interface IClickAway<T> {
    ref: RefObject<T>;
    onClickOutside: () => void;
}

const useClickAway = <T>({ ref, onClickOutside }: IClickAway<T>) => {
    const handleClickOutside = (event: BaseSyntheticEvent | MouseEvent) => {
        const element = ref.current as HTMLElement;
        if (element && !element.contains(event.target)) {
            onClickOutside();
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, [ref, onClickOutside]);
};

export default useClickAway;
