import { ChangeEvent, KeyboardEvent } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import { getBackgroundColor, getBorderColor, OptionalThemeType, StyleThemes } from '@utils/theme';

import TextInput from '../Common/TextInput';

interface Props extends OptionalThemeType {
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

const SingleTextInput = ({ theme = StyleThemes.Gray, isHidden, onHiddenClick, ...rest }: Props) => {
  return (
    <TWInputContainer theme={theme}>
      <TextInput theme={theme} {...rest} />
      {isHidden !== undefined && (
        <TWBlocker
          className="group"
          isHidden={isHidden}
          role="presentation"
          theme={theme}
          onClick={() => {
            if (onHiddenClick) {
              onHiddenClick();
            }
          }}
        >
          {isHidden ? (
            <ArrowRightIcon className="ml-5 hidden h-10 w-10 animate-pulse group-hover:block" />
          ) : (
            <ArrowLeftIcon className="ml-auto mr-5 hidden h-10 w-10 animate-pulse group-hover:block" />
          )}
        </TWBlocker>
      )}
    </TWInputContainer>
  );
};

export default SingleTextInput;

const TWInputContainer = styled.div(({ theme }: Omit<Props, 'isDisabled'>) => [
  tw`relative grid grid-cols-single border-t bg-white last-of-type:border-b`,
  theme && [getBorderColor(theme), tw`divide-x divide-[inherit]`],
]);

const TWBlocker = styled.div(({ theme, isHidden }: Omit<Props, 'isDisabled'>) => [
  tw`absolute bottom-0 left-px right-0 top-0 col-start-2 flex items-center !border-0 hover:cursor-pointer`,
  isHidden && theme && getBackgroundColor(theme),
  !isHidden && tw`animate-pulse bg-transparent hover:bg-gray-50/50`,
]);
