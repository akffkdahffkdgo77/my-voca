import { useEffect, useMemo, useState } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import TopButton from './TopButton';

import { getLocalStorage } from 'utils/localStorage';
import { StyleThemes } from 'utils/theme';

export default function Layout() {
    const { pathname } = useLocation();
    const [startTime, setStartTime] = useState(localStorage.getItem('startTime'));

    const hasHeader = useMemo(() => pathname !== '/export', [pathname]);
    const hasTopButton = useMemo(() => pathname.includes('/test'), [pathname]);

    useEffect(() => {
        if (!startTime && getLocalStorage('startTime')) {
            setStartTime(getLocalStorage('startTime'));
        }
    }, [pathname, startTime]);

    return (
        <>
            {hasHeader && startTime && <Header theme={StyleThemes.Gray} />}
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
