import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import tw from 'twin.macro';

import { LinkIcon } from '@heroicons/react/24/outline';

import Typography from '@components/Typography';

import { TypographyVariantType } from '@utils/theme';

const TypographyGuide = () => {
  return (
    <Fragment>
      <Typography component="h2" gutterBottom={40} id="typography" variant="h4">
        Typography
      </Typography>
      <div className="rounded bg-white p-5 shadow-md">
        <div className="grid grid-cols-2 gap-y-5">
          <div className="flex items-center gap-x-2.5">
            <Typography component="h3" fontFamily="sans" fontWeight="700" variant="b16">
              System Font
            </Typography>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              title="Noto Sans KR Font"
              to="https://fonts.google.com/noto/specimen/Noto+Sans+KR"
            >
              <LinkIcon className="h-3 w-3" />
            </Link>
          </div>
          <div className="flex items-center gap-x-2.5">
            <Typography component="h3" fontFamily="nanumpenscript" fontWeight="700" variant="b24">
              Title Font
            </Typography>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              title="Nanum Pen Script Font"
              to="https://fonts.google.com/specimen/Nanum+Pen+Script"
            >
              <LinkIcon className="h-3 w-3" />
            </Link>
          </div>
          <div className="flex items-center">
            <small className="mr-5 mt-auto text-gray-900">ENG</small>
            <Typography fontFamily="sans" fontWeight="500" twStyle={customStyle.widthFull} variant="h4">
              Noto Sans Korean
            </Typography>
            <small className="mr-5 mt-auto text-gray-900">KOR</small>
            <Typography fontFamily="sans" fontWeight="500" twStyle={customStyle.widthFull} variant="h4">
              노토 산스
            </Typography>
          </div>
          <div className="flex items-center">
            <small className="mr-5 mt-auto text-gray-900">ENG</small>
            <Typography fontFamily="nanumpenscript" fontWeight="500" twStyle={customStyle.widthFull} variant="h3">
              Nanum Pen Script
            </Typography>
            <small className="mr-5 mt-auto text-gray-900">KOR</small>
            <Typography fontFamily="nanumpenscript" fontWeight="500" twStyle={customStyle.widthFull} variant="h3">
              나눔손글씨펜
            </Typography>
          </div>
          <div className="flex flex-col gap-y-5">
            <Typography fontFamily="sans" fontWeight="400" twStyle={customStyle.flex} variant="b16">
              <span className="w-24 font-inherit text-gray-900">Regular</span>
              <span className="whitespace-nowrap font-inherit">가나다라마바사</span>
              <span className="font-inherit">ABCDEFG</span>
              <span className="font-inherit">abcdefg</span>
              <span className="font-inherit">0123456789</span>
            </Typography>
            <Typography fontFamily="sans" fontWeight="500" twStyle={customStyle.flex} variant="b16">
              <span className="w-24 font-inherit text-gray-900">Medium</span>
              <span className="whitespace-nowrap font-inherit">가나다라마바사</span>
              <span className="font-inherit">ABCDEFG</span>
              <span className="font-inherit">abcdefg</span>
              <span className="font-inherit">0123456789</span>
            </Typography>
            <Typography fontFamily="sans" fontWeight="600" twStyle={customStyle.flex} variant="b16">
              <span className="w-24 font-inherit text-gray-900">Semibold</span>
              <span className="whitespace-nowrap font-inherit">가나다라마바사</span>
              <span className="font-inherit">ABCDEFG</span>
              <span className="font-inherit">abcdefg</span>
              <span className="font-inherit">0123456789</span>
            </Typography>
            <Typography fontFamily="sans" fontWeight="700" twStyle={customStyle.flex} variant="b16">
              <span className="w-24 font-inherit text-gray-900">Bold</span>
              <span className="whitespace-nowrap font-inherit">가나다라마바사</span>
              <span className="font-inherit">ABCDEFG</span>
              <span className="font-inherit">abcdefg</span>
              <span className="font-inherit">0123456789</span>
            </Typography>
          </div>
          <div className="mb-auto flex flex-col gap-y-5">
            <Typography fontFamily="nanumpenscript" fontWeight="400" twStyle={customStyle.flex} variant="b16">
              <span className="w-24 font-inherit text-gray-900">Regular</span>
              <span className="whitespace-nowrap font-inherit">가나다라마바사</span>
              <span className="font-inherit">ABCDEFG</span>
              <span className="font-inherit">abcdefg</span>
              <span className="font-inherit">0123456789</span>
            </Typography>
          </div>
        </div>
        <div className="mt-10 flex items-start gap-x-10">
          <div>
            <Typography component="h3" fontWeight="700" gutterBottom={20} variant="b16">
              Heading
            </Typography>
            {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((variant) => (
              <div key={variant} className="flex items-center gap-x-10">
                <Typography twStyle={customStyle.width80} variant="b16">
                  {variant}
                </Typography>
                <Typography variant={variant as TypographyVariantType}>가나다ABCdef012</Typography>
              </div>
            ))}
          </div>
          <div>
            <Typography component="h3" fontWeight="700" gutterBottom={20} variant="b16">
              Body
            </Typography>
            {['b24', 'b18', 'b16', 'b14', 'b12'].map((variant) => (
              <div key={variant} className="flex items-center gap-x-10">
                <Typography twStyle={customStyle.width80} variant="b16">
                  {variant}
                </Typography>
                <Typography variant={variant as TypographyVariantType}>가나다ABCdef012</Typography>
              </div>
            ))}
          </div>
          <div>
            <Typography component="h3" fontWeight="700" gutterBottom={20} variant="b16">
              Caption
            </Typography>
            {['c11', 'c8'].map((variant) => (
              <div key={variant} className="flex items-center gap-x-10">
                <Typography twStyle={customStyle.width80} variant="b16">
                  {variant}
                </Typography>
                <Typography variant={variant as TypographyVariantType}>가나다ABCdef012</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TypographyGuide;

const customStyle = {
  widthFull: tw`w-full`,
  width80: tw`w-20`,
  flex: tw`flex items-center gap-x-5`,
};
