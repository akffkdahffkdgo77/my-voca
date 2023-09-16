'use client';

import React, { useEffect } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';

import { OptionsType } from './useSnackbar';

type SnackbarType = {
    children: React.ReactNode;
    options?: OptionsType;
    onClose: () => void;
};

function getVariant(variant = 'default') {
    switch (variant) {
        case 'error':
            return 'bg-red-500 text-white';
        case 'info':
            return 'bg-blue-500 text-white';
        case 'warning':
            return 'bg-yellow-500 text-black';
        case 'success':
            return 'bg-green-500 text-white';
        default:
            return 'bg-black text-white';
    }
}

export default function Snackbar({ children, options, onClose }: SnackbarType) {
    useEffect(() => {
        const timerId = setTimeout(() => onClose(), 5000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
        <div className={`${getVariant(options?.variant)} flex h-full min-h-[48px] w-full min-w-[280px] animate-fade-in-out items-center justify-between rounded-xl px-3 py-[9px]`}>
            <p className="whitespace-pre-wrap break-all text-sm">{children}</p>
            <div className="flex items-center">
                <div className={`mx-2.5 h-5 w-px ${options?.variant === 'warning' ? 'bg-black' : 'bg-gray-50/50'}`} />
                <button type="button" onClick={onClose}>
                    <XMarkIcon width={20} height={20} />
                </button>
            </div>
        </div>
    );
}
