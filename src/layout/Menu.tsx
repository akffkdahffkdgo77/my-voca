import { NavLink } from 'react-router-dom';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useBoundStore } from '@zustand/store';

export default function Menu() {
    const { isOpen, setIsOpen } = useBoundStore((state) => ({ isOpen: state.isOpen, setIsOpen: state.setIsOpen }));

    return (
        <div className={`${isOpen ? 'w-full' : 'invisible w-0'}  fixed top-0 bottom-0 left-0 z-50 h-full border-r border-slate-900 text-slate-50 transition-all [background-color:rgba(0,0,0,0.8)]`}>
            <div className="flex h-full items-center p-5">
                <ul className="flex h-full w-full flex-1 flex-col items-center justify-center gap-5">
                    <li className="text-2xl font-medium hover:text-slate-300">
                        <NavLink className={({ isActive }) => (isActive ? 'animate-pulse text-yellow-300' : '')} to="/" onClick={() => setIsOpen()}>
                            홈
                        </NavLink>
                    </li>
                    <li className="text-2xl font-medium hover:text-slate-300">
                        <NavLink className={({ isActive }) => (isActive ? 'animate-pulse text-yellow-300' : '')} to="/add" onClick={() => setIsOpen()}>
                            단어 추가하기
                        </NavLink>
                    </li>
                    <li className="text-2xl font-medium hover:text-slate-300">
                        <NavLink className={({ isActive }) => (isActive ? 'animate-pulse text-yellow-300' : '')} to="/memorize" onClick={() => setIsOpen()}>
                            단어 외우기
                        </NavLink>
                    </li>
                    <li className="text-2xl font-medium hover:text-slate-300">
                        <NavLink className={({ isActive }) => (isActive ? 'animate-pulse text-yellow-300' : '')} to="/practice" onClick={() => setIsOpen()}>
                            시험 보기
                        </NavLink>
                    </li>
                </ul>
                <button type="button" className="absolute top-5 right-2.5 rounded-full border border-slate-50 p-2.5" onClick={() => setIsOpen()}>
                    <XMarkIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}
