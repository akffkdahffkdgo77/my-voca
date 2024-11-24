import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import DatePicker from '@components/DatePicker';
import { DoubleTextInput, MobileTextInput, SingleTextInput, TitleTextInput } from '@components/Editor';

import { useColor, useMobile } from '@hooks/utils';
import { ColorType, getLightBackgroundColor } from '@utils/color';
import { getWord, WordType } from '@utils/data';

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
  const { color, onColorChange } = useColor();

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
    <TWContainer color={color}>
      <div className="mx-auto max-w-5xl px-5 pt-8 tablet:pt-16">
        <div className="mb-2.5 flex items-center justify-center tablet:mb-10">
          <TitleTextInput
            color={color}
            defaultValue={wordList.wordListName}
            isDisabled={false}
            maxLength={20}
            placeholder="단어장 이름을 입력하세요"
            variant="text"
          />
          {!isMobile && <DatePicker color={color} />}
        </div>
        {!isMobile && <LayoutChangeButton color={color} type={isDouble ? '2x' : '1x'} onClick={handleLayoutClick} />}
        <div className="space-y-4 tablet:space-y-0">
          {!isMobile && isDouble
            ? splitIntoTwo(wordList.words).map((word, index) => (
                <DoubleTextInput
                  key={index}
                  isDisabled
                  color={color}
                  isHidden={word.map((val) => isHidden[val.wordIdx])}
                  words={word}
                  onHiddenClick={(idx) => handleHiddenClick(idx as keyof typeof isHidden)}
                />
              ))
            : wordList.words.map((word) =>
                isMobile ? (
                  <MobileTextInput
                    key={word.wordIdx}
                    isDisabled
                    color={color}
                    count={word.count}
                    definition={word.definition.join('\n')}
                    isHidden={isHidden[word.wordIdx]}
                    word={word.word}
                    onHiddenClick={() => handleHiddenClick(word.wordIdx)}
                  />
                ) : (
                  <SingleTextInput
                    key={word.wordIdx}
                    isDisabled
                    color={color}
                    count={word.count}
                    definition={word.definition}
                    isHidden={isHidden[word.wordIdx]}
                    word={word.word}
                    onHiddenClick={() => handleHiddenClick(word.wordIdx)}
                  />
                ),
              )}
        </div>
      </div>
      <Aside onClick={onColorChange} />
    </TWContainer>
  );
};

export default Test;

const TWContainer = styled.div(({ color }: ColorType) => [
  tw`min-h-screen w-full overflow-y-auto py-10`,
  color && getLightBackgroundColor(color),
]);
