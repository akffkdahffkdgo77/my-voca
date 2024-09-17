import { v4 as uuid } from 'uuid';

import ColorPicker from '@components/ColorPicker';
import { DoubleTextInput, MobileTextInput, SingleTextInput } from '@components/Editor';
import Input from '@components/Input';
import Typography from '@components/Typography';

import { useTheme } from '@hooks/utils';
import { WordType } from '@utils/data';
import { getTextColor, textStyle } from '@utils/theme';

const DUMMY_WORDS: WordType[] = [
  { wordIdx: uuid(), count: 1, word: '단어', definition: ['뜻', '뜻2'], isHighlighted: false, isMemorized: false },
  { wordIdx: uuid(), count: 3, word: '단어', definition: ['뜻', '뜻2'], isHighlighted: false, isMemorized: false },
];

const TextInputGuide = () => {
  const { theme, onThemeChange } = useTheme();

  return (
    <div className="relative w-full">
      <div className="absolute right-5 top-5 space-x-1">
        <ColorPicker onClick={onThemeChange} />
      </div>
      <div className="h-max space-y-5 rounded bg-white p-5 shadow-md">
        <Typography component="h3" fontWeight="700" variant="b24">
          Title Input
        </Typography>
        <Input
          hiddenText="단어장 이름"
          maxLength={20}
          placeholder="단어장 이름을 입력하세요"
          theme={theme}
          twStyle={{ ...textStyle.title, ...getTextColor(theme) }}
          type="text"
          variant="text"
        />
        <Typography component="h3" fontWeight="700" variant="b24">
          Single TextInput
        </Typography>
        <div className="h-full w-full">
          <SingleTextInput isDisabled count={1} definition={['뜻', '뜻2']} isHidden={false} theme={theme} word="단어" />
          <SingleTextInput isDisabled count={2} definition={['뜻', '뜻2']} isHidden={false} theme={theme} word="단어" />
        </div>
        <div className="h-full w-full">
          <SingleTextInput isDisabled isHidden count={1} definition={['뜻', '뜻2']} theme={theme} word="단어" />
          <SingleTextInput isDisabled isHidden count={2} definition={['뜻', '뜻2']} theme={theme} word="단어" />
        </div>
        <Typography component="h3" fontWeight="700" variant="b24">
          Double TextInput
        </Typography>
        <div className="h-full w-full">
          <DoubleTextInput isDisabled isHidden={[false, false]} theme={theme} words={DUMMY_WORDS} />
        </div>
        <div className="h-full w-full">
          <DoubleTextInput isDisabled isHidden={[true, true]} theme={theme} words={DUMMY_WORDS} />
        </div>
        <Typography component="h3" fontWeight="700" variant="b24">
          Mobile TextInput
        </Typography>
        <MobileTextInput
          isDisabled
          count={3}
          definition={['뜻', '뜻2'].join('\n')}
          isHidden={false}
          theme={theme}
          word="단어"
        />
        <MobileTextInput
          isDisabled
          isHidden
          count={3}
          definition={['뜻', '뜻2'].join('\n')}
          theme={theme}
          word="단어"
        />
      </div>
    </div>
  );
};

export default TextInputGuide;
