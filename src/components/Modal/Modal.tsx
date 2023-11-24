import { useEffect } from 'react';

import { Button, Typography } from 'components/Core';
import tw from 'twin.macro';

import { ModalOptionsType } from './useModal';

type ModalType = {
    options?: ModalOptionsType;
    onClick: () => void;
    onConfirm: () => void;
    onClose: () => void;
};

export default function Modal({ onClick, options, onConfirm, onClose }: ModalType) {
    useEffect(() => {
        document.body.className = 'overflow-hidden';

        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <div
            role="presentation"
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/70"
        >
            <div className="min-w-320pxr overflow-hidden rounded-lg bg-white p-30pxr shadow-inner ">
                <Typography variant="b14" component="p" gutterBottom={40} twStyle={tw`whitespace-pre-wrap break-all`}>
                    {options?.message}
                </Typography>
                <div className="mx-auto w-full space-x-2.5 text-right">
                    {options?.messageType === 'confirm' && (
                        <Button
                            shape="square"
                            variant="outlined"
                            size="large"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                        >
                            {options?.cancelText ?? '취소'}
                        </Button>
                    )}
                    <Button
                        shape="square"
                        variant="contained"
                        size="large"
                        type="button"
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
