import { ChangeEvent, Fragment, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useBlocker, useNavigate } from 'react-router-dom';

import tw, { theme } from 'twin.macro';
import { v4 as uuid } from 'uuid';

import Button from '@components/Button';
import { SingleTextInput } from '@components/Editor';
import Input from '@components/Input';
import Textarea from '@components/Textarea';
import Typography from '@components/Typography';
import { useModal } from '@contexts/Modal';

import { useMobile } from '@hooks/utils';
import { addWord, createBaseData } from '@utils/data';
import { StyleThemes } from '@utils/theme';

interface Props {
  isLoading: boolean;
  onClick: (selected: number) => void;
  onLoading: () => void;
}

const PLACEHOLDER_WORD = '[필수] 단어를 입력하세요.';
const PLACEHOLDER_DEFINITIONS = ['[필수] 첫 번째 뜻을 입력하세요.', '두 번째 뜻을 입력하세요.'];

const MAX_LENGTH = 100;

const customStyle = {
  caption: tw`ml-1`,
  textareaContainer: tw`rounded-b border-t-0 bg-grid`,
  input: tw`rounded-b-none font-nanumpenscript text-h4 shadow-md`,
};

// 직접 등록
const Step3 = ({ isLoading, onLoading, onClick }: Props) => {
  const [word, setWord] = useState(PLACEHOLDER_WORD);
  const [definition, setDefinition] = useState<string[]>(PLACEHOLDER_DEFINITIONS);
  const [newWordList, setNewWordList] = useState<{ definition: string[]; word: string }[]>([]);

  const [isError, setIsError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerId = useRef<NodeJS.Timeout>();

  const navigate = useNavigate();
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      !isLoading && newWordList.length > 0 && currentLocation.pathname !== nextLocation.pathname,
  );
  const handleModal = useModal();

  useEffect(() => {
    if (blocker.state === 'blocked') {
      handleModal({
        messageType: 'confirm',
        message: '정말로 나가시겠습니까? 입력하신 내용은 저장되지 않습니다.',
        cancelText: '머무르기',
        confirmText: '나가기',
      }).then((isConfirmed) => {
        if (isConfirmed) {
          blocker.proceed();
        } else {
          blocker.reset();
        }
      });
    }
  }, [blocker, handleModal]);

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
        if (!word || definition.some((val) => !val)) {
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
    [word, definition],
  );

  const handleSubmit = useCallback(() => {
    const newData = createBaseData();
    newData.words = newWordList.map((val) => ({
      wordIdx: uuid(),
      ...val,
      count: 0,
      isHighlighted: false,
      isMemorized: false,
    }));
    onLoading();
    timerId.current = setTimeout(() => {
      addWord(newData);
      setNewWordList([]);
      navigate(`/test/${newData.wordListIdx}`, { replace: true });
    }, 1000);
  }, [newWordList, navigate, onLoading]);

  useEffect(() => {
    return () => clearTimeout(timerId.current);
  }, []);

  const isMobile = useMobile();

  useEffect(() => {
    if (isMobile) {
      onClick(2);
    }
  }, [isMobile, onClick]);

  return (
    <Fragment>
      <div className="relative h-full w-128 flex-none">
        <div className="overflow-hidden rounded shadow-xl">
          <Input
            ref={inputRef}
            isDisabled={newWordList.length === MAX_LENGTH}
            isError={isError}
            maxLength={20}
            theme={StyleThemes.Gray}
            twStyle={customStyle.input}
            value={word}
            variant="contained"
            onChange={handleWord}
            onKeyDown={handleAppend}
          />
          <Textarea
            containerStyle={customStyle.textareaContainer}
            height={200}
            isDisabled={newWordList.length === MAX_LENGTH}
            isError={isError}
            value={definition.join('\n')}
            onChange={handleDefinition}
            onKeyDown={handleAppend}
          />
        </div>
        {isError || newWordList.length === MAX_LENGTH ? (
          <Typography
            color={theme`colors.red.500`}
            component="small"
            fontWeight="700"
            twStyle={customStyle.caption}
            variant="c11"
          >
            {isError ? '필수 값을 모두 입력하세요.' : '현재는 최대 4개까지 입력할 수 있습니다.'}
          </Typography>
        ) : word.length === 20 ? (
          <Typography component="small" fontWeight="700" twStyle={customStyle.caption} variant="c11">
            단어는 최대 20자까지 입력 가능합니다.
          </Typography>
        ) : (
          <Typography component="small" fontWeight="700" twStyle={customStyle.caption} variant="c11">
            shift + enter를 누르면 단어를 추가할 수 있습니다.
          </Typography>
        )}
      </div>
      <div className="relative flex-1">
        <ul className="flex max-h-100 w-full flex-col-reverse overflow-y-auto rounded bg-white p-10 shadow-xl">
          {newWordList.length ? (
            newWordList.map(({ word, definition }, index) => (
              <li key={index} className="w-full">
                <SingleTextInput isDisabled definition={definition} theme={StyleThemes.Gray} word={word} />
              </li>
            ))
          ) : (
            <div className="flex min-h-80 items-center justify-center">
              <Typography backgroundColor={theme`colors.white`} fontFamily="nanumpenscript" variant="h4">
                Typing...
              </Typography>
            </div>
          )}
        </ul>
        {newWordList && (
          <div className="absolute -bottom-20 right-0">
            <Button
              backgroundColor={theme`colors.white`}
              shape="rounded"
              size="extraLarge"
              variant="outlined"
              onClick={handleSubmit}
            >
              등록
            </Button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Step3;
