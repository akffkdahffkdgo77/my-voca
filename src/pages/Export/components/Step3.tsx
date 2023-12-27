import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

import { Button, Typography, useToast } from 'components';

import dayjs from 'dayjs';

import { DataListType, WordType } from 'utils/data';
import { textStyle } from 'utils/theme';

const FONT_SIZE = 18;

function initializeCanvas(ctx: CanvasRenderingContext2D) {
    const canvasSize = 500;
    const gridSize = 20;

    if (ctx) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#eeeeee';
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvasSize, canvasSize);

        for (let x = 0; x < canvasSize; x += gridSize) {
            for (let y = 0; y < canvasSize; y += gridSize) {
                ctx.strokeRect(x, y, gridSize, gridSize);
            }
        }
    }
}

interface Props {
    words: DataListType;
}

export default function Step3({ words }: Props) {
    const { setMessage } = useToast();

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [selectedText, setSelectedText] = useState<WordType | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                initializeCanvas(ctx);
            }
        }
    }, [initializeCanvas]);

    const handleText = (e: MouseEvent<HTMLCanvasElement>) => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx && selectedText) {
                const [definition1, definition2] = selectedText.definition;

                ctx.font = "bold 18px 'sans-serif'";
                ctx.fillStyle = '#000000';
                ctx.fillText(selectedText.word, e.nativeEvent.offsetX, e.nativeEvent.offsetY);

                let additionalY = 1;
                const maxLength = 40;
                for (let i = 0; i < definition1.length; i += maxLength) {
                    ctx.font = "16px 'sans-serif'";
                    ctx.fillText(definition1.slice(i, i + maxLength), e.nativeEvent.offsetX, e.nativeEvent.offsetY + FONT_SIZE * additionalY++);
                }

                for (let i = 0; i < definition2.length; i += maxLength) {
                    ctx.font = "16px 'sans-serif'";
                    ctx.fillText(definition2.slice(i, i + maxLength), e.nativeEvent.offsetX, e.nativeEvent.offsetY + FONT_SIZE * additionalY++);
                }

                setSelectedText(null);
                setMessage('새로운 단어를 선택해 주세요.', { variant: 'info' });
            }
        }
    };

    const handleReset = useCallback(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, 500, 500);
                initializeCanvas(ctx);
            }
        }
    }, [canvasRef.current]);

    const handleDownload = () => {
        if (canvasRef.current) {
            const dataURL = canvasRef.current.toDataURL();
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = `단어장-${dayjs().format('YYMMDDHHmmss')}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="flex h-full w-full items-start justify-center gap-x-2.5">
            <div className="space-y-5">
                <canvas ref={canvasRef} width={500} height={500} onClick={handleText} className="rounded border border-gray-950" />
                <div className="space-x-5">
                    <Button variant="outlined" size="medium" onClick={handleReset}>
                        초기화
                    </Button>
                    <Button variant="outlined" size="medium" onClick={handleDownload}>
                        다운로드
                    </Button>
                </div>
            </div>
            <ul className="mb-10 flex h-500pxr w-full min-w-350pxr max-w-3xl flex-col space-y-2.5">
                {words.map((word) => (
                    <li key={word.wordListIdx} className="group h-full flex-1 rounded border border-gray-950 bg-white p-5 shadow-xl">
                        <Typography variant="b24" component="h2" fontFamily="nanumpenscript" gutterBottom={20} align="left">
                            {word.wordListName}
                        </Typography>
                        <ul className="hidden h-full w-full group-hover:block">
                            {word.words.map((w, index) => (
                                <li key={w.wordIdx} className="w-full hover:opacity-50">
                                    <Button
                                        variant="text"
                                        width="100%"
                                        height="100%"
                                        onClick={() => {
                                            setSelectedText(w);
                                            setMessage('단어가 선택되었습니다.', { variant: 'info' });
                                        }}
                                    >
                                        <div className="grid-cols-auto grid w-full">
                                            <Typography variant="b16" fontWeight="500" gutterBottom={4} align="left" twStyle={textStyle.modalText}>
                                                <Typography component="span" variant="b16" fontWeight="700">
                                                    {index + 1}.{' '}
                                                </Typography>
                                                {w.word} :{' '}
                                            </Typography>
                                            <Typography variant="b16" fontWeight="500" gutterBottom={4} align="left" twStyle={textStyle.modalText}>
                                                {w.definition.join('\n')}
                                            </Typography>
                                        </div>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}
