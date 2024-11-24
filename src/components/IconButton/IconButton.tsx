import { MouseEvent } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import {
  ArrowDownloadFilled,
  ArrowUpFilled,
  ColorFilled,
  DismissFilled,
  DocumentTextFilled,
  ImageFilled,
  Multiplier1XFilled,
  Multiplier2XFilled,
  TextFieldFilled,
} from '@fluentui/react-icons';

import { buttonOutlined } from '@components/Button/styles';
import Typography from '@components/Typography';

import { COLOR, ColorType, getTextColor } from '@utils/color';

interface Props {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

/**
 *  size : 20
 */
export const DismissIconButton = ({ onClick }: Props) => (
  <button className="flex size-5 items-center justify-center bg-transparent" type="button" onClick={onClick}>
    <DismissFilled className="size-5" />
  </button>
);

/**
 *  size : 24
 */
export const PaintBrushIconButton = ({
  color,
  onClick,
}: {
  color: COLOR;
} & Props) => (
  <TWPaintBrushIconButton color={color} title={`${color} 색상으로 바꾸기`} onClick={onClick}>
    <ColorFilled className="m-auto !block h-3 w-3 text-inherit" />
  </TWPaintBrushIconButton>
);

const TWPaintBrushIconButton = styled.button(({ color }: ColorType) => [
  tw`h-6 w-6 rounded-full`,
  buttonOutlined(color),
  getTextColor(color),
]);

/**
 *  size : 32
 */
export const BackupIconButton = ({ onClick }: Props) => (
  <button className="h-8 w-8 bg-transparent" title="데이터 백업하기" type="button" onClick={onClick}>
    <ArrowDownloadFilled className="m-auto !block h-7 w-7 text-gray-950" />
  </button>
);

export const LayoutMultiplierIconButton = ({
  id,
  type,
  onClick,
  color,
}: { id: string; type: '1x' | '2x' } & ColorType & Props) => (
  <TWLayoutMultiplierIconButton aria-describedby={id} color={color} onClick={onClick}>
    {type === '1x' ? (
      <Multiplier1XFilled className="!block size-10 text-inherit" />
    ) : (
      <Multiplier2XFilled className="!block size-10 text-inherit" />
    )}
  </TWLayoutMultiplierIconButton>
);

const TWLayoutMultiplierIconButton = styled.button(({ color }: ColorType) => [
  tw`rounded-lg`,
  buttonOutlined(color),
  getTextColor(color),
]);

/**
 *  size : 50
 */
export const TopIconButton = ({ onClick }: Props) => (
  <button className="h-12.5 w-12.5 rounded-full bg-black" type="button" onClick={onClick}>
    <ArrowUpFilled className="mx-auto !block h-5 w-5 text-white" />
  </button>
);

/**
 *  size : 300
 */
export const FileRegisterIconButton = ({ onClick }: Props) => (
  <button
    className="flex size-75 flex-col items-center justify-center space-y-2.5 rounded bg-gray-950 text-white hover:opacity-80 active:scale-95"
    type="button"
    onClick={onClick}
  >
    <DocumentTextFilled className="!block h-40 w-40" />
    <Typography color="inherit" fontWeight="600" variant="b16">
      파일 등록하기
    </Typography>
  </button>
);

export const FileDownloadIconButton = ({ onClick }: Props) => (
  <button
    className="flex size-75 flex-col items-center justify-center space-y-2.5 rounded bg-gray-950 text-white hover:opacity-80 active:scale-95"
    type="button"
    onClick={onClick}
  >
    <ArrowDownloadFilled className="!block h-40 w-40" />
    <Typography color="inherit" fontWeight="600" variant="b16">
      파일 다운로드
    </Typography>
  </button>
);

export const ImageDownloadIconButton = ({ onClick }: Props) => (
  <button
    className="flex size-75 flex-col items-center justify-center space-y-2.5 rounded bg-gray-950 text-white hover:opacity-80 active:scale-95"
    type="button"
    onClick={onClick}
  >
    <ImageFilled className="!block h-40 w-40" />
    <Typography color="inherit" fontWeight="600" variant="b16">
      이미지 다운로드
    </Typography>
  </button>
);

export const TextRegisterIconButton = ({ onClick }: Props) => (
  <button
    className="flex size-75 flex-col items-center justify-center space-y-2.5 rounded bg-gray-950 text-white hover:opacity-80 active:scale-95"
    type="button"
    onClick={onClick}
  >
    <TextFieldFilled className="!block h-40 w-40" />
    <Typography color="inherit" fontWeight="600" variant="b16">
      직접 등록하기
    </Typography>
  </button>
);
