import { ChangeEvent, Fragment, KeyboardEvent } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import { ArrowLeftFilled, ArrowRightFilled } from '@fluentui/react-icons';

import { TextInput } from '@components/Editor';

import { COLOR, getBackgroundColor, getBorderColor, OptionalColorType } from '@utils/color';
import { WordType } from '@utils/data';

interface Props extends OptionalColorType {
  isDisabled?: boolean;
  isHidden?: boolean[];
  words?: WordType[];
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => void;
  onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
  onHiddenClick?: (idx?: string) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const DoubleTextInput = ({
  color = COLOR.Gray,
  isDisabled,
  words = [],
  isHidden = [],
  onHiddenClick,
  ...rest
}: Props) => {
  return (
    <TWInputContainer color={color}>
      {words.map((word, index) => (
        <Fragment key={index}>
          <TextInput color={color} isDisabled={isDisabled} {...word} {...rest} />
          {isHidden.length > 0 && (
            <TWBlocker
              className="group"
              color={color}
              isEven={(index + 1) % 2 === 0}
              isHidden={isHidden[index]}
              role="presentation"
              onClick={() => {
                if (onHiddenClick) {
                  onHiddenClick(word.wordIdx);
                }
              }}
            >
              {isHidden[index] ? (
                <ArrowRightFilled className="ml-5 !hidden h-10 w-10 animate-pulse group-hover:!block" />
              ) : (
                <ArrowLeftFilled className="ml-auto mr-5 !hidden h-10 w-10 animate-pulse group-hover:!block" />
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
  ({ color, isEven, isHidden }: { isEven?: boolean; isHidden?: boolean } & OptionalColorType) => [
    tw`absolute bottom-0 left-px right-0 top-0 flex items-center !border-0 hover:cursor-pointer`,
    isHidden && color && getBackgroundColor(color),
    !isHidden && tw`animate-pulse bg-transparent hover:bg-gray-50/50`,
    isEven && tw`[grid-column:4/-1]`,
    isEven === false && tw`[grid-column:2/2]`,
  ],
);

const TWInputContainer = styled.div(({ color }: Omit<Props, 'isDisabled'>) => [
  tw`relative grid grid-cols-double border-t bg-white last-of-type:border-b`,
  color && [getBorderColor(color), tw`divide-x divide-[inherit]`],
]);
