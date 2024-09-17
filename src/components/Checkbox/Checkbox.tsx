import { InputHTMLAttributes, useEffect, useId, useState } from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

import { CheckIcon } from '@heroicons/react/24/outline';

import { getTextColor, OptionalThemeType, StyleThemes } from '@utils/theme';

type StylesType = {
  twStyle?: TwStyle;
} & OptionalThemeType;

interface Props extends InputHTMLAttributes<HTMLInputElement>, StylesType {
  hiddenText?: string;
  isChecked?: boolean;
  twStyle?: TwStyle;
}

const Checkbox = ({ theme = StyleThemes.Gray, twStyle, isChecked, hiddenText, ...props }: Props) => {
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
    <TWLabel htmlFor={id} theme={theme} twStyle={twStyle}>
      <span className="sr-only">{hiddenText}</span>
      <input
        {...props}
        checked={selected === id}
        className="peer sr-only"
        id={id}
        type="checkbox"
        onChange={() => setSelected((prev) => (prev === id ? '' : id))}
      />
      <CheckIcon className="absolute -left-1 -top-1.25 hidden h-5 w-6 stroke-4 text-inherit peer-checked:block" />
    </TWLabel>
  );
};

export default Checkbox;

const TWLabel = styled.label(({ theme, twStyle }: StylesType) => [
  tw`relative flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-gray-900 focus-within:ring-1`,
  theme && getTextColor(theme),
  twStyle && twStyle,
]);
