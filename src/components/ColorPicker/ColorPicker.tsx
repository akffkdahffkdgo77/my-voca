import { Fragment } from 'react';

import { PaintBrushIconButton } from '@components/IconButton';

import { COLOR } from '@utils/color';

interface Props {
  onClick: (newColor: COLOR) => void;
}

const ColorPicker = ({ onClick }: Props) => {
  return (
    <Fragment>
      {Object.keys(COLOR).map((key) => {
        const color = COLOR[key as keyof typeof COLOR];
        return <PaintBrushIconButton key={color} color={color} onClick={() => onClick(color)} />;
      })}
    </Fragment>
  );
};

export default ColorPicker;
