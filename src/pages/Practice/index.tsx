import { useRef, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import MESSAGES from 'constants/messages';
import useModal from 'contexts/modal/useModal';

import type { ResultType } from 'pages/Practice/types';

const VOCA = JSON.parse(localStorage.getItem('words') || '') || [];

export default function Practice() {
    const navigate = useNavigate();

    const ref = useRef<HTMLTextAreaElement>(null);
    const [random, setRandom] = useState<number>(Math.floor(Math.random() * (VOCA.length - 0) + 0));
    const [prevArray, setPrevArray] = useState<number[]>([]);
    const [successCount, setSuccessCount] = useState(0);
    const [failCount, setFailCount] = useState(0);

    const handleModal = useModal();

    const handleResult = ({ successTotal, failTotal }: ResultType) => {
        handleModal({
            ...MESSAGES.FINAL_RESULT,
            message: `테스트를 완료했습니다!! \n맞춘 단어 : ${successTotal} \n틀린 / 스킵한 단어 : ${failTotal} \n홈 화면으로 돌아가시겠습니까?`
        }).then((hasConfirmed) => {
            if (hasConfirmed) {
                navigate('/', { replace: true });
            } else {
                window.location.reload();
            }
        });
    };

    const handleNextWord = () => {
        if (ref.current) {
            ref.current.value = '';
        }

        let nextRandom = random;
        while (random === nextRandom) {
            nextRandom = Math.floor(Math.random() * (VOCA.length - 0) + 0);
            if (prevArray.includes(nextRandom)) {
                nextRandom = random;
            }
        }

        setPrevArray((prev) => [...prev, random]);
        setRandom(nextRandom);
    };

    const handleNewDataset = (countObj: ResultType) => {
        if (prevArray.length === VOCA.length - 1) {
            handleResult(countObj);
        } else {
            handleNextWord();
        }
    };

    const handleWordSkip = () => {
        if (prevArray.length === VOCA.length - 1) {
            handleModal(MESSAGES.LAST_WORD);
        } else {
            handleNextWord();
            setFailCount((prev) => prev + 1);
        }
    };

    const handleSubmit = () => {
        const { value } = ref.current as HTMLTextAreaElement;
        if (value && VOCA[random].definition === value) {
            setSuccessCount((prev) => prev + 1);
            handleModal({
                ...MESSAGES.CURRENT_RESULT,
                message: `단어: ${VOCA[random].word} \n뜻: ${VOCA[random].definition}`
            }).then(() => handleNewDataset({ successTotal: successCount + 1, failTotal: failCount }));
        } else {
            handleModal(MESSAGES.RETRY);
        }
    };

    const handleReset = () => {
        if (ref.current) {
            ref.current.value = '';
        }
    };

    return (
        <main className="w-full h-screen p-5 flex items-center justify-center flex-col gap-10">
            <Link to="/">
                <h1 className="w-full text-center text-5xl font-bold underline tracking-tighter mb-10">My Voca</h1>
            </Link>
            <div className="w-full flex justify-center items-center flex-col">
                <h1 className="text-[24px] font-bold font-mono mb-2.5">Practice!</h1>
                <section className="border border-black rounded-md min-w-[700px]">
                    <h2 className="text-[16px] font-bold font-mono mb-2.5 border-b border-black p-5">
                        <span className="text-[20px]">{VOCA?.[random]?.word}</span>의 뜻을 입력해주세요.
                    </h2>
                    <textarea ref={ref} rows={5} className="w-full p-5 outline-none text-[16px]" placeholder="답을 입력해주세요." />
                    <div className="flex justify-end items-center gap-x-2.5 mb-2.5 mx-2.5">
                        <button onClick={handleReset} className="p-2.5 bg-white text-black border border-black font-bold rounded-md text-[14px] hover:scale-95 active:scale-95" type="button">
                            입력 초기화
                        </button>
                        <button onClick={handleSubmit} className="p-2.5 bg-black text-white font-bold rounded-md text-[14px] hover:scale-95 active:scale-95" type="button">
                            제출하기
                        </button>
                    </div>
                </section>
                <div className="flex justify-end w-[700px] mt-5 ">
                    <button className="bg-black text-white rounded-md font-bold text-[12px] p-2.5 hover:scale-95 active:scale-95" type="button" onClick={handleWordSkip}>
                        다른 단어 연습하기
                    </button>
                </div>
            </div>
        </main>
    );
}
