import React from 'react';
import ReactDOM from 'react-dom/client';

import 'styles/index.css';

import { ModalProvider, ToastProvider } from 'components';

import App from 'app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ModalProvider>
            <ToastProvider position="bottom-center">
                <App />
            </ToastProvider>
        </ModalProvider>
    </React.StrictMode>
);
