import { FileDownloadIconButton, ImageDownloadIconButton } from '@components/IconButton';

import { useMobile } from '@hooks/utils';

interface Props {
  onClick: (selected: number) => void;
}

const Step1 = ({ onClick }: Props) => {
  const isMobile = useMobile();

  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <FileDownloadIconButton onClick={() => onClick(2)} />
      {!isMobile && <ImageDownloadIconButton onClick={() => onClick(3)} />}
    </div>
  );
};

export default Step1;
