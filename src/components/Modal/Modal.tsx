import { useEffect } from 'react';

import { Button, Typography } from 'components/Core';

import { ModalOptionsType } from './useModal';

import { textStyle } from 'utils/theme';

type ModalType = {
    options?: ModalOptionsType;
    onConfirm: () => void;
    onClose: () => void;
};

export default function Modal({ options, onConfirm, onClose }: ModalType) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => document.body.classList.remove('overflow-hidden');
    }, []);

    return (
        <div
            role="presentation"
            onClick={(e) => {
                e.stopPropagation();
                onClose();
            }}
            className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/70"
        >
            <div className="min-w-320pxr overflow-hidden rounded-lg bg-white p-30pxr shadow-inner ">
                <Typography variant="b16" fontWeight="500" component="p" gutterBottom={40} twStyle={textStyle.modalText}>
                    {options?.message}
                </Typography>
                <div className="mx-auto w-full space-x-2.5 text-right">
                    {options?.messageType === 'confirm' && (
                        <Button
                            type="button"
                            variant="outlined"
                            size="large"
                            shape="square"
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                        >
                            {options?.cancelText ?? '취소'}
                        </Button>
                    )}
                    <Button
                        type="button"
                        variant="contained"
                        size="large"
                        shape="square"
                        onClick={(e) => {
                            e.stopPropagation();
                            onConfirm();
                        }}
                    >
                        {options?.confirmText || '확인'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
