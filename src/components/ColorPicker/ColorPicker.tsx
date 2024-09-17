import { Fragment } from 'react';

import { PaintBrushIcon } from '@heroicons/react/24/outline';

import Button from '@components/Button';

import { StyleThemes } from '@utils/theme';

interface Props {
  onClick: (newTheme: StyleThemes) => void;
}

const ColorPicker = ({ onClick }: Props) => {
  return (
    <Fragment>
      {Object.keys(StyleThemes).map((key) => {
        const color = StyleThemes[key as keyof typeof StyleThemes];
        return (
          <Button
            key={key}
            shape="circle"
            theme={color}
            title={`${key} 색상으로 바꾸기`}
            type="button"
            variant="icon"
            onClick={() => onClick(color)}
          >
            <PaintBrushIcon aria-hidden="true" className="m-auto h-3 w-3 text-inherit" />
          </Button>
        );
      })}
    </Fragment>
  );
};

export default ColorPicker;
