import { ChangeEvent, Fragment, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useBlocker, useNavigate } from 'react-router-dom';

import tw from 'twin.macro';
import { v4 as uuid } from 'uuid';

import Button from '@components/Button';
import { SingleTextInput } from '@components/Editor';
import Input from '@components/Input';
import Textarea from '@components/Textarea';
import Typography from '@components/Typography';
import { useModal } from '@contexts/Modal';

import { useMobile } from '@hooks/utils';
import { COLOR } from '@utils/color';
import { addWord, createBaseData } from '@utils/data';

interface Props {
  isLoading: boolean;
  onClick: (selected: number) => void;
  onLoading: () => void;
}

const PLACEHOLDER_WORD = '[필수] 단어를 입력하세요.';
const PLACEHOLDER_DEFINITIONS = ['[필수] 첫 번째 뜻을 입력하세요.', '두 번째 뜻을 입력하세요.'];

const MAX_LENGTH = 100;

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
            color={COLOR.Gray}
            isDisabled={newWordList.length === MAX_LENGTH}
            isError={isError}
            maxLength={20}
            twStyle={tw`rounded-b-none font-nanumpenscript text-h4 shadow-md`}
            value={word}
            variant="contained"
            onChange={handleWord}
            onKeyDown={handleAppend}
          />
          <Textarea
            containerStyle={tw`rounded-b border-t-0 bg-grid`}
            height={200}
            isDisabled={newWordList.length === MAX_LENGTH}
            isError={isError}
            value={definition.join('\n')}
            onChange={handleDefinition}
            onKeyDown={handleAppend}
          />
        </div>
        <Typography
          color={isError ? COLOR.Red : COLOR.Gray}
          component="small"
          fontWeight="700"
          twStyle={tw`ml-1`}
          variant="c11"
        >
          {isError
            ? '필수 값을 모두 입력하세요.'
            : newWordList.length === MAX_LENGTH
              ? '현재는 최대 4개까지 입력할 수 있습니다.'
              : word.length === 20
                ? '단어는 최대 20자까지 입력 가능합니다.'
                : 'shift + enter를 누르면 단어를 추가할 수 있습니다.'}
        </Typography>
      </div>
      <div className="relative flex-1">
        <ul className="flex max-h-100 w-full flex-col-reverse overflow-y-auto rounded bg-white p-10 shadow-xl">
          {newWordList.length ? (
            newWordList.map(({ word, definition }, index) => (
              <li key={index} className="w-full">
                <SingleTextInput isDisabled color={COLOR.Gray} definition={definition} word={word} />
              </li>
            ))
          ) : (
            <div className="flex min-h-80 items-center justify-center">
              <Typography fontFamily="nanumpenscript" variant="h4">
                입력 중...
              </Typography>
            </div>
          )}
        </ul>
        {newWordList && (
          <div className="absolute -bottom-20 right-0">
            <Button shape="rounded" size="extraLarge" text="등록" variant="outlined" onClick={handleSubmit} />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Step3;
