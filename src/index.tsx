import React from 'react';

import ReactDOM from 'react-dom/client';

import App from 'app/App';
import 'styles/index.css';
import ModalProvider from 'contexts/modal/Provider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <ModalProvider>
            <App />
        </ModalProvider>
    </React.StrictMode>
);
