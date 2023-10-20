import { Outlet } from 'react-router-dom';

import { ModalProvider } from 'components/Modal';
import { ToastProvider } from 'components/Toast';

export default function Layout() {
    return (
        <ModalProvider>
            <ToastProvider position="bottom-center">
                <main className="relative mx-auto w-full overflow-hidden">
                    <Outlet />
                </main>
                <div id="portal" />
            </ToastProvider>
        </ModalProvider>
    );
}
