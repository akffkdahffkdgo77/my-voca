import { ChangeEvent, KeyboardEvent } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import { ArrowDownFilled, ArrowUpFilled } from '@fluentui/react-icons';

import Checkbox from '@components/Checkbox';
import Input from '@components/Input';
import Textarea from '@components/Textarea';

import { COLOR, getBackgroundColor, OptionalColorType } from '@utils/color';

interface Props extends OptionalColorType {
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
    color = COLOR.Gray,
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
        color={color}
        hiddenText="단어"
        isDisabled={isDisabled}
        maxLength={30}
        placeholder="word"
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
        <Checkbox color={color} hiddenText="테스트 1회" isChecked={count >= 1} onChange={onClick} />
        <Checkbox color={color} hiddenText="테스트 2회" isChecked={count >= 2} onChange={onClick} />
        <Checkbox color={color} hiddenText="테스트 3회" isChecked={count >= 3} onChange={onClick} />
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
            <ArrowDownFilled className="mx-auto mt-5 !hidden size-10 animate-pulse group-hover:!block" />
          ) : (
            <ArrowUpFilled className="mx-auto mb-5 !hidden size-10 animate-pulse group-hover:!block" />
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

const TWBlocker = styled.div(({ color, isHidden }: Omit<Props, 'isDisabled'>) => [
  tw`absolute -bottom-px left-0 right-0 flex h-50 items-center hover:cursor-pointer`,
  isHidden && color && getBackgroundColor(color),
  !isHidden && tw`animate-pulse bg-transparent hover:bg-gray-50/50`,
]);
