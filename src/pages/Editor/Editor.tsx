import { useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';
import { Button, CustomizedColorPicker, CustomizedDatePicker, CustomizedLabelButton, CustomizedMobileTextInput, CustomizedSelect, CustomizedTextInput, Input } from 'components';
import tw from 'twin.macro';

import { useMobile, useTheme } from 'hooks';
import { useGetOne } from 'hooks/useFetch';
import { STATUS } from 'mocks/dummy/word';
import { StyleThemes, ThemeType, getLightBackgroundColor } from 'utils/theme';

const TwContainer = styled.div(({ theme }: ThemeType) => [tw`min-h-[calc(100vh-128px)] overflow-y-auto w-full py-10`, theme && getLightBackgroundColor(theme)]);

const STATUS_OPTIONS = [
    { label: 'TODO', value: STATUS.TODO },
    { label: 'PROGRESS', value: STATUS.PROGRESS },
    { label: 'DONE', value: STATUS.DONE }
];

// TODO: 실시간 업데이트!
// TODO: debounce 구현
export default function Editor() {
    const { id } = useParams();
    const wordListIdx = id!;

    const { theme, handleClick } = useTheme();
    const isMobile = useMobile();
    const [isDouble, setIsDouble] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    const { data } = useGetOne(wordListIdx);

    return (
        <>
            <header className="fixed left-0 right-0 top-0 z-10 h-14 p-3 text-right backdrop-blur-sm">
                <div className="m-auto max-w-7xl space-x-2.5">
                    {!isDisabled && (
                        <Button variant="outlined" shape="square" size="medium" theme={StyleThemes.Gray} twStyle={tw`bg-white`} onClick={() => setIsDisabled((prev) => !prev)}>
                            저장
                        </Button>
                    )}
                    <Button variant="outlined" shape="square" size="medium" theme={StyleThemes.Gray} twStyle={tw`bg-white`} onClick={() => setIsDisabled((prev) => !prev)}>
                        {isDisabled ? '수정' : '공부'}
                    </Button>
                </div>
            </header>
            <TwContainer theme={theme}>
                <div className="mx-auto max-w-5xl px-5 pt-6">
                    <div className="mb-5 flex items-center justify-center">
                        <Input
                            value={data.wordListName}
                            disabled={isDisabled}
                            hiddenText="단어장 이름"
                            type="text"
                            variant="text"
                            theme={theme}
                            maxLength={20}
                            placeholder="단어장 이름을 입력해 주세요"
                            twStyle={tw`bg-inherit text-h1 h-full px-0 font-nanumpenscript`}
                        />
                        <CustomizedDatePicker theme={theme} />
                    </div>
                    <div className="mb-5 flex items-end gap-2.5">
                        {!isMobile && <CustomizedLabelButton theme={theme} buttonText={isDouble ? '2x' : '1x'} onClick={() => setIsDouble((prev) => !prev)} />}
                        <CustomizedSelect caption="Status" theme={theme} value={data.status} options={STATUS_OPTIONS} />
                    </div>
                    {data.words.map((word) =>
                        isMobile ? (
                            <CustomizedMobileTextInput key={word.wordIdx} count={word.count} word={word.word} definition={word.definition.join('\n')} isDisabled={isDisabled} theme={theme} />
                        ) : (
                            <CustomizedTextInput key={word.wordIdx} count={word.count} word={word.word} definition={word.definition} isDisabled={isDisabled} isDouble={isDouble} theme={theme} />
                        )
                    )}
                </div>
                <aside className="fixed right-10 top-1/2 hidden -translate-y-1/2 flex-col gap-y-2.5 rounded-full bg-white p-1 shadow-md desktop:flex">
                    <CustomizedColorPicker onClick={handleClick} />
                </aside>
            </TwContainer>
        </>
    );
}
