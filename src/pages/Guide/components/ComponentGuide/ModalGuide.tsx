import { useCallback } from 'react';

import Button from '@components/Button';
import Typography from '@components/Typography';
import { useModal } from '@contexts/Modal';

const ModalGuide = () => {
  const handleModal = useModal();

  const handleClick = useCallback(
    () => handleModal({ message: '수정하시겠습니까?', messageType: 'confirm' }),
    [handleModal],
  );

  return (
    <div className="h-max w-full space-y-5 rounded bg-white p-5 shadow-md">
      <Typography component="h3" fontWeight="700" variant="b24">
        Modal
      </Typography>
      <Button size="medium" text="열기" variant="outlined" onClick={handleClick} />
      <div className="min-w-80 overflow-hidden rounded-lg border border-gray-950 bg-white px-4 py-5 shadow-inner">
        <Typography
          component="p"
          fontWeight="500"
          gutterBottom={40}
          variant="b16"
          whiteSpace="pre-wrap"
          wordBreak="all"
        >
          수정하시겠습니까?
        </Typography>
        <div className="mx-auto w-full space-x-2.5 text-right">
          <Button shape="square" size="large" text="취소" type="button" variant="outlined" />
          <Button shape="square" size="large" text="확인" type="button" variant="contained" />
        </div>
      </div>
    </div>
  );
};

export default ModalGuide;
