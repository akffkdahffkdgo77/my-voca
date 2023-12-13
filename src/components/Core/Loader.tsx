import styled from '@emotion/styled';
import tw from 'twin.macro';

type StylesType = {
    width?: number | string;
    height?: number | string;
    borderWidth?: string;
    borderColor?: string;
};

const TwLoader = styled.div(({ width, height, borderWidth, borderColor }: StylesType) => [
    tw`h-100pxr w-100pxr animate-rotate rounded-full border-8 border-gray-900 border-b-transparent`,
    width && { width },
    height && { height },
    borderWidth && { borderWidth },
    borderColor && { borderColor, borderBottomColor: 'transparent' }
]);

export default function Loader(props: StylesType) {
    return <TwLoader {...props} />;
}
