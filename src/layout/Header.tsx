import { Link } from 'react-router-dom';

import useMode from './useMode';

import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useBoundStore } from '@zustand/store';

export default function Header() {
    const [isLightMode, setIsLightMode] = useMode();
    const setIsOpen = useBoundStore((state) => state.setIsOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex h-[80px] items-center border-b border-slate-300 bg-slate-50 px-2.5 dark:border-slate-300 dark:bg-slate-900">
            <button type="button" className="cursor-pointer rounded-full border border-slate-900 p-2.5 dark:border-slate-50" onClick={() => setIsOpen()}>
                <Bars3Icon className="h-5 w-5 text-slate-900 dark:text-slate-50" />
            </button>
            <Link to="/" className="flex h-full flex-1 items-center justify-center">
                <h1 className="w-full text-center text-5xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">My Voca</h1>
            </Link>
            <button type="button" className="rounded-full border border-slate-900 p-2.5 dark:border-slate-50" onClick={() => setIsLightMode((prev) => !prev)}>
                {isLightMode ? <MoonIcon className="h-5 w-5 text-slate-900 dark:text-slate-50" /> : <SunIcon className="h-5 w-5 text-slate-900 dark:text-slate-50" />}
            </button>
        </header>
    );
}
