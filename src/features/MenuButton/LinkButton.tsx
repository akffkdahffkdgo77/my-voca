import { Link } from 'react-router-dom';

type LinkButtonProps = {
    text: string;
    path: string;
};

export default function LinkButton({ text, path }: LinkButtonProps) {
    return (
        <Link className="rounded-md p-2.5 dark:bg-slate-300 dark:text-slate-900 dark:border-0  bg-slate-900 text-slate-50 font-bold hover:animate-pulse" to={path}>
            {text}
        </Link>
    );
}
