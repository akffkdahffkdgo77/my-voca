import { useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Practice() {
    const navigate = useNavigate();

    const voca = JSON.parse(localStorage.getItem('words') || '');

    const ref = useRef<HTMLTextAreaElement>(null);
    const [random, setRandom] = useState<number>(Math.floor(Math.random() * (voca.length - 0) + 0));
    const [prevArray, setPrevArray] = useState<number[]>([]);

    const reset = () => {
        if (prevArray.length === voca.length - 1) {
            Swal.fire({
                title: '성공!',
                icon: 'success',
                text: '테스트를 완료했습니다!! 홈 화면으로 돌아갑니다!'
            }).then(() => {
                navigate('/', { replace: true });
            });
        } else {
            let nextRandom = random;
            while (random === nextRandom) {
                nextRandom = Math.floor(Math.random() * (voca.length - 0) + 0);
                if (prevArray.includes(nextRandom)) {
                    nextRandom = random;
                }
            }

            if (ref.current) {
                ref.current.value = '';
            }

            setPrevArray((prev) => [...prev, random]);
            setRandom(nextRandom);
        }
    };

    const onClick = () => {
        const { value } = ref.current as HTMLTextAreaElement;
        if (value && voca[random].definition.includes(value)) {
            Swal.fire({
                title: 'Correct!',
                icon: 'success',
                html: `${voca[random].word} <br/> ${voca[random].definition}`
            }).then(() => reset());
        } else {
            Swal.fire({ title: '실패', icon: 'error', text: '다시 시도해주세요.' });
        }
    };

    const onReset = () => {
        if (ref.current) {
            ref.current.value = '';
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <h1 className="text-[24px] font-bold font-mono mb-2.5">Practice!</h1>
            <section className="border border-black rounded-md min-w-[500px]">
                <h2 className="text-[16px] font-bold font-mono mb-2.5 border-b border-black p-5">
                    <span className="text-[20px]">{voca?.[random]?.word} </span>의 정의를 입력해주세요.
                </h2>
                <textarea ref={ref} rows={3} cols={55} className="p-5 outline-none text-[16px]" placeholder="답을 입력해주세요." />
                <button onClick={onReset} className="p-2.5 bg-white text-black border border-black font-bold rounded-md text-[14px] mb-2.5 hover:scale-95 active:scale-95" type="button">
                    입력 초기화
                </button>
                <button onClick={onClick} className="p-2.5 bg-black text-white font-bold rounded-md text-[14px] m-2.5 hover:scale-95 active:scale-95" type="button">
                    제출하기
                </button>
            </section>
            <div className="flex justify-end w-[700px] mt-5">
                <button className="bg-black text-white rounded-md font-bold text-[16px] p-2.5 hover:scale-95 active:scale-95" type="button" onClick={reset}>
                    다른 단어 연습하기
                </button>
            </div>
        </div>
    );
}
