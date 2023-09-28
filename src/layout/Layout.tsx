import { Outlet } from 'react-router-dom';

import { ModalProvider } from 'components/Modal';
import { SnackbarProvider } from 'components/Snackbar';

import Header from './Header';
import Menu from './Menu';

export default function Layout() {
    return (
        <ModalProvider>
            <SnackbarProvider position="bottom-right">
                <div className="min-h-screen w-full bg-gray-100">
                    <Header />
                    <Menu />
                    <main className="mx-auto min-h-screen w-full max-w-md border-x border-slate-300 bg-slate-50 px-5 pt-20 dark:bg-slate-900 max-sm:max-w-full max-sm:border-x-0 max-sm:px-2.5 max-sm:pt-16">
                        <Outlet />
                    </main>
                </div>
                <div id="portal" />
            </SnackbarProvider>
        </ModalProvider>
    );
}
