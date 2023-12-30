import { useEffect, useMemo } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import TopButton from './TopButton';

import { StyleThemes } from 'utils/theme';

export default function Layout() {
    const { pathname } = useLocation();

    const hasHeader = useMemo(() => pathname !== '/export', [pathname]);
    const hasTopButton = useMemo(() => pathname.includes('/test'), [pathname]);

    useEffect(() => {
        if (!localStorage.getItem('startTime')) {
            localStorage.setItem('startTime', `${new Date().getTime()}`);
        }
    }, []);

    return (
        <>
            {hasHeader && <Header theme={StyleThemes.Gray} />}
            <main className="relative w-full">
                <Outlet />
            </main>
            <Footer />
            {hasTopButton && <TopButton />}
            <div id="portal" />
            <ScrollRestoration />
        </>
    );
}
