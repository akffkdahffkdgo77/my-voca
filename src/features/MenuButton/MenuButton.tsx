import LinkButton from 'features/MenuButton/LinkButton';
import { getWords } from 'utils/localStorage';

export default function MenuButton() {
    const wordList = getWords();

    return (
        <div className="w-full [height:calc(100vh-100px)] flex items-center justify-center">
            <div className={wordList.length ? 'w-[300px] flex justify-between items-center' : 'w-[300px] flex justify-center items-center'}>
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
