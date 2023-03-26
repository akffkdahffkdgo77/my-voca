import { XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

import { useBoundStore } from 'lib/zustand/store';

export default function Menu() {
    const { isOpen, setIsOpen } = useBoundStore((state) => ({ isOpen: state.isOpen, setIsOpen: state.setIsOpen }));

    return (
        <div className={`${isOpen ? 'w-full' : 'w-0 invisible'}  [background-color:rgba(0,0,0,0.8)] text-slate-50 transition-all h-full fixed top-0 bottom-0 left-0 z-50 border-r border-slate-900`}>
            <div className="flex items-center h-full p-5">
                <ul className="flex-1 w-full h-full flex items-center justify-center gap-5 flex-col">
                    <li className="text-2xl font-medium hover:text-slate-300">
                        <NavLink className={({ isActive }) => (isActive ? 'text-yellow-300 animate-pulse' : '')} to="/" onClick={() => setIsOpen()}>
                            홈
                        </NavLink>
                    </li>
                    <li className="text-2xl font-medium hover:text-slate-300">
                        <NavLink className={({ isActive }) => (isActive ? 'text-yellow-300 animate-pulse' : '')} to="/add" onClick={() => setIsOpen()}>
                            단어 추가하기
                        </NavLink>
                    </li>
                    <li className="text-2xl font-medium hover:text-slate-300">
                        <NavLink className={({ isActive }) => (isActive ? 'text-yellow-300 animate-pulse' : '')} to="/memorize" onClick={() => setIsOpen()}>
                            단어 외우기
                        </NavLink>
                    </li>
                    <li className="text-2xl font-medium hover:text-slate-300">
                        <NavLink className={({ isActive }) => (isActive ? 'text-yellow-300 animate-pulse' : '')} to="/practice" onClick={() => setIsOpen()}>
                            시험 보기
                        </NavLink>
                    </li>
                </ul>
                <button type="button" className="absolute top-5 right-2.5 rounded-full border border-slate-50 p-2.5" onClick={() => setIsOpen()}>
                    <XMarkIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
