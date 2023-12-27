import { Input, Typography } from 'components/Core';
import { CustomizedColorPicker, CustomizedDoubleTextInput, CustomizedMobileTextInput, CustomizedSingleTextInput } from 'components/Customized';

import { v4 as uuid } from 'uuid';

import { useTheme } from 'hooks';
import { WordType } from 'utils/data';
import { getTextColor, textStyle } from 'utils/theme';

const DUMMY_WORDS: WordType[] = [
    { wordIdx: uuid(), count: 1, word: '단어', definition: ['뜻', '뜻2'], isHighlighted: false, isMemorized: false },
    { wordIdx: uuid(), count: 3, word: '단어', definition: ['뜻', '뜻2'], isHighlighted: false, isMemorized: false }
];

export default function TextInputGuide() {
    const { theme, handleClick } = useTheme();

    return (
        <div className="relative w-full">
            <div className="absolute right-5 top-5 space-x-1">
                <CustomizedColorPicker onClick={handleClick} />
            </div>
            <div className="h-max space-y-5 rounded bg-white p-5 shadow-md">
                <Typography variant="b24" fontWeight="700" component="h3">
                    Title Input
                </Typography>
                <Input
                    hiddenText="단어장 이름"
                    type="text"
                    variant="text"
                    theme={theme}
                    maxLength={20}
                    placeholder="단어장 이름을 입력해 주세요"
                    twStyle={{ ...textStyle.title, ...getTextColor(theme) }}
                />
                <Typography variant="b24" fontWeight="700" component="h3">
                    Single TextInput
                </Typography>
                <div className="h-full w-full">
                    <CustomizedSingleTextInput isHidden={false} isDisabled count={1} word="단어" definition={['뜻', '뜻2']} theme={theme} />
                    <CustomizedSingleTextInput isHidden={false} isDisabled count={2} word="단어" definition={['뜻', '뜻2']} theme={theme} />
                </div>
                <div className="h-full w-full">
                    <CustomizedSingleTextInput isHidden isDisabled count={1} word="단어" definition={['뜻', '뜻2']} theme={theme} />
                    <CustomizedSingleTextInput isHidden isDisabled count={2} word="단어" definition={['뜻', '뜻2']} theme={theme} />
                </div>
                <Typography variant="b24" fontWeight="700" component="h3">
                    Double TextInput
                </Typography>
                <div className="h-full w-full">
                    <CustomizedDoubleTextInput isHidden={[false, false]} isDisabled words={DUMMY_WORDS} theme={theme} />
                </div>
                <div className="h-full w-full">
                    <CustomizedDoubleTextInput isHidden={[true, true]} isDisabled words={DUMMY_WORDS} theme={theme} />
                </div>
                <Typography variant="b24" fontWeight="700" component="h3">
                    Mobile TextInput
                </Typography>
                <CustomizedMobileTextInput isHidden={false} isDisabled count={3} theme={theme} word="단어" definition={['뜻', '뜻2'].join('\n')} />
                <CustomizedMobileTextInput isHidden isDisabled count={3} theme={theme} word="단어" definition={['뜻', '뜻2'].join('\n')} />
            </div>
        </div>
    );
}
