import { Outlet, ScrollRestoration } from 'react-router-dom';

import DesignHeader from './DesignHeader';
import Footer from './Footer';
import TopButton from './TopButton';

export default function DesignLayout() {
    return (
        <>
            <DesignHeader />
            <main className="relative w-full">
                <Outlet />
            </main>
            <div className="min-w-1512pxr">
                <Footer />
            </div>
            <TopButton />
            <div id="portal" />
            <ScrollRestoration />
        </>
    );
}
