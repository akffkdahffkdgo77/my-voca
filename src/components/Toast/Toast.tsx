import React, { useEffect } from 'react';

import styled from '@emotion/styled';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button, Typography } from 'components/Core';
import tw from 'twin.macro';

import { OptionsType } from './useToast';

import { textStyle } from 'utils/theme';

type ToastType = {
    children: React.ReactNode;
    options?: OptionsType;
    onClose: () => void;
};

function getVariant(variant = 'default') {
    switch (variant) {
        case 'error':
            return tw`bg-red-500 text-white`;
        case 'info':
            return tw`bg-blue-500 text-white`;
        case 'warning':
            return tw`bg-yellow-500 text-black`;
        case 'success':
            return tw`bg-green-500 text-white`;
        default:
            return tw`bg-black text-white`;
    }
}

const TwContainer = styled.div(({ variant }: OptionsType) => [
    tw`flex h-full min-h-48pxr w-full min-w-280pxr animate-fade-in-out items-center justify-between rounded-xl px-3 py-9pxr`,
    variant && getVariant(variant)
]);

const TwDivider = styled.div(({ variant }: OptionsType) => [tw`mx-2.5 h-5 w-px`, variant === 'warning' ? 'bg-black' : 'bg-gray-50/50']);

export default function Toast({ children, options, onClose }: ToastType) {
    useEffect(() => {
        const timerId = setTimeout(onClose, 5000);
        return () => clearTimeout(timerId);
    }, []);

    return (
        <TwContainer variant={options?.variant}>
            <Typography variant="b14" lineHeight="20px" color="inherit" twStyle={textStyle.modalText}>
                {children}
            </Typography>
            <div className="flex items-center">
                <TwDivider variant={options?.variant} />
                <Button type="button" variant="icon" width={20} height={20} backgroundColor="transparent" onClick={onClose}>
                    <XMarkIcon width={20} height={20} />
                </Button>
            </div>
        </TwContainer>
    );
}
