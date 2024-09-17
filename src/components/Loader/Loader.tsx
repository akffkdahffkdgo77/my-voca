import styled from '@emotion/styled';
import tw from 'twin.macro';

interface Props {
  borderColor?: string;
  borderWidth?: string;
  height?: number | string;
  width?: number | string;
}

const Loader = (props: Props) => {
  return <TWLoader {...props} />;
};

export default Loader;

const TWLoader = styled.div(({ width, height, borderWidth, borderColor }: Props) => [
  tw`h-25 w-25 animate-rotate rounded-full border-8 border-gray-900 border-b-transparent`,
  width && { width },
  height && { height },
  borderWidth && { borderWidth },
  borderColor && { borderColor, borderBottomColor: 'transparent' },
]);
