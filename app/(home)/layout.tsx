import React from 'react';

import { ModalProvider } from '@components/Modal';

import Header from '@layout/header';
import Menu from '@layout/menu';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ModalProvider>
            <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-900">
                <Header />
                <Menu />
                <main className="min-h-screen w-full p-5 pt-[80px]">{children}</main>
            </div>
        </ModalProvider>
    );
}
