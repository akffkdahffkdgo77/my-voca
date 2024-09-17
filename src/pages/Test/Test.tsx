import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import DatePicker from '@components/DatePicker';
import { DoubleTextInput, MobileTextInput, SingleTextInput } from '@components/Editor';
import Input from '@components/Input';

import { useMobile, useTheme } from '@hooks/utils';
import { getWord, WordType } from '@utils/data';
import { getLightBackgroundColor, getTextColor, textStyle, ThemeType } from '@utils/theme';

import { Aside, LayoutChangeButton } from './components';

function splitIntoTwo(arr: WordType[]) {
  const groupNum = 2;
  const splitList: WordType[][] = [];
  for (let i = 0; i < arr.length; i += groupNum) {
    splitList.push(arr.slice(i, i + groupNum));
  }
  return splitList;
}

const Test = () => {
  const navigate = useNavigate();
  const { wordListIdx } = useParams();
  const isMobile = useMobile();
  const { theme, onThemeChange } = useTheme();

  const [isDouble, setIsDouble] = useState(false);
  const wordList = useMemo(() => getWord(wordListIdx!) || null, [wordListIdx]);
  const [isHidden, setIsHidden] = useState<Record<string, boolean>>(
    wordList?.words.reduce((acc, val) => ({ ...acc, [val.wordIdx]: true }), {}),
  );

  const handleHiddenClick = useCallback((idx: string) => setIsHidden((prev) => ({ ...prev, [idx]: !prev[idx] })), []);
  const handleLayoutClick = useCallback(() => setIsDouble((prev) => !prev), []);

  useEffect(() => {
    if (!wordList) {
      navigate('/register', { replace: true });
    }
  }, [wordList, navigate]);

  if (!wordList) {
    return <div className="min-h-screen w-full bg-white" />;
  }

  return (
    <TWContainer theme={theme}>
      <div className="mx-auto max-w-5xl px-5 pt-8 tablet:pt-16">
        <div className="mb-2.5 flex items-center justify-center tablet:mb-10">
          <Input
            isDisabled
            defaultValue={wordList.wordListName}
            hiddenText="단어장 이름"
            maxLength={20}
            placeholder="단어장 이름을 입력하세요"
            theme={theme}
            twStyle={{ ...textStyle.title, ...getTextColor(theme) }}
            type="text"
            variant="text"
          />
          {!isMobile && <DatePicker theme={theme} />}
        </div>
        {!isMobile && (
          <LayoutChangeButton buttonText={isDouble ? '2x' : '1x'} theme={theme} onClick={handleLayoutClick} />
        )}
        <div className="space-y-4 tablet:space-y-0">
          {!isMobile && isDouble
            ? splitIntoTwo(wordList.words).map((word, index) => (
                <DoubleTextInput
                  key={index}
                  isDisabled
                  isHidden={word.map((val) => isHidden[val.wordIdx])}
                  theme={theme}
                  words={word}
                  onHiddenClick={(idx) => handleHiddenClick(idx as keyof typeof isHidden)}
                />
              ))
            : wordList.words.map((word) =>
                isMobile ? (
                  <MobileTextInput
                    key={word.wordIdx}
                    isDisabled
                    count={word.count}
                    definition={word.definition.join('\n')}
                    isHidden={isHidden[word.wordIdx]}
                    theme={theme}
                    word={word.word}
                    onHiddenClick={() => handleHiddenClick(word.wordIdx)}
                  />
                ) : (
                  <SingleTextInput
                    key={word.wordIdx}
                    isDisabled
                    count={word.count}
                    definition={word.definition}
                    isHidden={isHidden[word.wordIdx]}
                    theme={theme}
                    word={word.word}
                    onHiddenClick={() => handleHiddenClick(word.wordIdx)}
                  />
                ),
              )}
        </div>
      </div>
      <Aside onClick={onThemeChange} />
    </TWContainer>
  );
};

export default Test;

const TWContainer = styled.div(({ theme }: ThemeType) => [
  tw`min-h-screen w-full overflow-y-auto py-10`,
  theme && getLightBackgroundColor(theme),
]);
