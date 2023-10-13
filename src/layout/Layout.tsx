import { Outlet } from 'react-router-dom';

import { ModalProvider } from 'components/Modal';
import { SnackbarProvider } from 'components/Snackbar';

export default function Layout() {
    return (
        <ModalProvider>
            <SnackbarProvider position="bottom-center">
                <main className="mx-auto min-h-screen w-full">
                    <Outlet />
                </main>
                <div id="portal" />
            </SnackbarProvider>
        </ModalProvider>
    );
}
