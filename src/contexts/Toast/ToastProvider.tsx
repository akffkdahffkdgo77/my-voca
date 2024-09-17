import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { v4 as uuid } from 'uuid';

import Toast, { OptionsType } from '@components/Toast';

type PositionType = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';

type MessageType = {
  content: string;
  id: string;
  options?: OptionsType;
};

interface ToastContext {
  setMessage: (content: string, options?: OptionsType) => void;
}

export const ToastContext = createContext<ToastContext | undefined>(undefined);

interface ToastProvider {
  children: ReactNode;
  position?: PositionType;
}

function getPosition(position?: PositionType) {
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

const ToastProvider = ({ children, position }: ToastProvider) => {
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
    [position],
  );

  const handleClose = useCallback(
    (id: string) => setMessages((prev) => prev.filter((message) => message.id !== id)),
    [],
  );

  const context: ToastContext = useMemo(() => ({ setMessage: handleOpen }), [handleOpen]);

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
            <div className={`${getPosition(position)} absolute z-1000 flex flex-col gap-2.5`}>
              {messages.map((message) => (
                <Toast key={message.id} options={message.options} onClose={() => handleClose(message.id)}>
                  {message.content}
                </Toast>
              ))}
            </div>,
            modalElement as HTMLElement,
          )
        : null}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
