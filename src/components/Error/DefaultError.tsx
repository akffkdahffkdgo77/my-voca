import { useCallback } from 'react';

import { ErrorCircleFilled } from '@fluentui/react-icons';

import Button from '@components/Button';
import Typography from '@components/Typography';

import { COLOR } from '@utils/color';

const DefaultError = () => {
  const handleClick = useCallback(() => window.location.reload(), []);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 min-h-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <ErrorCircleFilled className="h-50 w-50 text-red-500" />
        <Typography align="center" component="h1" gutterBottom={40} variant="h4">
          문제가 발생하였습니다.
          <br />
          페이지를 새로고침 하세요.
        </Typography>
        <Button
          color={COLOR.Gray}
          shape="square"
          size="large"
          text="새로고침"
          variant="outlined"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default DefaultError;
