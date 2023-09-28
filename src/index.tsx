import React from 'react';
import ReactDOM from 'react-dom/client';

import 'styles/index.css';

import App from 'app/App';
import ErrorBoundary from 'app/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);
