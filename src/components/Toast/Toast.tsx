import { ReactNode, useEffect } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import { XMarkIcon } from '@heroicons/react/24/outline';

import Button from '@components/Button';
import Typography from '@components/Typography';

import { textStyle } from '@utils/theme';

export type OptionsType = {
  variant?: 'default' | 'error' | 'info' | 'success' | 'warning';
};

interface Props {
  children: ReactNode;
  onClose: () => void;
  options?: OptionsType;
}

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

const Toast = ({ children, options, onClose }: Props) => {
  useEffect(() => {
    const timerId = setTimeout(onClose, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <TWContainer variant={options?.variant}>
      <Typography color="inherit" lineHeight="20px" twStyle={textStyle.modalText} variant="b14">
        {children}
      </Typography>
      <div className="flex items-center">
        <TWDivider variant={options?.variant} />
        <Button backgroundColor="transparent" height={20} type="button" variant="icon" width={20} onClick={onClose}>
          <XMarkIcon height={20} width={20} />
        </Button>
      </div>
    </TWContainer>
  );
};

export default Toast;

const TWContainer = styled.div(({ variant }: OptionsType) => [
  tw`flex h-full min-h-12 w-full min-w-70 animate-fade-in-out items-center justify-between rounded-xl px-3 py-2.25`,
  variant && getVariant(variant),
]);

const TWDivider = styled.div(({ variant }: OptionsType) => [
  tw`mx-2.5 h-5 w-px`,
  variant === 'warning' ? 'bg-black' : 'bg-gray-50/50',
]);
