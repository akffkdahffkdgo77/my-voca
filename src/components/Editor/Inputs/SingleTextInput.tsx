import { ChangeEvent, KeyboardEvent } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import { ArrowLeftFilled, ArrowRightFilled } from '@fluentui/react-icons';

import { COLOR, getBackgroundColor, getBorderColor, OptionalColorType } from '@utils/color';

import TextInput from '../Common/TextInput';

interface Props extends OptionalColorType {
  count?: number;
  definition?: string[];
  isDisabled?: boolean;
  isHidden?: boolean;
  word?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => void;
  onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
  onHiddenClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const SingleTextInput = ({ color = COLOR.Gray, isHidden, onHiddenClick, ...rest }: Props) => {
  return (
    <TWInputContainer color={color}>
      <TextInput color={color} {...rest} />
      {isHidden !== undefined && (
        <TWBlocker
          className="group"
          color={color}
          isHidden={isHidden}
          role="presentation"
          onClick={() => {
            if (onHiddenClick) {
              onHiddenClick();
            }
          }}
        >
          {isHidden ? (
            <ArrowRightFilled className="ml-5 !hidden h-10 w-10 animate-pulse group-hover:!block" />
          ) : (
            <ArrowLeftFilled className="ml-auto mr-5 !hidden h-10 w-10 animate-pulse group-hover:!block" />
          )}
        </TWBlocker>
      )}
    </TWInputContainer>
  );
};

export default SingleTextInput;

const TWInputContainer = styled.div(({ color }: Omit<Props, 'isDisabled'>) => [
  tw`relative grid grid-cols-single border-t bg-white last-of-type:border-b`,
  color && [getBorderColor(color), tw`divide-x divide-[inherit]`],
]);

const TWBlocker = styled.div(({ color, isHidden }: Omit<Props, 'isDisabled'>) => [
  tw`absolute bottom-0 left-px right-0 top-0 col-start-2 flex items-center !border-0 hover:cursor-pointer`,
  isHidden && color && getBackgroundColor(color),
  !isHidden && tw`animate-pulse bg-transparent hover:bg-gray-50/50`,
]);
