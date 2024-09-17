import { useEffect } from 'react';

import Button from '@components/Button';
import Typography from '@components/Typography';

import { textStyle } from '@utils/theme';

export type ModalOptionsType = {
  cancelText?: string;
  confirmText?: string;
  message?: string;
  messageType?: string;
};

interface Props {
  onClose: () => void;
  onConfirm: () => void;
  options?: ModalOptionsType;
}

const Modal = ({ options, onConfirm, onClose }: Props) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/70"
      role="presentation"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="min-w-80 overflow-hidden rounded-lg bg-white p-7.5 shadow-inner">
        <Typography component="p" fontWeight="500" gutterBottom={40} twStyle={textStyle.modalText} variant="b16">
          {options?.message}
        </Typography>
        <div className="mx-auto w-full space-x-2.5 text-right">
          {options?.messageType === 'confirm' && (
            <Button
              shape="square"
              size="large"
              type="button"
              variant="outlined"
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
            size="large"
            type="button"
            variant="contained"
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
};

export default Modal;
