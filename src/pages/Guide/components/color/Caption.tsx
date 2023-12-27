import { Typography } from 'components/Core';
import tw from 'twin.macro';

const customStyle = {
    caption: tw`capitalize`
};

function Caption({ text }: { text: string }) {
    return (
        <Typography variant="b12" fontWeight="700" component="small" twStyle={customStyle.caption}>
            {text}
        </Typography>
    );
}

export default Caption;
