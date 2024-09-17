import { useId } from 'react';

import tw, { theme as twinTheme } from 'twin.macro';

import Button from '@components/Button';
import Typography from '@components/Typography';

import { OptionalThemeType, StyleThemes } from '@utils/theme';

interface Props extends OptionalThemeType {
  buttonText: string;
  onClick?: () => void;
}

const LayoutChangeButton = ({ theme = StyleThemes.Gray, buttonText, onClick }: Props) => {
  const id = useId();

  return (
    <div className="mb-5 flex items-end gap-2.5">
      <div className="flex flex-col">
        <Typography
          color={twinTheme`colors.gray.900`}
          component="small"
          id={id}
          twStyle={customStyle.label}
          variant="c11"
        >
          Layout
        </Typography>
        <Button
          aria-describedby={id}
          backgroundColor={twinTheme`colors.white`}
          borderRadius="16px"
          shape="rounded"
          size="large"
          theme={theme}
          type="button"
          variant="outlined"
          onClick={onClick}
        >
          <Typography align="center" fontFamily="nanumpenscript" lineHeight="24px" variant="h4">
            {buttonText}
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default LayoutChangeButton;

const customStyle = {
  label: tw`uppercase`,
};
