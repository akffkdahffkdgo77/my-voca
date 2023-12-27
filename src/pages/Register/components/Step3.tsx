import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useBlocker, useNavigate } from 'react-router-dom';

import { Button, CustomizedSingleTextInput, Input, Textarea, Typography, useModal } from 'components';
import tw, { theme } from 'twin.macro';

import { v4 as uuid } from 'uuid';

import { DataType, addWord } from 'utils/data';
import { formatDate } from 'utils/format';
import { StyleThemes } from 'utils/theme';

const PLACEHOLDER_WORD = '[필수] 단어를 입력해 주세요.';
const PLACEHOLDER_DEFINITIONS = ['[필수] 첫 번째 뜻을 입력해 주세요.', '두 번째 뜻을 입력해 주세요.'];

const MAX_LENGTH = 4;

const customStyle = {
    caption: tw`ml-1`,
    textareaContainer: tw`bg-grid border-t-0 rounded-b`,
    input: tw`rounded-b-none font-nanumpenscript text-h4 shadow-md`
};

interface Props {
    isLoading: boolean;
    onLoading: () => void;
}

// 직접 등록
export default function Step3({ isLoading, onLoading }: Props) {
    const [word, setWord] = useState(PLACEHOLDER_WORD);
    const [definition, setDefinition] = useState<string[]>(PLACEHOLDER_DEFINITIONS);
    const [newWordList, setNewWordList] = useState<{ word: string; definition: string[] }[]>([]);

    const [isError, setIsError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const timerId = useRef<NodeJS.Timeout>();

    const navigate = useNavigate();
    const blocker = useBlocker(({ currentLocation, nextLocation }) => !isLoading && newWordList.length > 0 && currentLocation.pathname !== nextLocation.pathname);
    const handleModal = useModal();

    useEffect(() => {
        if (blocker.state === 'blocked') {
            handleModal({
                messageType: 'confirm',
                message: '정말로 나가시겠습니까? 입력하신 내용은 저장되지 않습니다.',
                cancelText: '머무르기',
                confirmText: '나가기'
            }).then((isConfirmed) => {
                if (isConfirmed) {
                    blocker.proceed();
                } else {
                    blocker.reset();
                }
            });
        }
    }, [blocker.state]);

    const handleWord = useCallback((e: ChangeEvent<HTMLInputElement>) => setWord(e.currentTarget.value), []);

    const handleDefinition = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        const [text1, text2] = e.currentTarget.value.split('\n');
        if (e.currentTarget.value && text1 && text2) {
            setDefinition([text1, text2]);
        } else {
            setDefinition([e.currentTarget.value]);
        }
    }, []);

    const handleAppend = useCallback(
        (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (e.shiftKey && e.code === 'Enter') {
                e.preventDefault();
                if (!word || definition.every((val) => !val)) {
                    setIsError(true);
                } else {
                    setIsError(false);
                    setNewWordList((prev) => [...prev, { word, definition }]);
                }
                setWord('');
                setDefinition(['']);
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }
        },
        [word, definition]
    );

    const handleSubmit = useCallback(() => {
        const curTime = new Date().getTime();
        const newData: DataType = {
            wordListIdx: uuid(),
            wordListName: `단어장 ${formatDate(curTime, 'YYYY.MM.DD HH:mm:ss')}`,
            wordListDate: curTime,
            status: 'TODO',
            category: '영어 단어',
            words: newWordList.map((val) => ({
                wordIdx: uuid(),
                ...val,
                count: 0,
                isHighlighted: false,
                isMemorized: false
            }))
        };

        onLoading();
        timerId.current = setTimeout(() => {
            addWord(newData);
            setNewWordList([]);
            navigate(`/test/${newData.wordListIdx}`, { replace: true });
        }, 1000);
    }, [newWordList]);

    useEffect(() => {
        return () => clearTimeout(timerId.current);
    }, []);

    return (
        <>
            <div className="relative h-full w-512pxr flex-none">
                <div className="overflow-hidden rounded shadow-xl">
                    <Input
                        ref={inputRef}
                        isDisabled={newWordList.length === MAX_LENGTH}
                        isError={isError}
                        value={word}
                        onChange={handleWord}
                        onKeyDown={handleAppend}
                        theme={StyleThemes.Gray}
                        variant="contained"
                        twStyle={customStyle.input}
                    />
                    <Textarea
                        isError={isError}
                        isDisabled={newWordList.length === MAX_LENGTH}
                        value={definition.join('\n')}
                        onChange={handleDefinition}
                        onKeyDown={handleAppend}
                        height={200}
                        containerStyle={customStyle.textareaContainer}
                    />
                </div>
                {isError || newWordList.length === MAX_LENGTH ? (
                    <Typography component="small" variant="c11" fontWeight="700" color={theme`colors.red.500`} twStyle={customStyle.caption}>
                        {isError ? '필수 값을 모두 입력해 주세요.' : '현재는 최대 4개까지 입력할 수 있습니다.'}
                    </Typography>
                ) : (
                    <Typography component="small" variant="c11" fontWeight="700" twStyle={customStyle.caption}>
                        shift + enter를 누르면 단어를 추가할 수 있습니다.
                    </Typography>
                )}
            </div>
            <div className="relative flex-1">
                <ul className="flex max-h-500pxr w-full flex-col-reverse rounded bg-white shadow-xl">
                    {newWordList.length ? (
                        newWordList.map(({ word, definition }, index) => (
                            <li key={index} className="w-full">
                                <CustomizedSingleTextInput theme={StyleThemes.Gray} isDisabled word={word} definition={definition} />
                            </li>
                        ))
                    ) : (
                        <div className="flex min-h-320pxr items-center justify-center">
                            <Typography variant="h4" fontFamily="nanumpenscript" backgroundColor={theme`colors.white`}>
                                Typing...
                            </Typography>
                        </div>
                    )}
                </ul>
                {newWordList && (
                    <div className="absolute -bottom-20 right-0">
                        <Button variant="outlined" shape="rounded" size="extraLarge" backgroundColor={theme`colors.white`} onClick={handleSubmit}>
                            등록
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
}
