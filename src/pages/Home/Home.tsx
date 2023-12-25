import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Typography } from 'components';
import Header from 'layout/Header';
import tw from 'twin.macro';

import { getWords } from 'utils/data';
import { StyleThemes } from 'utils/theme';

export default function Home() {
    const words = useMemo(() => getWords(), []);

    return (
        <div className="bg-grid-light flex min-h-screen w-full items-center justify-center">
            <Header theme={StyleThemes.Gray} />
            <ul className="w-full max-w-5xl space-y-10">
                {words.map((word) => (
                    <li className="w-full rounded border border-gray-950 bg-white p-10 shadow-xl hover:opacity-50">
                        <Link to={`/test/${word.wordListIdx}`}>
                            <Typography variant="h2" component="h2" fontFamily="nanumpenscript" gutterBottom={20}>
                                {word.wordListName}
                            </Typography>
                            <div className="flex items-center gap-x-5">
                                <Typography variant="b16" component="p" fontWeight="700" twStyle={tw`border-2 rounded border-gray-950 w-max px-2 py-1`}>
                                    {word.status}
                                </Typography>
                                <Typography variant="b16" component="p" fontWeight="700" twStyle={tw`border-2 rounded border-gray-950 w-max px-2 py-1`}>
                                    {word.category}
                                </Typography>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
