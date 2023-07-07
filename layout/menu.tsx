'use client';

import { usePathname } from 'next/navigation';

import { CustomizedButton, CustomizedLink } from '@components';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useBoundStore } from '@zustand/store';

const LINKS = [
    { text: '홈', href: '/' },
    { text: '단어 추가하기', href: '/add' },
    { text: '단어 외우기', href: '/memorize' },
    { text: '시험보기', href: '/practice' }
];

export default function Menu() {
    const pathname = usePathname();
    const { isOpen, setIsOpen } = useBoundStore((state) => ({ isOpen: state.isOpen, setIsOpen: state.setIsOpen }));

    return (
        <div className={`${isOpen ? 'w-full' : 'invisible w-0'}  fixed bottom-0 left-0 top-0 z-50 h-full border-r border-slate-900 text-slate-50 transition-all [background-color:rgba(0,0,0,0.8)]`}>
            <div className="flex h-full items-center p-5">
                <ul className="flex h-full w-full flex-1 flex-col items-center justify-center gap-5">
                    {LINKS.map((link) => (
                        <li key={link.href} className="text-2xl font-medium hover:text-slate-300">
                            <CustomizedLink href={link.href} onClick={() => setIsOpen()} className={pathname === link.href ? 'animate-pulse text-yellow-300' : ''}>
                                {link.text}
                            </CustomizedLink>
                        </li>
                    ))}
                </ul>
                <CustomizedButton onClick={() => setIsOpen()} className="absolute right-2.5 top-5 rounded-full border border-slate-50 p-2.5">
                    <XMarkIcon className="h-5 w-5" />
                </CustomizedButton>
            </div>
        </div>
    );
}
