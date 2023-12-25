import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from '@emotion/styled';
import { CustomizedDatePicker, CustomizedSingleTextInput, CustomizedDoubleTextInput, CustomizedLabelButton, CustomizedMobileTextInput, Input } from 'components';
import Header from 'layout/Header';
import tw from 'twin.macro';

import { TestAside } from './components';

import { useMobile, useTheme } from 'hooks';
import { WordType, getWord } from 'utils/data';
import { ThemeType, getLightBackgroundColor, getTextColor, textStyle } from 'utils/theme';

const TwContainer = styled.div(({ theme }: ThemeType) => [tw`min-h-screen overflow-y-auto w-full py-10`, theme && getLightBackgroundColor(theme)]);

function splitIntoTwo(arr: WordType[]) {
    const groupNum = 2;
    const splitList: WordType[][] = [];
    for (let i = 0; i < arr.length; i += groupNum) {
        splitList.push(arr.slice(i, i + groupNum));
    }
    return splitList;
}

export default function Test() {
    const navigate = useNavigate();
    const { wordListIdx } = useParams();
    const isMobile = useMobile();
    const { theme, handleClick } = useTheme();

    const [isDouble, setIsDouble] = useState(false);
    const wordList = useMemo(() => getWord(wordListIdx!) || null, [wordListIdx]);
    const [isHidden, setIsHidden] = useState<Record<string, boolean>>(wordList?.words.reduce((acc, val) => ({ ...acc, [val.wordIdx]: true }), {}));

    useEffect(() => {
        if (!wordList) {
            navigate('/register', { replace: true });
        }
    }, [wordList]);

    const handleHiddenClick = useCallback((idx: string) => setIsHidden((prev) => ({ ...prev, [idx]: !prev[idx] })), []);
    const handleLayoutClick = useCallback(() => setIsDouble((prev) => !prev), []);

    if (!wordList) {
        return null;
    }

    return (
        <>
            <Header theme={theme} />
            <TwContainer theme={theme}>
                <div className="mx-auto max-w-5xl px-5 pt-6">
                    <div className="mb-10 flex items-center justify-center">
                        <Input
                            type="text"
                            variant="text"
                            maxLength={20}
                            hiddenText="단어장 이름"
                            placeholder="단어장 이름을 입력해 주세요"
                            defaultValue={wordList.wordListName}
                            isDisabled
                            theme={theme}
                            twStyle={{ ...textStyle.title, ...getTextColor(theme) }}
                        />
                        <CustomizedDatePicker theme={theme} />
                    </div>
                    <div className="mb-5 flex items-end gap-2.5">{!isMobile && <CustomizedLabelButton theme={theme} buttonText={isDouble ? '2x' : '1x'} onClick={handleLayoutClick} />}</div>
                    <div className="space-y-4 tablet:space-y-0">
                        {!isMobile && isDouble
                            ? splitIntoTwo(wordList.words).map((word, index) => (
                                  <CustomizedDoubleTextInput
                                      key={index}
                                      words={word}
                                      isDisabled
                                      isHidden={word.map((val) => isHidden[val.wordIdx])}
                                      onHiddenClick={(idx) => handleHiddenClick(idx as keyof typeof isHidden)}
                                      theme={theme}
                                  />
                              ))
                            : wordList.words.map((word) =>
                                  isMobile ? (
                                      <CustomizedMobileTextInput
                                          key={word.wordIdx}
                                          word={word.word}
                                          definition={word.definition.join('\n')}
                                          count={word.count}
                                          isDisabled
                                          isHidden={isHidden[word.wordIdx]}
                                          onHiddenClick={() => handleHiddenClick(word.wordIdx)}
                                          theme={theme}
                                      />
                                  ) : (
                                      <CustomizedSingleTextInput
                                          key={word.wordIdx}
                                          word={word.word}
                                          definition={word.definition}
                                          count={word.count}
                                          isDisabled
                                          isHidden={isHidden[word.wordIdx]}
                                          onHiddenClick={() => handleHiddenClick(word.wordIdx)}
                                          theme={theme}
                                      />
                                  )
                              )}
                    </div>
                </div>
                <TestAside onClick={handleClick} />
            </TwContainer>
        </>
    );
}
