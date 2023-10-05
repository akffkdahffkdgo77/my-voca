import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

import { InformationCircleIcon } from '@heroicons/react/24/outline';

export type ModalProviderType = {
    children: React.ReactNode;
};

export type ModalOptionsType = {
    messageType?: string;
    title?: string;
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

// TODO: Portal
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
                <div
                    role="presentation"
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen((prev) => !prev);
                    }}
                    className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/70"
                >
                    <div className="overflow-hidden rounded bg-slate-50">
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
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleClose();
                                        }}
                                    >
                                        {options?.cancelText}
                                    </button>
                                )}
                                <button
                                    className="min-h-[40px] min-w-[80px] rounded-md bg-slate-900 text-sm font-medium text-slate-50 hover:animate-pulse"
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleConfirm();
                                    }}
                                >
                                    {options?.confirmText || '확인'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
}
