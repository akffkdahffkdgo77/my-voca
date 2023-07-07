'use client';

import { useEffect, useState } from 'react';

import LinkButton from './link-button';

import { getWords } from '@utils/localStorage';

export default function Home() {
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        setWordList(getWords());
    }, []);

    return (
        <div className="flex w-full items-center justify-center [height:calc(100vh-100px)]">
            <div className={wordList.length ? 'flex w-[300px] items-center justify-between' : 'flex w-[300px] items-center justify-center'}>
                <LinkButton path="/add" text="단어 추가하기" />
                {Boolean(wordList.length) && (
                    <>
                        <LinkButton path="/memorize" text="단어 외우기" />
                        <LinkButton path="/practice" text="시험 보기" />
                    </>
                )}
            </div>
        </div>
    );
}
