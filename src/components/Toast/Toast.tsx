import { ReactNode, useEffect } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import { DismissIconButton } from '@components/IconButton';
import Typography from '@components/Typography';

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
      return tw`bg-red-500 text-white [&_svg]:hover:text-white/80 [&_svg]:active:scale-90`;
    case 'info':
      return tw`bg-blue-500 text-white [&_svg]:hover:text-white/80 [&_svg]:active:scale-90`;
    case 'warning':
      return tw`bg-yellow-500 text-black [&_svg]:hover:text-black/60 [&_svg]:active:scale-90`;
    case 'success':
      return tw`bg-green-500 text-white [&_svg]:hover:text-white/80 [&_svg]:active:scale-90`;
    default:
      return tw`bg-black text-white [&_svg]:hover:text-white/80 [&_svg]:active:scale-90`;
  }
}

const Toast = ({ children, options, onClose }: Props) => {
  useEffect(() => {
    const timerId = setTimeout(onClose, 1500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <TWContainer variant={options?.variant}>
      <Typography color="inherit" variant="b14" whiteSpace="pre-wrap" wordBreak="all">
        {children}
      </Typography>
      <div className="flex items-center">
        <TWDivider variant={options?.variant} />
        <DismissIconButton onClick={onClose} />
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
