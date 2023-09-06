'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { v4 as uuidv4 } from 'uuid';

import Snackbar from './snackbar';

export type OptionsType = {
    variant?: 'info' | 'error' | 'warning' | 'success' | 'default';
};

type SnackbarContextType = {
    setMessage: (content: string, options?: OptionsType) => void;
};

type SnackbarProviderType = {
    children: React.ReactNode;
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
};

type MessageType = { id: string; content: string; options?: OptionsType };

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);

    if (!context) {
        throw new Error('should use Snackbar within Snackbar Provider');
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

export function SnackbarProvider({ children, position }: SnackbarProviderType) {
    const [modalElement, setModalElement] = useState<HTMLElement>();
    const [messages, setMessages] = useState<MessageType[]>([]);

    const handleOpen = useCallback(
        (content: string, options?: OptionsType) => {
            const newMessage = { id: uuidv4(), content, options };
            if (position?.includes('top')) {
                setMessages((prev) => [...prev, newMessage]);
            } else {
                setMessages((prev) => [newMessage, ...prev]);
            }
        },
        [position]
    );

    const handleClose = useCallback((id: string) => setMessages((prev) => prev.filter((message) => message.id !== id)), []);

    const context: SnackbarContextType = useMemo(() => ({ setMessage: handleOpen }), [handleOpen]);

    useEffect(() => {
        if (messages.length > 0) {
            setModalElement(document.getElementById('portal') as HTMLElement);
        } else {
            setModalElement(undefined);
        }
    }, [messages]);

    return (
        <SnackbarContext.Provider value={context}>
            {children}
            {modalElement
                ? createPortal(
                      <div className={`${getPosition(position)} absolute z-[1000] flex flex-col gap-2.5`}>
                          {messages.map((message) => (
                              <Snackbar key={message.id} options={message.options} onClose={() => handleClose(message.id)}>
                                  {message.content}
                              </Snackbar>
                          ))}
                      </div>,
                      modalElement as HTMLElement
                  )
                : null}
        </SnackbarContext.Provider>
    );
}
