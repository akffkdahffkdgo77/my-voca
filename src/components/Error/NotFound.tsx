import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import Button from '@components/Button';
import Typography from '@components/Typography';

import { StyleThemes } from '@utils/theme';

const NotFound = () => {
  const navigate = useNavigate();

  const handleHome = useCallback(() => navigate('/', { replace: true }), [navigate]);

  const handlePrevious = useCallback(() => navigate(-1), [navigate]);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 min-h-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <ExclamationTriangleIcon className="h-50 w-50 text-red-500" />
        <Typography component="h2" gutterBottom={40} variant="h2">
          404
        </Typography>
        <div className="flex gap-5">
          <Button shape="square" size="large" theme={StyleThemes.Gray} variant="outlined" onClick={handleHome}>
            홈으로 돌아가기
          </Button>
          <Button shape="square" size="large" theme={StyleThemes.Gray} variant="contained" onClick={handlePrevious}>
            이전으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
