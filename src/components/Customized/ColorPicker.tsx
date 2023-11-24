import { PaintBrushIcon } from '@heroicons/react/24/outline';
import { Button } from 'components';

import { StyleThemes } from 'utils/theme';

type CustomizedColorPickerType = {
    onClick: (newTheme: StyleThemes) => void;
};

export default function CustomizedColorPicker({ onClick }: CustomizedColorPickerType) {
    return (
        <>
            {Object.keys(StyleThemes).map((key) => {
                const color = StyleThemes[key as keyof typeof StyleThemes];
                return (
                    <Button key={key} title={`${key} 색상으로 바꾸기`} type="button" theme={color} variant="icon" shape="circle" onClick={() => onClick(color)}>
                        <PaintBrushIcon className="m-auto h-3 w-3 text-inherit" aria-hidden="true" />
                    </Button>
                );
            })}
        </>
    );
}
