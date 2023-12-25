import { Outlet, ScrollRestoration } from 'react-router-dom';

import Footer from './Footer';
import TopButton from './TopButton';

export default function Layout() {
    return (
        <div>
            <main className="relative mx-auto w-full">
                <Outlet />
            </main>
            <Footer />
            <TopButton />
            <div id="portal" />
            <ScrollRestoration />
        </div>
    );
}
