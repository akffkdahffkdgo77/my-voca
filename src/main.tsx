import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@app/App';

import { ModalProvider } from '@contexts/Modal';
import { ToastProvider } from '@contexts/Toast';

import '@styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <ToastProvider position="bottom-center">
        <App />
      </ToastProvider>
    </ModalProvider>
  </StrictMode>,
);
