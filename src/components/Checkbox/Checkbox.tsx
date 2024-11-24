import { InputHTMLAttributes, useEffect, useId, useState } from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

import { CheckmarkIcon } from '@assets/icons';

import { COLOR, getTextColor, OptionalColorType } from '@utils/color';

type StylesType = {
  twStyle?: TwStyle;
} & OptionalColorType;

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>, StylesType {
  hiddenText?: string;
  isChecked?: boolean;
  twStyle?: TwStyle;
}

const Checkbox = ({ color = COLOR.Gray, twStyle, isChecked, hiddenText, ...props }: Props) => {
  const id = useId();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (isChecked) {
      setSelected(id);
    } else if (!isChecked && id) {
      setSelected('');
    }
  }, [isChecked, id]);

  return (
    <TWLabel color={color} htmlFor={id} twStyle={twStyle}>
      <span className="sr-only">{hiddenText}</span>
      <input
        {...props}
        checked={selected === id}
        className="peer sr-only"
        id={id}
        type="checkbox"
        onChange={(e) => {
          e.currentTarget.blur();
          setSelected((prev) => (prev === id ? '' : id));
        }}
      />
      <CheckmarkIcon className="absolute -left-0.5 -top-0.5 !hidden h-4 w-5 text-inherit peer-checked:!block" />
    </TWLabel>
  );
};

export default Checkbox;

const TWLabel = styled.label(({ color, twStyle }: StylesType) => [
  tw`relative flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-gray-900 focus-within:bg-gray-100 hover:bg-gray-50 active:bg-gray-100`,
  color && getTextColor(color),
  twStyle && twStyle,
]);
