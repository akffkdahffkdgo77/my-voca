import { useRef, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Practice() {
    const voca = JSON.parse(localStorage.getItem('words') || '');

    const navigate = useNavigate();

    const ref = useRef<HTMLTextAreaElement>(null);
    const [random, setRandom] = useState<number>(Math.floor(Math.random() * (voca.length - 0) + 0));
    const [prevArray, setPrevArray] = useState<number[]>([]);
    const [successCount, setSuccessCount] = useState(0);
    const [failCount, setFailCount] = useState(0);

    const handleNewDataset = () => {
        if (prevArray.length === voca.length - 1) {
            Swal.fire({
                icon: 'success',
                html: `테스트를 완료했습니다!! <br/> 맞춘 단어 : ${successCount} <br/> 틀린 / 스킵한 단어 : ${failCount} <br/> 홈 화면으로 돌아가겠습니까?`,
                showCancelButton: true,
                confirmButtonColor: '#083AA9',
                confirmButtonText: '홈으로 돌아가기',
                cancelButtonColor: '#EB1D36',
                cancelButtonText: '테스트 계속하기'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/', { replace: true });
                } else {
                    window.location.reload();
                }
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
            setFailCount((prev) => prev + 1);
        }
    };

    const onSubmit = () => {
        const { value } = ref.current as HTMLTextAreaElement;
        if (value && voca[random].definition === value) {
            setSuccessCount((prev) => prev + 1);
            Swal.fire({
                icon: 'success',
                confirmButtonColor: '#000000',
                html: `${voca[random].word} <br/> ${voca[random].definition}`
            }).then(() => handleNewDataset());
        } else {
            Swal.fire({ icon: 'error', confirmButtonColor: '#000000', text: '다시 시도해주세요.' });
        }
    };

    const onReset = () => {
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
                        <span className="text-[20px]">{voca?.[random]?.word}</span>의 뜻을 입력해주세요.
                    </h2>
                    <textarea ref={ref} rows={5} className="w-full p-5 outline-none text-[16px]" placeholder="답을 입력해주세요." />
                    <div className="flex justify-end items-center gap-x-2.5 mb-2.5 mx-2.5">
                        <button onClick={onReset} className="p-2.5 bg-white text-black border border-black font-bold rounded-md text-[14px] hover:scale-95 active:scale-95" type="button">
                            입력 초기화
                        </button>
                        <button onClick={onSubmit} className="p-2.5 bg-black text-white font-bold rounded-md text-[14px] hover:scale-95 active:scale-95" type="button">
                            제출하기
                        </button>
                    </div>
                </section>
                <div className="flex justify-end w-[700px] mt-5 ">
                    <button className="bg-black text-white rounded-md font-bold text-[12px] p-2.5 hover:scale-95 active:scale-95" type="button" onClick={handleNewDataset}>
                        다른 단어 연습하기
                    </button>
                </div>
            </div>
        </main>
    );
}
