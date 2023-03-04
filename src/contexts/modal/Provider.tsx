import { useCallback, useMemo, useRef, useState } from 'react';

import { InformationCircleIcon } from '@heroicons/react/24/outline';
import Modal from 'react-modal';

import ModalContext from 'contexts/modal/Context';
import customStyles from 'contexts/modal/styles';

import type { ModalContextType, ModalOptionsType, ModalProviderPropsType } from 'contexts/modal/types';

Modal.setAppElement('#root');

export default function ModalProvider({ children }: ModalProviderPropsType) {
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
                    <h3 className="text-lg font-bold flex items-center justify-start gap-2.5 p-3 bg-black text-white">
                        <InformationCircleIcon className="w-7 h-7 animate-pulse" />
                        {options?.title}
                    </h3>
                    <div className="border-b border-slate-300 w-full h-px mb-2.5" />
                    <p className="flex items-center justify-center text-center text-sm font-medium min-w-[350px] min-h-[100px] whitespace-pre-wrap">{options?.message}</p>
                    <div className="mt-2.5 flex items-center justify-center gap-5 p-2.5">
                        {options?.messageType === 'confirm' && (
                            <button className="hover:animate-pulse min-w-[80px] min-h-[40px] text-sm font-bold border-black border rounded-md" type="button" onClick={handleClose}>
                                {options?.cancelText}
                            </button>
                        )}
                        <button className="hover:animate-pulse min-w-[80px] min-h-[40px] text-white text-sm font-bold bg-black border-black border rounded-md" type="button" onClick={handleConfirm}>
                            {options?.confirmText || '확인'}
                        </button>
                    </div>
                </Modal>
            )}
        </ModalContext.Provider>
    );
}
