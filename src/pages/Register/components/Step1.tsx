import { theme } from 'twin.macro';

import Button from '@components/Button';
import Typography from '@components/Typography';

import { useMobile } from '@hooks/utils';

interface Props {
  onClick: (selected: number) => void;
}

// 선택 화면
const Step1 = ({ onClick }: Props) => {
  const isMobile = useMobile();

  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <Button height={300} variant="contained" width={300} onClick={() => onClick(2)}>
        <Typography color={theme`colors.white`} fontWeight="600" variant="b24">
          파일
          <br />
          등록하기
        </Typography>
      </Button>
      {!isMobile && (
        <Button height={300} variant="contained" width={300} onClick={() => onClick(3)}>
          <Typography color={theme`colors.white`} fontWeight="600" variant="b24">
            직접
            <br />
            등록하기
          </Typography>
        </Button>
      )}
    </div>
  );
};

export default Step1;
