import { useId } from 'react';

import { LayoutMultiplierIconButton } from '@components/IconButton';
import Typography from '@components/Typography';

import { COLOR, OptionalColorType } from '@utils/color';

interface Props extends OptionalColorType {
  type: '1x' | '2x';
  onClick?: () => void;
}

const LayoutChangeButton = ({ color = COLOR.Gray, type, onClick }: Props) => {
  const id = useId();

  return (
    <div className="mb-5 flex items-end gap-2.5">
      <div className="flex flex-col">
        <Typography color={COLOR.Gray} component="small" id={id} transform="uppercase" variant="c11">
          Layout
        </Typography>
        <LayoutMultiplierIconButton color={color} id={id} type={type} onClick={onClick} />
      </div>
    </div>
  );
};

export default LayoutChangeButton;
