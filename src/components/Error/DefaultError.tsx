import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Button, Typography } from 'components';

import { StyleThemes } from 'utils/theme';

export default function DefaultError() {
    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 min-h-screen">
            <div className="flex h-full flex-col items-center justify-center">
                <ExclamationCircleIcon className="h-200pxr w-200pxr text-red-500" />
                <Typography variant="h4" component="h1" align="center" gutterBottom={40}>
                    문제가 발생하였습니다.
                    <br />
                    페이지를 새로고침 해주세요.
                </Typography>
                <Button size="large" shape="square" variant="outlined" theme={StyleThemes.Gray} onClick={() => window.location.reload()}>
                    새로고침
                </Button>
            </div>
        </div>
    );
}
