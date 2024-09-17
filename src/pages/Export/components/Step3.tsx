import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

import dayjs from 'dayjs';

import Button from '@components/Button';
import Typography from '@components/Typography';
import { useToast } from '@contexts/Toast';

import { DataListType, WordType } from '@utils/data';
import { textStyle } from '@utils/theme';

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

const Step3 = ({ words }: Props) => {
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
  }, []);

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
          ctx.fillText(
            definition1.slice(i, i + maxLength),
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY + FONT_SIZE * additionalY++,
          );
        }

        if (definition2) {
          for (let i = 0; i < definition2.length; i += maxLength) {
            ctx.font = "16px 'sans-serif'";
            ctx.fillText(
              definition2.slice(i, i + maxLength),
              e.nativeEvent.offsetX,
              e.nativeEvent.offsetY + FONT_SIZE * additionalY++,
            );
          }
        }

        setSelectedText(null);
        setMessage('새로운 단어를 선택하세요.', { variant: 'info' });
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
  }, []);

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
        <canvas
          ref={canvasRef}
          className="rounded border border-gray-950"
          height={500}
          width={500}
          onClick={handleText}
        />
        <div className="space-x-5">
          <Button size="medium" variant="outlined" onClick={handleReset}>
            초기화
          </Button>
          <Button size="medium" variant="outlined" onClick={handleDownload}>
            다운로드
          </Button>
        </div>
      </div>
      <ul className="mb-10 flex h-125 w-full min-w-87.5 max-w-3xl flex-col space-y-2.5">
        {words.map((word) => (
          <li
            key={word.wordListIdx}
            className="group h-full flex-1 rounded border border-gray-950 bg-white p-5 shadow-xl"
          >
            <Typography align="left" component="h2" fontFamily="nanumpenscript" gutterBottom={20} variant="b24">
              {word.wordListName}
            </Typography>
            <ul className="hidden h-full w-full group-hover:block">
              {word.words.map((w, index) => (
                <li key={w.wordIdx} className="w-full hover:opacity-50">
                  <Button
                    height="100%"
                    variant="text"
                    width="100%"
                    onClick={() => {
                      setSelectedText(w);
                      setMessage('단어가 선택되었습니다.', { variant: 'info' });
                    }}
                  >
                    <div className="grid w-full grid-cols-auto">
                      <Typography
                        align="left"
                        fontWeight="500"
                        gutterBottom={4}
                        twStyle={textStyle.modalText}
                        variant="b16"
                      >
                        <Typography component="span" fontWeight="700" variant="b16">
                          {index + 1}.{' '}
                        </Typography>
                        {w.word} :{' '}
                      </Typography>
                      <Typography
                        align="left"
                        fontWeight="500"
                        gutterBottom={4}
                        twStyle={textStyle.modalText}
                        variant="b16"
                      >
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
};

export default Step3;
