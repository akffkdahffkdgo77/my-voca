import { useNavigate } from 'react-router-dom';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Button, Typography } from 'components';

import { StyleThemes } from 'utils/theme';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 min-h-screen">
            <div className="flex h-full flex-col items-center justify-center">
                <ExclamationTriangleIcon className="h-200pxr w-200pxr text-red-500" />
                <Typography component="h2" variant="h2" gutterBottom={40}>
                    404
                </Typography>
                <div className="flex gap-5">
                    <Button size="large" shape="square" variant="outlined" theme={StyleThemes.Gray} onClick={() => navigate('/', { replace: true })}>
                        홈으로 돌아가기
                    </Button>
                    <Button size="large" shape="square" variant="contained" theme={StyleThemes.Gray} onClick={() => navigate(-1)}>
                        이전으로 돌아가기
                    </Button>
                </div>
            </div>
        </div>
    );
}
