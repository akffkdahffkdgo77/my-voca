'use client';

import { useContext } from 'react';

import ModalContext from './modal-context';

const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('Modal should be used within `ModalContext`');
    }

    return context.handleModal;
};

export default useModal;