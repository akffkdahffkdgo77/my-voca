import { ChangeEvent, useCallback, useState } from 'react';

import tw from 'twin.macro';

import ColorPicker from '@components/ColorPicker';
import Input from '@components/Input';
import Textarea from '@components/Textarea';
import Typography from '@components/Typography';

import { useTheme } from '@hooks/utils';

const SAMPLE_TEXT =
  '설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력';

const InputGuide = () => {
  const { theme, onThemeChange } = useTheme();
  const [value, setValue] = useState(SAMPLE_TEXT);

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.currentTarget.value), []);

  return (
    <div className="relative flex-1">
      <div className="absolute right-5 top-5 space-x-1">
        <ColorPicker onClick={onThemeChange} />
      </div>
      <div className="w-max space-y-5 rounded bg-white p-5 shadow-md">
        <Typography component="h3" fontWeight="700" variant="b24">
          Input
        </Typography>
        <div className="flex min-w-120 items-center gap-x-10">
          <Typography component="h4" fontWeight="600" twStyle={customStyle.input} variant="b12">
            Default
          </Typography>
          <Input placeholder="닉네임을 입력하세요." theme={theme} variant="text" />
        </div>
        <div className="flex w-120 items-center gap-x-10">
          <Typography component="h4" fontWeight="600" twStyle={customStyle.input} variant="b12">
            Outlined
          </Typography>
          <Input
            isError
            helperText="최소 3자 입력하세요"
            labelText="닉네임"
            placeholder="닉네임을 입력하세요."
            theme={theme}
            variant="outlined"
          />
        </div>
        <div className="flex w-120 items-center gap-x-10">
          <Typography component="h4" fontWeight="600" twStyle={customStyle.input} variant="b12">
            Contained
          </Typography>
          <Input
            isError
            helperText="최소 3자 입력하세요"
            labelText="닉네임"
            placeholder="닉네임을 입력하세요."
            theme={theme}
            variant="contained"
          />
        </div>
        <Typography component="h3" fontWeight="700" variant="b24">
          Textarea
        </Typography>
        <div>
          <Textarea
            isAutoHeight
            height={100}
            labelText="Auto Height"
            placeholder="설명을 입력하세요"
            value={value}
            onChange={handleChange}
          />
          <Textarea
            height={100}
            labelText="Scrollable"
            placeholder="설명을 입력하세요"
            value={SAMPLE_TEXT.concat(SAMPLE_TEXT)}
          />
        </div>
      </div>
    </div>
  );
};

export default InputGuide;

const customStyle = {
  input: tw`w-10`,
};
