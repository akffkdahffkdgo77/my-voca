import { Fragment } from 'react';
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
  XMarkIcon,
} from '@heroicons/react/24/outline';

import Typography from '@components/Typography';

const IconographyGuide = () => {
  return (
    <Fragment>
      <div className="flex items-center gap-x-2.5" id="iconography">
        <Typography component="h2" variant="h3">
          Iconography
        </Typography>
        <Link rel="noopener noreferrer" target="_blank" title="Heroicons" to="https://heroicons.com/">
          <LinkIcon className="h-5 w-5" />
        </Link>
      </div>
      <div className="flex items-start gap-x-20 rounded bg-white p-5 shadow-md">
        <div className="space-y-2.5">
          <Typography component="h3" fontWeight="700" variant="b16">
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
          <Typography component="h3" fontWeight="700" variant="b16">
            20 x 20
          </Typography>
          <div className="flex items-center gap-x-2.5">
            <XMarkIcon className="h-5 w-5" />
            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-black">
              <ArrowUpIcon className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
        <div className="space-y-2.5">
          <Typography component="h3" fontWeight="700" variant="b16">
            24 x 20
          </Typography>
          <div className="flex items-center gap-x-2.5">
            <CheckIcon className="h-5 w-6 text-rust-500" />
          </div>
        </div>
        <div className="space-y-2.5">
          <Typography component="h3" fontWeight="700" variant="b16">
            200 x 200
          </Typography>
          <div className="flex items-center gap-x-2.5">
            <ExclamationCircleIcon className="h-50 w-50 text-red-500" />
            <ExclamationTriangleIcon className="h-50 w-50 text-red-500" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IconographyGuide;
