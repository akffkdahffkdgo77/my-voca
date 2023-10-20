import { ArrowPathIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Button, Typography } from 'components';

type ErrorType = { error: Error | null };

export default function Error({ error }: ErrorType) {
    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 min-h-screen bg-slate-50 dark:bg-slate-900">
            <div className="flex h-full flex-col items-center justify-center">
                <ExclamationCircleIcon className="h-200pxr w-200pxr text-red-500" />
                <Typography component="h2" className="mb-8 text-center text-4xl leading-10 text-slate-900 dark:text-slate-50">
                    문제가 발생하였습니다.
                    <br />
                    페이지를 새로고침 해주세요.
                </Typography>
                <Typography component="h3" className="mb-5 text-2xl font-bold text-slate-900 dark:text-slate-50">
                    <i>{error?.message}</i>
                </Typography>
                <Button
                    onClick={() => window.location.reload()}
                    className="group flex items-center gap-2.5 rounded border border-slate-900 bg-slate-900 p-2.5 text-slate-50 hover:opacity-70 dark:border-slate-900 dark:bg-slate-50 dark:text-slate-900"
                >
                    <ArrowPathIcon className="h-4 w-4 group-hover:animate-spin" />
                    새로고침
                </Button>
            </div>
        </div>
    );
}
