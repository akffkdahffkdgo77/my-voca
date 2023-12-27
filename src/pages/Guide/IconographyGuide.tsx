import { Link } from 'react-router-dom';

import {
    ArrowTopRightOnSquareIcon,
    ArrowUpIcon,
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    LinkIcon,
    PaintBrushIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';
import { Typography } from 'components';

export default function IconographyGuide() {
    return (
        <>
            <div id="iconography" className="flex items-center gap-x-2.5">
                <Typography variant="h3" component="h2">
                    Iconography
                </Typography>
                <Link title="Heroicons" to="https://heroicons.com/" target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="h-5 w-5" />
                </Link>
            </div>
            <div className="flex items-start gap-x-20 rounded bg-white p-5 shadow-md">
                <div className="space-y-2.5">
                    <Typography variant="b16" fontWeight="700" component="h3">
                        9 x 9
                    </Typography>
                    <div className="flex items-center gap-x-2.5">
                        <PaintBrushIcon className="h-3 w-3" />
                        <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                        <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 p-1">
                            <ChevronUpIcon className="h-3 w-3 stroke-3 text-white" />
                        </div>
                        <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 p-1">
                            <ChevronDownIcon className="h-3 w-3 stroke-3 text-white" />
                        </div>
                    </div>
                </div>
                <div className="space-y-2.5">
                    <Typography variant="b16" fontWeight="700" component="h3">
                        20 x 20
                    </Typography>
                    <div className="flex items-center gap-x-2.5">
                        <XMarkIcon className="h-5 w-5" />
                        <div className="flex h-50pxr w-50pxr items-center justify-center rounded-full bg-black">
                            <ArrowUpIcon className="h-5 w-5 text-white" />
                        </div>
                    </div>
                </div>
                <div className="space-y-2.5">
                    <Typography variant="b16" fontWeight="700" component="h3">
                        24 x 20
                    </Typography>
                    <div className="flex items-center gap-x-2.5">
                        <CheckIcon className="h-5 w-6 text-rust-500" />
                    </div>
                </div>
                <div className="space-y-2.5">
                    <Typography variant="b16" fontWeight="700" component="h3">
                        200 x 200
                    </Typography>
                    <div className="flex items-center gap-x-2.5">
                        <ExclamationCircleIcon className="h-200pxr w-200pxr text-red-500" />
                        <ExclamationTriangleIcon className="h-200pxr w-200pxr text-red-500" />
                    </div>
                </div>
            </div>
        </>
    );
}
