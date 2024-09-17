import { ChangeEvent, Fragment, KeyboardEvent } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import { TextInput } from '@components/Editor';

import { WordType } from '@utils/data';
import { getBackgroundColor, getBorderColor, OptionalThemeType, StyleThemes } from '@utils/theme';

interface Props extends OptionalThemeType {
  isDisabled?: boolean;
  isHidden?: boolean[];
  words?: WordType[];
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => void;
  onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
  onHiddenClick?: (idx?: string) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const DoubleTextInput = ({
  theme = StyleThemes.Gray,
  isDisabled,
  words = [],
  isHidden = [],
  onHiddenClick,
  ...rest
}: Props) => {
  return (
    <TWInputContainer theme={theme}>
      {words.map((word, index) => (
        <Fragment key={index}>
          <TextInput isDisabled={isDisabled} theme={theme} {...word} {...rest} />
          {isHidden.length > 0 && (
            <TWBlocker
              className="group"
              isEven={(index + 1) % 2 === 0}
              isHidden={isHidden[index]}
              role="presentation"
              theme={theme}
              onClick={() => {
                if (onHiddenClick) {
                  onHiddenClick(word.wordIdx);
                }
              }}
            >
              {isHidden[index] ? (
                <ArrowRightIcon className="ml-5 hidden h-10 w-10 animate-pulse group-hover:block" />
              ) : (
                <ArrowLeftIcon className="ml-auto mr-5 hidden h-10 w-10 animate-pulse group-hover:block" />
              )}
            </TWBlocker>
          )}
        </Fragment>
      ))}
    </TWInputContainer>
  );
};

export default DoubleTextInput;

const TWBlocker = styled.div(
  ({ theme, isEven, isHidden }: { isEven?: boolean; isHidden?: boolean } & OptionalThemeType) => [
    tw`absolute bottom-0 left-px right-0 top-0 flex items-center !border-0 hover:cursor-pointer`,
    isHidden && theme && getBackgroundColor(theme),
    !isHidden && tw`animate-pulse bg-transparent hover:bg-gray-50/50`,
    isEven && tw`[grid-column:4/-1]`,
    isEven === false && tw`[grid-column:2/2]`,
  ],
);

const TWInputContainer = styled.div(({ theme }: Omit<Props, 'isDisabled'>) => [
  tw`relative grid grid-cols-double border-t bg-white last-of-type:border-b`,
  theme && [getBorderColor(theme), tw`divide-x divide-[inherit]`],
]);
