import { Typography } from 'components/Core';
import tw from 'twin.macro';

const customStyle = {
    caption: tw`capitalize`
};

interface Props {
    text: string;
}

export default function Caption({ text }: Props) {
    return (
        <Typography variant="b12" fontWeight="700" component="small" twStyle={customStyle.caption}>
            {text}
        </Typography>
    );
}
