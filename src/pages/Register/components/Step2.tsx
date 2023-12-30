import { DragEvent, MouseEvent, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { InboxArrowDownIcon } from '@heroicons/react/24/outline';
import { Button, Typography, useToast } from 'components';
import tw, { theme } from 'twin.macro';

import { DEFAULT_ERROR_MESSAGE } from 'utils/constants';
import { addWord } from 'utils/data';
import { exportFile, importFile } from 'utils/file';
import { OptionalThemeType, StyleThemes } from 'utils/theme';

interface Props {
    onLoading: () => void;
}

const TwLabel = styled.label(({ isDragging }: OptionalThemeType & { isDragging: boolean }) => [
    tw`flex h-500pxr w-500pxr cursor-pointer hover:bg-gray-100 flex-col items-center justify-center rounded border border-gray-950 shadow-xl bg-white`,
    isDragging && tw`bg-gray-100`
]);

// 파일 drag n drop
export default function Step2({ onLoading }: Props) {
    const navigate = useNavigate();
    const { setMessage } = useToast();

    const timerId = useRef<NodeJS.Timer>();
    const [isDragging, setIsDragging] = useState(false);

    const handleFileUpload = (files: FileList) => {
        const file = files[0];
        if (file.type !== 'text/plain') {
            setMessage('.txt 파일만 첨부해 주세요.', { variant: 'error' });
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
        <TwLabel htmlFor="file-upload" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragEnd={handleDragEnd} onDrop={handleDrop} isDragging={isDragging} theme={StyleThemes.Gray}>
            <InboxArrowDownIcon className="h-200pxr w-200pxr" />
            <Typography variant="b18" fontWeight="700" gutterBottom={40}>
                클릭 혹은 파일을 여기로 드롭해주세요!
            </Typography>
            <Button variant="outlined" size="medium" backgroundColor={theme`colors.white`} onClick={handleSampleDownload}>
                샘플 다운로드
            </Button>
            <input
                id="file-upload"
                type="file"
                accept="text/plain"
                onChange={(e) => {
                    if (e.currentTarget.files) {
                        handleFileUpload(e.currentTarget.files);
                    }
                }}
                className="sr-only"
            />
        </TwLabel>
    );
}
