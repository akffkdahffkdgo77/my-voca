import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import ColorPicker from '@components/ColorPicker';
import Select from '@components/Select';
import Typography from '@components/Typography';

import { useTheme } from '@hooks/utils';
import { STATUS_OPTIONS } from '@utils/constants';
import { ButtonSizeType } from '@utils/theme';

const BUTTON_SIZE: ButtonSizeType[] = ['small', 'medium', 'large', 'extraLarge'];

const CoreEtcGuide = () => {
  const { theme, onThemeChange } = useTheme();

  return (
    <div className="relative w-full">
      <div className="absolute right-5 top-5 space-x-1">
        <ColorPicker onClick={onThemeChange} />
      </div>
      <div className="min-w-100 space-y-5 rounded bg-white p-5 shadow-md">
        <Typography component="h3" fontWeight="700" variant="b24">
          Status Select
        </Typography>
        <div className="flex w-max gap-x-5">
          <Select caption="Status" options={STATUS_OPTIONS} theme={theme} value="todo" />
        </div>
        <Typography component="h3" fontWeight="700" variant="b24">
          Checkbox
        </Typography>
        <div className="flex items-center gap-x-5">
          <Checkbox theme={theme} />
          <Checkbox isChecked id="agree" theme={theme} />
        </div>
        <Typography component="h3" fontWeight="700" variant="b24">
          Button
        </Typography>
        <div className="space-y-5">
          <div className="space-x-2.5">
            {BUTTON_SIZE.map((size) => (
              <Button key={size} size={size} theme={theme} variant="outlined">
                등록
              </Button>
            ))}
          </div>
          <div className="space-x-2.5">
            {BUTTON_SIZE.map((size) => (
              <Button key={size} size={size} theme={theme} variant="contained">
                저장
              </Button>
            ))}
          </div>
          <div className="space-x-2.5">
            {BUTTON_SIZE.map((size) => (
              <Button key={size} size={size} theme={theme} variant="text">
                공부
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreEtcGuide;
