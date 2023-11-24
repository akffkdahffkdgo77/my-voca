import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import Modal from './Modal';

export type ModalProviderType = {
    children: React.ReactNode;
};

export type ModalOptionsType = {
    messageType?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
};

export type ModalContextType = {
    handleModal: (options: ModalOptionsType) => Promise<boolean>;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('Modal should be used within `ModalContext`');
    }

    return context.handleModal;
};

export function ModalProvider({ children }: ModalProviderType) {
    const promiseInfo = useRef<(value: boolean | PromiseLike<boolean>) => void>(() => null);

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<ModalOptionsType>({});

    const handleModal = useCallback((modalOptions: ModalOptionsType) => {
        return new Promise<boolean>((resolve) => {
            promiseInfo.current = resolve;
            setOpen(true);
            setOptions(modalOptions);
        });
    }, []);

    const handleBackdropClick = useCallback(() => setOpen((prev) => !prev), []);

    const handleConfirm = useCallback(() => {
        setOpen(false);
        promiseInfo.current(true);
        promiseInfo.current = () => null;
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
        promiseInfo.current(false);
        promiseInfo.current = () => null;
    }, []);

    const value: ModalContextType = useMemo(() => ({ handleModal }), [handleModal]);

    return (
        <ModalContext.Provider value={value}>
            {children}
            {open && createPortal(<Modal options={options} onClick={handleBackdropClick} onConfirm={handleConfirm} onClose={handleClose} />, document.getElementById('portal') as HTMLElement)}
        </ModalContext.Provider>
    );
}
