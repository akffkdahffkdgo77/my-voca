import { Outlet } from 'react-router-dom';

import Header from './Header';
import Menu from './Menu';

export default function BaseLayout() {
    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-900">
            <Header />
            <Menu />
            <main className="min-h-screen w-full p-5 pt-[80px]">
                <Outlet />
            </main>
        </div>
    );
}
