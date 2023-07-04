'use client';

import Link from 'next/link';

type LinkButtonPropsType = {
    text: string;
    path: string;
};

export default function LinkButton({ text, path }: LinkButtonPropsType) {
    return (
        <Link href={path} className="rounded-md bg-slate-900 p-2.5 font-bold text-slate-50  hover:animate-pulse dark:border-0 dark:bg-slate-300 dark:text-slate-900">
            {text}
        </Link>
    );
}
