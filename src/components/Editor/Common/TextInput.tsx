import { ChangeEvent, Fragment, KeyboardEvent } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import Checkbox from '@components/Checkbox';
import Input from '@components/Input';
import Typography from '@components/Typography';

import { COLOR, getBackgroundColor, getLightBorderColor, OptionalColorType } from '@utils/color';

interface Props extends OptionalColorType {
  count?: number;
  definition?: string[];
  isDisabled?: boolean;
  word?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => void;
  onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextInput = ({
  color = COLOR.Gray,
  isDisabled,
  count = 0,
  word,
  definition = ['', ''],
  onChange,
  onKeyDown,
  onClick,
}: Props) => {
  return (
    <Fragment>
      <div className="group relative h-full">
        <div className="absolute bottom-0 left-2 top-0 flex w-5 flex-col items-center justify-evenly">
          <Checkbox color={color} hiddenText="테스트 1회" isChecked={count >= 1} onChange={onClick} />
          <Checkbox color={color} hiddenText="테스트 2회" isChecked={count >= 2} onChange={onClick} />
          <Checkbox color={color} hiddenText="테스트 3회" isChecked={count >= 3} onChange={onClick} />
        </div>
        <Input
          color={color}
          containerStyle={customStyle.titleContainer}
          hiddenText="단어"
          isDisabled={isDisabled}
          maxLength={30}
          placeholder="word"
          twStyle={customStyle.title}
          value={word}
          variant="text"
          onChange={(e) => {
            if (onChange) {
              onChange(e, 0);
            }
          }}
          onKeyDown={onKeyDown}
        />
        {word && word.length > 8 && (
          <div className="hidden group-hover:block">
            <TWTriangle color={color} />
            <Typography
              fontWeight="600"
              twStyle={{ ...customStyle.tooltip, ...getBackgroundColor(color) }}
              variant="b14"
            >
              {word}
            </Typography>
          </div>
        )}
      </div>
      <div className="divide-y divide-inherit bg-grid">
        {definition?.map((val, index) => (
          <Input
            key={index}
            color={color}
            height={definition.length < 2 ? 98 : 48}
            hiddenText="뜻"
            isDisabled={isDisabled}
            maxLength={100}
            placeholder={index % 2 === 0 ? '단어, 낱말' : '이야기, 말'}
            value={val}
            variant="text"
            onChange={(e) => {
              if (onChange) {
                onChange(e, index + 1);
              }
            }}
            onKeyDown={onKeyDown}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default TextInput;

const customStyle = {
  title: tw`h-full bg-transparent pl-10 font-nanumpenscript text-h4`,
  titleContainer: tw`h-full`,
  tooltip: tw`absolute -bottom-9 left-10 z-200 h-auto min-w-4/5 whitespace-nowrap rounded bg-gray-100 p-5 shadow-xl`,
};

const TWTriangle = styled.div(({ color }: Props) => [
  tw`absolute bottom-4 right-1/2 h-4 border-4`,
  color && [getLightBorderColor(color), tw`border-x-transparent border-t-transparent`],
]);
