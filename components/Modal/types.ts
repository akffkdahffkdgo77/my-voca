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
