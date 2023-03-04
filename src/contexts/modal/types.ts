export type ModalProviderPropsType = {
    children: React.ReactElement;
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
