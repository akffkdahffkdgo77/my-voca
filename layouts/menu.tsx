'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useBoundStore } from '@zustand/store';

export default function Menu() {
    const pathname = usePathname();
    const { isOpen, setIsOpen } = useBoundStore((state) => ({ isOpen: state.isOpen, setIsOpen: state.setIsOpen }));

    return (
        <div className={`${isOpen ? 'w-full' : 'invisible w-0'}  fixed bottom-0 left-0 top-0 z-50 h-full border-r border-slate-900 text-slate-50 transition-all [background-color:rgba(0,0,0,0.8)]`}>
            <div className="flex h-full items-center p-5">
                <ul className="flex h-full w-full flex-1 flex-col items-center justify-center gap-5">
                    <li className="text-2xl font-medium hover:text-slate-300">
                        <Link className={pathname === '/' ? 'animate-pulse text-yellow-300' : ''} href="/" onClick={() => setIsOpen()}>
                            홈
                        </Link>
                    </li>
                    <li className="text-2xl font-medium hover:text-slate-300">
                        <Link className={pathname === '/add' ? 'animate-pulse text-yellow-300' : ''} href="/add" onClick={() => setIsOpen()}>
                            단어 추가하기
                        </Link>
                    </li>
                    <li className="text-2xl font-medium hover:text-slate-300">
                        <Link className={pathname === 'memorize' ? 'animate-pulse text-yellow-300' : ''} href="/memorize" onClick={() => setIsOpen()}>
                            단어 외우기
                        </Link>
                    </li>
                    <li className="text-2xl font-medium hover:text-slate-300">
                        <Link className={pathname === 'practice' ? 'animate-pulse text-yellow-300' : ''} href="/practice" onClick={() => setIsOpen()}>
                            시험 보기
                        </Link>
                    </li>
                </ul>
                <button type="button" className="absolute right-2.5 top-5 rounded-full border border-slate-50 p-2.5" onClick={() => setIsOpen()}>
                    <XMarkIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}
