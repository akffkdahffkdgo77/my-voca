import tw from 'twin.macro';
import { v4 as uuid } from 'uuid';

import ColorPicker from '@components/ColorPicker';
import { DoubleTextInput, MobileTextInput, SingleTextInput } from '@components/Editor';
import Input from '@components/Input';
import Typography from '@components/Typography';

import { useColor } from '@hooks/utils';
import { getTextColor } from '@utils/color';
import { WordType } from '@utils/data';

const DUMMY_WORDS: WordType[] = [
  { wordIdx: uuid(), count: 1, word: '단어', definition: ['뜻', '뜻2'], isHighlighted: false, isMemorized: false },
  { wordIdx: uuid(), count: 3, word: '단어', definition: ['뜻', '뜻2'], isHighlighted: false, isMemorized: false },
];

const TextInputGuide = () => {
  const { color, onColorChange } = useColor();

  return (
    <div className="relative w-full">
      <div className="absolute right-5 top-5 space-x-1">
        <ColorPicker onClick={onColorChange} />
      </div>
      <div className="h-max space-y-5 rounded bg-white p-5 shadow-md">
        <Typography component="h3" fontWeight="700" variant="b24">
          Title Input
        </Typography>
        <Input
          color={color}
          hiddenText="단어장 이름"
          maxLength={20}
          placeholder="단어장 이름을 입력하세요"
          twStyle={{ ...tw`h-full bg-inherit px-0 font-nanumpenscript text-h3 tablet:text-h1`, ...getTextColor(color) }}
          type="text"
          variant="text"
        />
        <Typography component="h3" fontWeight="700" variant="b24">
          Single TextInput
        </Typography>
        <div className="h-full w-full">
          <SingleTextInput isDisabled color={color} count={1} definition={['뜻', '뜻2']} isHidden={false} word="단어" />
          <SingleTextInput isDisabled color={color} count={2} definition={['뜻', '뜻2']} isHidden={false} word="단어" />
        </div>
        <div className="h-full w-full">
          <SingleTextInput isDisabled isHidden color={color} count={1} definition={['뜻', '뜻2']} word="단어" />
          <SingleTextInput isDisabled isHidden color={color} count={2} definition={['뜻', '뜻2']} word="단어" />
        </div>
        <Typography component="h3" fontWeight="700" variant="b24">
          Double TextInput
        </Typography>
        <div className="h-full w-full">
          <DoubleTextInput isDisabled color={color} isHidden={[false, false]} words={DUMMY_WORDS} />
        </div>
        <div className="h-full w-full">
          <DoubleTextInput isDisabled color={color} isHidden={[true, true]} words={DUMMY_WORDS} />
        </div>
        <Typography component="h3" fontWeight="700" variant="b24">
          Mobile TextInput
        </Typography>
        <MobileTextInput
          isDisabled
          color={color}
          count={3}
          definition={['뜻', '뜻2'].join('\n')}
          isHidden={false}
          word="단어"
        />
        <MobileTextInput
          isDisabled
          isHidden
          color={color}
          count={3}
          definition={['뜻', '뜻2'].join('\n')}
          word="단어"
        />
      </div>
    </div>
  );
};

export default TextInputGuide;
