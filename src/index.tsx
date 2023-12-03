import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import 'styles/index.css';

import { CustomizedFullPageLoader } from 'components';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from 'app/App';

import { worker } from 'mocks/browser';

if (process.env.NODE_ENV === 'development') {
    worker.start();
}
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<CustomizedFullPageLoader />}>
                <App />
            </Suspense>
        </QueryClientProvider>
    </React.StrictMode>
);
