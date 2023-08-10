'use client';

import { CustomizedButton, CustomizedLink, CustomizedTypography } from '@components';

import useMode from './useMode';

import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useBoundStore } from '@zustand/store';

export default function Header() {
    const [isLightMode, setIsLightMode] = useMode();
    const setIsOpen = useBoundStore((state) => state.setIsOpen);

    return (
        <header className="fixed left-0 right-0 top-0 z-50 h-20 max-sm:h-16">
            <div className="mx-auto flex h-full w-full max-w-md items-center border-x border-b border-slate-300 bg-slate-50 px-5 dark:bg-slate-900 max-sm:max-w-full max-sm:border-x-0 max-sm:px-2.5">
                <CustomizedButton className="cursor-pointer rounded-full border border-slate-900 p-2.5 dark:border-slate-50" onClick={() => setIsOpen()}>
                    <Bars3Icon className="h-5 w-5 text-slate-900 dark:text-slate-50 max-sm:h-4 max-sm:w-4" />
                </CustomizedButton>
                <CustomizedLink href="/" className="flex h-full flex-1 items-center justify-center">
                    <CustomizedTypography component="h1" className="w-full text-center text-5xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 max-sm:text-3xl">
                        My Voca
                    </CustomizedTypography>
                </CustomizedLink>
                <CustomizedButton className="rounded-full border border-slate-900 p-2.5 dark:border-slate-50" onClick={() => setIsLightMode((prev) => !prev)}>
                    {isLightMode ? (
                        <MoonIcon className="h-5 w-5 text-slate-900 dark:text-slate-50 max-sm:h-4 max-sm:w-4" />
                    ) : (
                        <SunIcon className="h-5 w-5 text-slate-900 dark:text-slate-50 max-sm:h-4 max-sm:w-4" />
                    )}
                </CustomizedButton>
            </div>
        </header>
    );
}
