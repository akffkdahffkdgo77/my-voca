import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Typography } from 'components';
import tw from 'twin.macro';

import { DataListType, getWord } from 'utils/data';
import { exportFile } from 'utils/file';

const customStyle = {
    label: tw`border-2 rounded border-gray-950 w-max px-2 py-1`
};

interface Props {
    words: DataListType;
}

export default function Step2({ words }: Props) {
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
    }, [words]);

    return (
        <div className="flex h-full w-full flex-col items-center">
            <Typography variant="h3" component="h2" gutterBottom={40} align="left" fontFamily="nanumpenscript">
                {words.length === 0 ? (
                    <>
                        등록된 단어장이 없습니다.
                        <br />
                        3초 후 등록 페이지로 이동합니다.
                    </>
                ) : (
                    '백업할 단어장을 클릭해 주세요.'
                )}
            </Typography>
            <ul className="w-full max-w-5xl space-y-10">
                {words.map((word) => (
                    <li key={word.wordListIdx} className="w-full rounded border border-gray-950 bg-white p-10 shadow-xl hover:opacity-50">
                        <Button variant="text" width="100%" height="100%" onClick={() => handleExport(word.wordListIdx)}>
                            <Typography variant="h2" component="h2" fontFamily="nanumpenscript" gutterBottom={20} align="left">
                                {word.wordListName}
                            </Typography>
                            <div className="flex items-center gap-x-5">
                                {[word.status, word.category].map((val) => (
                                    <Typography key={val} variant="b16" component="p" fontWeight="700" twStyle={customStyle.label}>
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
}
