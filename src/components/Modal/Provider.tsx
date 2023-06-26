/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useMemo, useRef, useState } from 'react';
import Modal from 'react-modal';

import ModalContext from './Context';
import customStyles from './styles';

import { InformationCircleIcon } from '@heroicons/react/24/outline';

import type { ModalContextType, ModalOptionsType, ModalProviderType } from './types';

Modal.setAppElement('#root');
Modal.defaultStyles.overlay!.zIndex = 10001;
Modal.defaultStyles.overlay!.backgroundColor = 'rgba(0, 0, 0, 0.5)';

export default function ModalProvider({ children }: ModalProviderType) {
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

    const handleConfirm = () => {
        setOpen(false);
        promiseInfo.current(true);
        promiseInfo.current = () => null;
    };

    const handleClose = () => {
        setOpen(false);
        promiseInfo.current(false);
        promiseInfo.current = () => null;
    };

    const value: ModalContextType = useMemo(() => ({ handleModal }), [handleModal]);

    return (
        <ModalContext.Provider value={value}>
            {children}
            {open && (
                <Modal isOpen={open} onRequestClose={handleClose} style={customStyles} contentLabel="Confirm Modal">
                    <h3 className="flex items-center justify-start gap-2.5 bg-slate-900 p-3 text-lg font-bold text-slate-50 dark:bg-slate-500 dark:text-slate-50">
                        <InformationCircleIcon className="h-7 w-7 animate-pulse" />
                        {options?.title}
                    </h3>
                    <div className="bg-slate-50 dark:bg-slate-300">
                        <div className="mb-2.5 h-px w-full border-b border-slate-900" />
                        <p className="flex min-h-[100px] min-w-[350px] items-center justify-center whitespace-pre-wrap text-center text-[16px] font-semibold">{options?.message}</p>
                        <div className="mt-2.5 flex items-center justify-center gap-5 p-2.5">
                            {options?.messageType === 'confirm' && (
                                <button
                                    className="min-h-[40px] min-w-[80px] rounded-md text-sm font-medium text-slate-900 hover:animate-pulse dark:bg-slate-500 dark:text-slate-50"
                                    type="button"
                                    onClick={handleClose}
                                >
                                    {options?.cancelText}
                                </button>
                            )}
                            <button className="min-h-[40px] min-w-[80px] rounded-md bg-slate-900 text-sm font-medium text-slate-50 hover:animate-pulse" type="button" onClick={handleConfirm}>
                                {options?.confirmText || '확인'}
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </ModalContext.Provider>
    );
}
