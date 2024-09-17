import { theme } from 'twin.macro';

import Button from '@components/Button';
import Typography from '@components/Typography';

import { useMobile } from '@hooks/utils';

interface Props {
  onClick: (selected: number) => void;
}

const Step1 = ({ onClick }: Props) => {
  const isMobile = useMobile();

  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <Button height={300} variant="contained" width={300} onClick={() => onClick(2)}>
        <Typography color={theme`colors.white`} fontWeight="600" variant="b24">
          파일
          <br />
          다운로드
        </Typography>
      </Button>
      {!isMobile && (
        <Button height={300} variant="contained" width={300} onClick={() => onClick(3)}>
          <Typography color={theme`colors.white`} fontWeight="600" variant="b24">
            이미지
            <br />
            다운로드
          </Typography>
        </Button>
      )}
    </div>
  );
};

export default Step1;
