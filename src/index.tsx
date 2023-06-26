import ReactDOM from 'react-dom/client';

import ModalProvider from '@components/Modal/Provider';

import App from '@app/App';

import '@styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    // <React.StrictMode>
    <ModalProvider>
        <App />
    </ModalProvider>
    // </React.StrictMode>
);
