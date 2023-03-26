import { useFormContext, useWatch } from 'react-hook-form';

import { getWords } from 'utils/localStorage';

export default function Header() {
    const wordList = getWords();
    const { control } = useFormContext();
    const random = useWatch({ control, name: 'random' });

    return (
        <h2 className="text-[16px] font-bold font-mono mb-2.5 border-b border-slate-900 dark:border-slate-300 p-5">
            <span className="text-[20px]">{wordList?.[random]?.word}</span>의 뜻을 입력해주세요.
        </h2>
    );
}
