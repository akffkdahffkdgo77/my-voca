import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ErrorCircleFilled } from '@fluentui/react-icons';

import Button from '@components/Button';
import Typography from '@components/Typography';

import { COLOR } from '@utils/color';

const NotFound = () => {
  const navigate = useNavigate();

  const handleHome = useCallback(() => navigate('/', { replace: true }), [navigate]);

  const handlePrevious = useCallback(() => navigate(-1), [navigate]);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 min-h-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <ErrorCircleFilled className="h-50 w-50 text-red-500" />
        <Typography component="h2" gutterBottom={40} variant="h2">
          404
        </Typography>
        <div className="flex gap-5">
          <Button
            color={COLOR.Gray}
            shape="square"
            size="large"
            text="홈으로 돌아가기"
            variant="outlined"
            onClick={handleHome}
          />
          <Button
            color={COLOR.Gray}
            shape="square"
            size="large"
            text="이전 페이지로 돌아가기"
            variant="contained"
            onClick={handlePrevious}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
