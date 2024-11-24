import tw from 'twin.macro';

import Input from '@components/Input';
import { InputVariantType } from '@components/Input/Input';

import { COLOR, getTextColor } from '@utils/color';

interface Props {
  color: COLOR;
  defaultValue?: string;
  isDisabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  variant?: InputVariantType;
}

const TitleTextInput = ({ isDisabled, color, variant = 'text', defaultValue, placeholder, maxLength }: Props) => {
  return (
    <Input
      color={color}
      defaultValue={defaultValue}
      hiddenText="단어장 이름"
      isDisabled={isDisabled}
      maxLength={maxLength}
      placeholder={placeholder}
      type="text"
      variant={variant}
      twStyle={{
        ...tw`h-full bg-inherit px-0 font-nanumpenscript text-h3 tablet:text-h1`,
        ...getTextColor(color),
      }}
    />
  );
};

export default TitleTextInput;
