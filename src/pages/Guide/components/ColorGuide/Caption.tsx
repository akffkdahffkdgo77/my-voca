import tw from 'twin.macro';

import Typography from '@components/Typography';

interface Props {
  text: string;
}

const Caption = ({ text }: Props) => {
  return (
    <Typography component="small" fontWeight="700" twStyle={customStyle.caption} variant="b12">
      {text}
    </Typography>
  );
};

export default Caption;

const customStyle = {
  caption: tw`capitalize`,
};
