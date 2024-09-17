import { Fragment, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import tw from 'twin.macro';

import Button from '@components/Button';
import Typography from '@components/Typography';

import { DataListType, getWord } from '@utils/data';
import { exportFile } from '@utils/file';

const customStyle = {
  label: tw`w-max rounded border-2 border-gray-950 px-2 py-1`,
};

interface Props {
  words: DataListType;
}

const Step2 = ({ words }: Props) => {
  const navigate = useNavigate();

  const handleExport = useCallback((idx: string) => {
    const selected = getWord(idx);
    const wordList = selected.words
      .map(({ word, definition }) => `${word}:${definition.join('\\n')}\n`)
      .toString()
      .replace(/,/g, '');
    exportFile(wordList, selected.wordListName);
  }, []);

  useEffect(() => {
    if (words.length === 0) {
      const timerId = setTimeout(() => {
        navigate('/register', { replace: true });
      }, 3000);
      return () => clearTimeout(timerId);
    }
  }, [words, navigate]);

  return (
    <div className="flex h-full w-full flex-col items-center">
      <Typography align="left" component="h2" fontFamily="nanumpenscript" gutterBottom={40} variant="h3">
        {words.length === 0 ? (
          <Fragment>
            등록된 단어장이 없습니다.
            <br />
            3초 후 등록 페이지로 이동합니다.
          </Fragment>
        ) : (
          '백업할 단어장을 선택하세요.'
        )}
      </Typography>
      <ul className="w-full max-w-5xl space-y-10">
        {words.map((word) => (
          <li
            key={word.wordListIdx}
            className="w-full rounded border border-gray-950 bg-white p-10 shadow-xl hover:opacity-50"
          >
            <Button height="100%" variant="text" width="100%" onClick={() => handleExport(word.wordListIdx)}>
              <Typography align="left" component="h2" fontFamily="nanumpenscript" gutterBottom={20} variant="h2">
                {word.wordListName}
              </Typography>
              <div className="flex items-center gap-x-5">
                {[word.status, word.category].map((val) => (
                  <Typography key={val} component="p" fontWeight="700" twStyle={customStyle.label} variant="b16">
                    {val}
                  </Typography>
                ))}
              </div>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Step2;
