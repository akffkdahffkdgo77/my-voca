import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main className="w-full h-screen flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold underline mb-2.5">일일 단어장</h1>
            <div className="w-[250px] flex justify-between items-center">
                <Link className="border border-black rounded-md p-2.5 bg-black text-white font-bold hover:animate-pulse" to="/add">
                    단어 추가하기
                </Link>
                <Link className="border border-black rounded-md p-2.5 bg-black text-white font-bold hover:animate-pulse" to="/practice">
                    단어 외우기
                </Link>
            </div>
        </main>
    );
}
