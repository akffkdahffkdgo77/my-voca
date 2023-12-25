import { Button, Checkbox, CustomizedColorPicker, Typography } from 'components';

import { useTheme } from 'hooks';
import { ButtonSizeType } from 'utils/theme';

const BUTTON_SIZE: ButtonSizeType[] = ['small', 'medium', 'large', 'extraLarge'];

export default function CoreEtcGuide() {
    const { theme, handleClick } = useTheme();

    return (
        <div className="relative w-full">
            <div className="absolute right-5 top-5 space-x-1">
                <CustomizedColorPicker onClick={handleClick} />
            </div>
            <div className="min-w-400pxr space-y-5 rounded bg-white p-5 shadow-md">
                <Typography variant="b24" fontWeight="700" component="h3">
                    Checkbox
                </Typography>
                <div className="flex items-center gap-x-5">
                    <Checkbox theme={theme} />
                    <Checkbox theme={theme} isChecked id="agree" />
                </div>
                <Typography variant="b24" fontWeight="700" component="h3">
                    Button
                </Typography>
                <div className="space-y-5">
                    <div className="space-x-2.5">
                        {BUTTON_SIZE.map((size) => (
                            <Button key={size} theme={theme} variant="outlined" size={size}>
                                등록
                            </Button>
                        ))}
                    </div>
                    <div className="space-x-2.5">
                        {BUTTON_SIZE.map((size) => (
                            <Button key={size} theme={theme} variant="contained" size={size}>
                                저장
                            </Button>
                        ))}
                    </div>
                    <div className="space-x-2.5">
                        {BUTTON_SIZE.map((size) => (
                            <Button key={size} theme={theme} variant="text" size={size}>
                                공부
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
