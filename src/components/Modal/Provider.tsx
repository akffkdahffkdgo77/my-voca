/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useMemo, useRef, useState } from 'react';

import { InformationCircleIcon } from '@heroicons/react/24/outline';
import Modal from 'react-modal';

import ModalContext from 'components/Modal/Context';
import customStyles from 'components/Modal/styles';
import type { ModalContextType, ModalOptionsType, ModalProviderType } from 'components/Modal/types';

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
                    <h3 className="text-lg font-bold flex items-center justify-start gap-2.5 p-3 bg-slate-900 dark:bg-slate-500 text-slate-50 dark:text-slate-50">
                        <InformationCircleIcon className="w-7 h-7 animate-pulse" />
                        {options?.title}
                    </h3>
                    <div className="bg-slate-50 dark:bg-slate-300">
                        <div className="border-b border-slate-900 w-full h-px mb-2.5" />
                        <p className="flex items-center justify-center text-center min-w-[350px] min-h-[100px] whitespace-pre-wrap font-semibold text-[16px]">{options?.message}</p>
                        <div className="mt-2.5 flex items-center justify-center gap-5 p-2.5">
                            {options?.messageType === 'confirm' && (
                                <button
                                    className="hover:animate-pulse min-w-[80px] min-h-[40px] text-sm font-medium dark:bg-slate-500 dark:text-slate-50 text-slate-900 rounded-md"
                                    type="button"
                                    onClick={handleClose}
                                >
                                    {options?.cancelText}
                                </button>
                            )}
                            <button className="hover:animate-pulse min-w-[80px] min-h-[40px] text-sm font-medium bg-slate-900 text-slate-50 rounded-md" type="button" onClick={handleConfirm}>
                                {options?.confirmText || '확인'}
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </ModalContext.Provider>
    );
}
