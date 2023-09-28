import { NavLink } from 'react-router-dom';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { CustomizedButton } from 'components';

import { useBoundStore } from 'lib/zustand/store';

const LINKS = [
    { text: '홈', to: '/' },
    { text: '단어장', to: '/list' },
    { text: '등록', to: '/add' }
    // { text: '마이페이지', to: '/statistics' }
];

export default function Menu() {
    const { isOpen, setIsOpen } = useBoundStore((state) => ({ isOpen: state.isOpen, setIsOpen: state.setIsOpen }));

    return (
        <div className={`${isOpen ? 'w-full' : 'invisible w-0'}  fixed bottom-0 left-0 top-0 z-50 h-full border-r border-slate-900 text-slate-50 transition-all [background-color:rgba(0,0,0,0.8)]`}>
            <div className="flex h-full items-center p-5">
                <ul className="flex h-full w-full flex-1 flex-col items-center justify-center gap-5">
                    {LINKS.map((link) => (
                        <li key={link.to} className="text-2xl font-medium hover:text-slate-300">
                            <NavLink to={link.to} onClick={() => setIsOpen()} className={({ isActive }) => (isActive ? 'animate-pulse text-yellow-300' : '')}>
                                {link.text}
                            </NavLink>
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
