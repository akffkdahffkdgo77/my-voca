import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { v4 as uuid } from 'uuid';

import Toast from './Toast';

export type OptionsType = {
    variant?: 'info' | 'error' | 'warning' | 'success' | 'default';
};

type ToastContextType = {
    setMessage: (content: string, options?: OptionsType) => void;
};

type ToastProviderType = {
    children: React.ReactNode;
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
};

type MessageType = { id: string; content: string; options?: OptionsType };

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('should use Toast within Toast Provider');
    }

    return context;
};

function getPosition(position?: string) {
    switch (position) {
        case 'top-right':
            return 'top-5 right-5';
        case 'top-left':
            return 'top-5 left-5';
        case 'top-center':
            return 'top-5 right-1/2 translate-x-1/2';
        case 'bottom-left':
            return 'bottom-5 left-5';
        case 'bottom-center':
            return 'bottom-5 right-1/2 translate-x-1/2';
        default:
            return 'bottom-5 right-5';
    }
}

export function ToastProvider({ children, position }: ToastProviderType) {
    const [modalElement, setModalElement] = useState<HTMLElement>();
    const [messages, setMessages] = useState<MessageType[]>([]);

    const handleOpen = useCallback(
        (content: string, options?: OptionsType) => {
            const newMessage = { id: uuid(), content, options };
            if (position?.includes('top')) {
                setMessages((prev) => [...prev, newMessage]);
            } else {
                setMessages((prev) => [newMessage, ...prev]);
            }
        },
        [position]
    );

    const handleClose = useCallback((id: string) => setMessages((prev) => prev.filter((message) => message.id !== id)), []);

    const context: ToastContextType = useMemo(() => ({ setMessage: handleOpen }), [handleOpen]);

    useEffect(() => {
        if (messages.length > 0) {
            setModalElement(document.getElementById('portal') as HTMLElement);
        } else {
            setModalElement(undefined);
        }
    }, [messages]);

    return (
        <ToastContext.Provider value={context}>
            {children}
            {modalElement
                ? createPortal(
                      <div className={`${getPosition(position)} z-1000 absolute flex flex-col gap-2.5`}>
                          {messages.map((message) => (
                              <Toast key={message.id} options={message.options} onClose={() => handleClose(message.id)}>
                                  {message.content}
                              </Toast>
                          ))}
                      </div>,
                      modalElement as HTMLElement
                  )
                : null}
        </ToastContext.Provider>
    );
}
