import { Link } from 'react-router-dom';

import { LinkIcon } from '@heroicons/react/24/outline';
import { Typography } from 'components';
import tw from 'twin.macro';

import { TypographyVariantType } from 'utils/theme';

const customStyle = {
    widthFull: tw`w-full`,
    width80: tw`w-20`,
    flex: tw`flex items-center gap-x-5`
};

export default function TypographyGuide() {
    return (
        <>
            <Typography id="typography" variant="h4" component="h2" gutterBottom={40}>
                Typography
            </Typography>
            <div className="rounded bg-white p-5 shadow-md">
                <div className="grid grid-cols-2 gap-y-5">
                    <div className="flex items-center gap-x-2.5">
                        <Typography component="h3" variant="b16" fontWeight="700" fontFamily="sans">
                            System Font
                        </Typography>
                        <Link title="Noto Sans KR Font" to="https://fonts.google.com/noto/specimen/Noto+Sans+KR" target="_blank" rel="noopener noreferrer">
                            <LinkIcon className="h-3 w-3" />
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                        <Typography component="h3" variant="b24" fontWeight="700" fontFamily="nanumpenscript">
                            Title Font
                        </Typography>
                        <Link title="Nanum Pen Script Font" to="https://fonts.google.com/specimen/Nanum+Pen+Script" target="_blank" rel="noopener noreferrer">
                            <LinkIcon className="h-3 w-3" />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <small className="mr-5 mt-auto text-gray-900">ENG</small>
                        <Typography variant="h4" fontWeight="500" fontFamily="sans" twStyle={customStyle.widthFull}>
                            Noto Sans Korean
                        </Typography>
                        <small className="mr-5 mt-auto text-gray-900">KOR</small>
                        <Typography variant="h4" fontWeight="500" fontFamily="sans" twStyle={customStyle.widthFull}>
                            노토 산스
                        </Typography>
                    </div>
                    <div className="flex items-center">
                        <small className="mr-5 mt-auto text-gray-900">ENG</small>
                        <Typography variant="h3" fontWeight="500" fontFamily="nanumpenscript" twStyle={customStyle.widthFull}>
                            Nanum Pen Script
                        </Typography>
                        <small className="mr-5 mt-auto text-gray-900">KOR</small>
                        <Typography variant="h3" fontWeight="500" fontFamily="nanumpenscript" twStyle={customStyle.widthFull}>
                            나눔손글씨펜
                        </Typography>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <Typography variant="b16" fontFamily="sans" fontWeight="400" twStyle={customStyle.flex}>
                            <span className="font-inherit w-24 text-gray-900">Regular</span>
                            <span className="font-inherit whitespace-nowrap">가나다라마바사</span>
                            <span className="font-inherit">ABCDEFG</span>
                            <span className="font-inherit">abcdefg</span>
                            <span className="font-inherit">0123456789</span>
                        </Typography>
                        <Typography variant="b16" fontFamily="sans" fontWeight="500" twStyle={customStyle.flex}>
                            <span className="font-inherit w-24 text-gray-900">Medium</span>
                            <span className="font-inherit whitespace-nowrap">가나다라마바사</span>
                            <span className="font-inherit">ABCDEFG</span>
                            <span className="font-inherit">abcdefg</span>
                            <span className="font-inherit">0123456789</span>
                        </Typography>
                        <Typography variant="b16" fontFamily="sans" fontWeight="600" twStyle={customStyle.flex}>
                            <span className="font-inherit w-24 text-gray-900">Semibold</span>
                            <span className="font-inherit whitespace-nowrap">가나다라마바사</span>
                            <span className="font-inherit">ABCDEFG</span>
                            <span className="font-inherit">abcdefg</span>
                            <span className="font-inherit">0123456789</span>
                        </Typography>
                        <Typography variant="b16" fontFamily="sans" fontWeight="700" twStyle={customStyle.flex}>
                            <span className="font-inherit w-24 text-gray-900">Bold</span>
                            <span className="font-inherit whitespace-nowrap">가나다라마바사</span>
                            <span className="font-inherit">ABCDEFG</span>
                            <span className="font-inherit">abcdefg</span>
                            <span className="font-inherit">0123456789</span>
                        </Typography>
                    </div>
                    <div className="mb-auto flex flex-col gap-y-5">
                        <Typography variant="b16" fontFamily="nanumpenscript" fontWeight="400" twStyle={customStyle.flex}>
                            <span className="font-inherit w-24 text-gray-900">Regular</span>
                            <span className="font-inherit whitespace-nowrap">가나다라마바사</span>
                            <span className="font-inherit">ABCDEFG</span>
                            <span className="font-inherit">abcdefg</span>
                            <span className="font-inherit">0123456789</span>
                        </Typography>
                    </div>
                </div>
                <div className="mt-10 flex items-start gap-x-10">
                    <div>
                        <Typography component="h3" variant="b16" fontWeight="700" gutterBottom={20}>
                            Heading
                        </Typography>
                        {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((variant) => (
                            <div key={variant} className="flex items-center gap-x-10">
                                <Typography variant="b16" twStyle={customStyle.width80}>
                                    {variant}
                                </Typography>
                                <Typography variant={variant as TypographyVariantType}>가나다ABCdef012</Typography>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Typography component="h3" variant="b16" fontWeight="700" gutterBottom={20}>
                            Body
                        </Typography>
                        {['b24', 'b18', 'b16', 'b14', 'b12'].map((variant) => (
                            <div key={variant} className="flex items-center gap-x-10">
                                <Typography variant="b16" twStyle={customStyle.width80}>
                                    {variant}
                                </Typography>
                                <Typography variant={variant as TypographyVariantType}>가나다ABCdef012</Typography>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Typography component="h3" variant="b16" fontWeight="700" gutterBottom={20}>
                            Caption
                        </Typography>
                        {['c11', 'c8'].map((variant) => (
                            <div key={variant} className="flex items-center gap-x-10">
                                <Typography variant="b16" twStyle={customStyle.width80}>
                                    {variant}
                                </Typography>
                                <Typography variant={variant as TypographyVariantType}>가나다ABCdef012</Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
