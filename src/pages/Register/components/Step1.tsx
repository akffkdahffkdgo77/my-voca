import { FileRegisterIconButton, TextRegisterIconButton } from '@components/IconButton';

import { useMobile } from '@hooks/utils';

interface Props {
  onClick: (selected: number) => void;
}

// 선택 화면
const Step1 = ({ onClick }: Props) => {
  const isMobile = useMobile();

  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <FileRegisterIconButton onClick={() => onClick(2)} />
      {!isMobile && <TextRegisterIconButton onClick={() => onClick(3)} />}
    </div>
  );
};

export default Step1;
