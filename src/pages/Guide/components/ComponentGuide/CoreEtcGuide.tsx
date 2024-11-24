import Button, { ButtonSizeType } from '@components/Button';
import Checkbox from '@components/Checkbox';
import ColorPicker from '@components/ColorPicker';
import Select from '@components/Select';
import Typography from '@components/Typography';

import { useColor } from '@hooks/utils';
import { STATUS_OPTIONS } from '@utils/constants';

const BUTTON_SIZE: ButtonSizeType[] = ['small', 'medium', 'large', 'extraLarge'];

const CoreEtcGuide = () => {
  const { color, onColorChange } = useColor();

  return (
    <div className="relative w-full">
      <div className="absolute right-5 top-5 space-x-1">
        <ColorPicker onClick={onColorChange} />
      </div>
      <div className="min-w-100 space-y-5 rounded bg-white p-5 shadow-md">
        <Typography component="h3" fontWeight="700" variant="b24">
          Status Select
        </Typography>
        <div className="flex w-max gap-x-5">
          <Select caption="Status" color={color} options={STATUS_OPTIONS} value="todo" />
        </div>
        <Typography component="h3" fontWeight="700" variant="b24">
          Checkbox
        </Typography>
        <div className="flex items-center gap-x-5">
          <Checkbox color={color} />
          <Checkbox isChecked color={color} id="agree" />
        </div>
        <Typography component="h3" fontWeight="700" variant="b24">
          Button
        </Typography>
        <div className="space-y-5">
          <div className="space-x-2.5">
            {BUTTON_SIZE.map((size) => (
              <Button key={size} color={color} size={size} text="등록" variant="outlined" />
            ))}
          </div>
          <div className="space-x-2.5">
            {BUTTON_SIZE.map((size) => (
              <Button key={size} color={color} size={size} text="저장" variant="contained" />
            ))}
          </div>
          <div className="space-x-2.5">
            {BUTTON_SIZE.map((size) => (
              <Button key={size} color={color} size={size} text="공부" variant="text" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreEtcGuide;
