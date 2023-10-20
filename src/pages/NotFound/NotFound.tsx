import { useNavigate } from 'react-router-dom';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Button, Typography } from 'components';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 min-h-screen bg-slate-50 dark:bg-slate-900">
            <div className="flex h-full flex-col items-center justify-center">
                <ExclamationTriangleIcon className="h-[200px] w-[200px] text-red-500" />
                <Typography component="h2" className="mb-10 text-6xl text-slate-900 dark:text-slate-50">
                    404
                </Typography>
                <div className="flex gap-5">
                    <Button
                        onClick={() => navigate('/', { replace: true })}
                        className="rounded border border-slate-900 bg-slate-900 p-2.5 text-slate-50 hover:opacity-70 dark:border-slate-900 dark:bg-slate-50 dark:text-slate-900"
                    >
                        홈 페이지로 돌아가기
                    </Button>
                    <Button onClick={() => navigate(-1)} className="rounded border border-slate-900 p-2.5 text-slate-900 hover:opacity-70 dark:border-slate-50 dark:text-slate-50">
                        이전 페이지로 돌아가기
                    </Button>
                </div>
            </div>
        </div>
    );
}
