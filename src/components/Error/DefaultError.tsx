import { useCallback } from 'react';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

import Button from '@components/Button';
import Typography from '@components/Typography';

import { StyleThemes } from '@utils/theme';

const DefaultError = () => {
  const handleClick = useCallback(() => window.location.reload(), []);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 min-h-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <ExclamationCircleIcon className="h-50 w-50 text-red-500" />
        <Typography align="center" component="h1" gutterBottom={40} variant="h4">
          문제가 발생하였습니다.
          <br />
          페이지를 새로고침 하세요.
        </Typography>
        <Button shape="square" size="large" theme={StyleThemes.Gray} variant="outlined" onClick={handleClick}>
          새로고침
        </Button>
      </div>
    </div>
  );
};

export default DefaultError;
