import { useCallback } from 'react';

import Button from '@components/Button';
import Typography from '@components/Typography';
import { useModal } from '@contexts/Modal';

import { textStyle } from '@utils/theme';

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
      <Button size="medium" variant="outlined" onClick={handleClick}>
        Open Modal
      </Button>
      <div className="min-w-80 overflow-hidden rounded-lg border border-gray-950 bg-white p-7.5 shadow-inner">
        <Typography component="p" fontWeight="500" gutterBottom={40} twStyle={textStyle.modalText} variant="b16">
          수정하시겠습니까?
        </Typography>
        <div className="mx-auto w-full space-x-2.5 text-right">
          <Button shape="square" size="large" type="button" variant="outlined">
            취소
          </Button>
          <Button shape="square" size="large" type="button" variant="contained">
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalGuide;
