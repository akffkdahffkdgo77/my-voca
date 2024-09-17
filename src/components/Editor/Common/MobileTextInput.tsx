import { ChangeEvent, KeyboardEvent } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

import Checkbox from '@components/Checkbox';
import Input from '@components/Input';
import Textarea from '@components/Textarea';

import { getBackgroundColor, OptionalThemeType, StyleThemes } from '@utils/theme';

interface Props extends OptionalThemeType {
  count?: number;
  definition?: string;
  isDisabled?: boolean;
  isHidden?: boolean;
  word?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => void;
  onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
  onHiddenClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const MobileTextInput = (props: Props) => {
  const {
    theme = StyleThemes.Gray,
    isHidden,
    onHiddenClick,
    isDisabled,
    count = 0,
    word,
    definition,
    onChange,
    onKeyDown,
    onClick,
  } = props;

  return (
    <div className="relative bg-white shadow-md">
      <Input
        hiddenText="단어"
        isDisabled={isDisabled}
        maxLength={30}
        placeholder="word"
        theme={theme}
        twStyle={customStyle.input}
        value={word}
        variant="contained"
        onChange={(e) => {
          if (onChange) {
            onChange(e, 0);
          }
        }}
        onKeyDown={onKeyDown}
      />
      <div className="absolute right-2 top-2 flex items-center justify-between gap-x-1">
        <Checkbox hiddenText="테스트 1회" isChecked={count >= 1} theme={theme} onChange={onClick} />
        <Checkbox hiddenText="테스트 2회" isChecked={count >= 2} theme={theme} onChange={onClick} />
        <Checkbox hiddenText="테스트 3회" isChecked={count >= 3} theme={theme} onChange={onClick} />
      </div>
      <Textarea
        containerStyle={customStyle.textareaContainer}
        hiddenText="뜻"
        isDisabled={isDisabled}
        placeholder="단어, 낱말"
        value={definition}
        onChange={(e) => {
          if (onChange) {
            onChange(e, 1);
          }
        }}
        onKeyDown={onKeyDown}
      />
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
            <ArrowDownIcon className="mx-auto mt-5 hidden h-10 w-10 animate-pulse group-hover:block" />
          ) : (
            <ArrowUpIcon className="mx-auto mb-5 hidden h-10 w-10 animate-pulse group-hover:block" />
          )}
        </TWBlocker>
      )}
    </div>
  );
};

export default MobileTextInput;

const customStyle = {
  input: tw`rounded-none pr-18 font-nanumpenscript text-h4 shadow-md`,
  textareaContainer: tw`bg-grid`,
};

const TWBlocker = styled.div(({ theme, isHidden }: Omit<Props, 'isDisabled'>) => [
  tw`absolute -bottom-px left-0 right-0 flex h-50 items-center hover:cursor-pointer`,
  isHidden && theme && getBackgroundColor(theme),
  !isHidden && tw`animate-pulse bg-transparent hover:bg-gray-50/50`,
]);
