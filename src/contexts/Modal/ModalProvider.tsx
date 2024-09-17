import { createContext, ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import Modal, { ModalOptionsType } from '@components/Modal';

export interface ModalContext {
  handleModal: (options: ModalOptionsType) => Promise<boolean>;
}

export const ModalContext = createContext<ModalContext | undefined>(undefined);

interface ModalProvider {
  children: ReactNode;
}

const ModalProvider = ({ children }: ModalProvider) => {
  const promiseInfo = useRef<(value: boolean | PromiseLike<boolean>) => void>(() => null);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<ModalOptionsType>({});

  const handleModal = useCallback((modalOptions: ModalOptionsType) => {
    return new Promise<boolean>((resolve) => {
      promiseInfo.current = resolve;
      setOpen(true);
      setOptions(modalOptions);
    });
  }, []);

  const handleConfirm = useCallback(() => {
    setOpen(false);
    promiseInfo.current(true);
    promiseInfo.current = () => null;
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    promiseInfo.current(false);
    promiseInfo.current = () => null;
  }, []);

  const value = useMemo(() => ({ handleModal }), [handleModal]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {open &&
        createPortal(
          <Modal options={options} onClose={handleClose} onConfirm={handleConfirm} />,
          document.getElementById('portal') as HTMLElement,
        )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
