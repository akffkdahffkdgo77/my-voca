import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import useMode from 'hooks/useMode';
import { useBoundStore } from 'lib/zustand/store';

export default function Header() {
    const [isLightMode, setIsLightMode] = useMode();
    const setIsOpen = useBoundStore((state) => state.setIsOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-[80px] dark:bg-slate-900 bg-slate-50 border-b border-slate-300 dark:border-slate-300 flex items-center px-2.5">
            <button type="button" className="cursor-pointer rounded-full border border-slate-900 dark:border-slate-50 p-2.5" onClick={() => setIsOpen()}>
                <Bars3Icon className="w-5 h-5 dark:text-slate-50 text-slate-900" />
            </button>
            <Link to="/" className="h-full flex items-center justify-center flex-1">
                <h1 className="w-full text-center text-5xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">My Voca</h1>
            </Link>
            <button type="button" className="rounded-full border border-slate-900 dark:border-slate-50 p-2.5" onClick={() => setIsLightMode((prev) => !prev)}>
                {isLightMode ? <MoonIcon className="w-5 h-5 dark:text-slate-50 text-slate-900" /> : <SunIcon className="w-5 h-5 dark:text-slate-50 text-slate-900" />}
            </button>
        </header>
    );
}
