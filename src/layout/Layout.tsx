import { Outlet, ScrollRestoration } from 'react-router-dom';

import { ModalProvider } from 'components/Modal';
import { ToastProvider } from 'components/Toast';

import Footer from './Footer';
import TopButton from './TopButton';

export default function Layout() {
    return (
        <ModalProvider>
            <ToastProvider position="bottom-center">
                <div className="">
                    <main className="relative mx-auto w-full">
                        <Outlet />
                    </main>
                    <Footer />
                    <TopButton />
                    <div id="portal" />
                </div>
                <ScrollRestoration />
            </ToastProvider>
        </ModalProvider>
    );
}
