import { DragEvent, MouseEvent, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import tw, { theme } from 'twin.macro';

import { InboxArrowDownIcon } from '@heroicons/react/24/outline';

import Button from '@components/Button';
import Typography from '@components/Typography';
import { useToast } from '@contexts/Toast';

import { DEFAULT_ERROR_MESSAGE } from '@utils/constants';
import { addWord } from '@utils/data';
import { exportFile, importFile } from '@utils/file';
import { OptionalThemeType, StyleThemes } from '@utils/theme';

interface Props {
  onLoading: () => void;
}

// 파일 drag n drop
const Step2 = ({ onLoading }: Props) => {
  const navigate = useNavigate();
  const { setMessage } = useToast();

  const timerId = useRef<NodeJS.Timer>();
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (files: FileList) => {
    const file = files[0];
    if (file.type !== 'text/plain') {
      setMessage('.txt 파일만 첨부하세요.', { variant: 'error' });
      return;
    }

    importFile(file)
      .then((result) => {
        onLoading();
        timerId.current = setTimeout(() => {
          addWord(result);
          navigate(`/test/${result.wordListIdx}`, { replace: true });
        }, 1000);
      })
      .catch((err: Error) => {
        setMessage(err.message || DEFAULT_ERROR_MESSAGE, { variant: 'error' });
      });
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver = (e: DragEvent) => {
    // 브라우저 기본 동작 막기
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnd = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      setIsDragging(false);
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const handleSampleDownload = useCallback(async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    await fetch('/sample.txt')
      .then((res) => res.text())
      .then((res) => exportFile(res, 'sample'));
  }, []);

  return (
    <TWLabel
      htmlFor="file-upload"
      isDragging={isDragging}
      theme={StyleThemes.Gray}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <InboxArrowDownIcon className="size-50" />
      <Typography fontWeight="700" gutterBottom={40} variant="b18">
        파일 등록
      </Typography>
      <Button backgroundColor={theme`colors.white`} size="medium" variant="outlined" onClick={handleSampleDownload}>
        샘플 다운로드
      </Button>
      <input
        accept="text/plain"
        className="sr-only"
        id="file-upload"
        type="file"
        onChange={(e) => {
          if (e.currentTarget.files) {
            handleFileUpload(e.currentTarget.files);
          }
        }}
      />
    </TWLabel>
  );
};

export default Step2;

const TWLabel = styled.label(({ isDragging }: { isDragging: boolean } & OptionalThemeType) => [
  tw`flex h-125 w-125 cursor-pointer flex-col items-center justify-center rounded border border-gray-950 bg-white shadow-xl hover:bg-gray-100`,
  isDragging && tw`bg-gray-100`,
]);
