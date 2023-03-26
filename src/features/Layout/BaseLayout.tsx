import { Outlet } from 'react-router-dom';

import Header from 'features/Layout/Header';
import Menu from 'features/Layout/Menu';

export default function BaseLayout() {
    return (
        <div className="w-full min-h-screen dark:bg-slate-900 bg-slate-50">
            <Header />
            <Menu />
            <main className="min-h-screen w-full p-5 pt-[80px]">
                <Outlet />
            </main>
        </div>
    );
}
