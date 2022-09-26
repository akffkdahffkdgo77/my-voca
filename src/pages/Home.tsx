import { Link } from 'react-router-dom';

export default function Home() {
    const voca = localStorage.getItem('words') ? JSON.parse(localStorage.getItem('words') || '') : [];

    return (
        <main className="w-full h-screen flex items-center justify-center flex-col">
            <h1 className="text-5xl font-bold underline tracking-tighter mb-10">My Voca</h1>
            <div className={voca.length ? 'w-[300px] flex justify-between items-center' : 'w-[300px] flex justify-center items-center'}>
                <Link className="border border-black rounded-md p-2.5 bg-black text-white font-bold hover:animate-pulse" to="/add">
                    단어 추가하기
                </Link>
                {!!voca.length && (
                    <>
                        <Link className="border border-black rounded-md p-2.5 bg-black text-white font-bold hover:animate-pulse" to="/memorize">
                            단어 외우기
                        </Link>
                        <Link className="border border-black rounded-md p-2.5 bg-black text-white font-bold hover:animate-pulse" to="/practice">
                            시험 보기
                        </Link>
                    </>
                )}
            </div>
        </main>
    );
}
