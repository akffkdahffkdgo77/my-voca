import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowDownFilled,
  ArrowDownloadFilled,
  ArrowLeftFilled,
  ArrowRightFilled,
  ArrowUpFilled,
  ChevronDownFilled,
  ChevronUpFilled,
  ColorFilled,
  DismissFilled,
  DocumentAddFilled,
  DocumentTextFilled,
  ErrorCircleFilled,
  ImageFilled,
  LinkFilled,
  Multiplier1XFilled,
  Multiplier2XFilled,
  TextFieldFilled,
} from '@fluentui/react-icons';

import Typography from '@components/Typography';

const IconographyGuide = () => {
  return (
    <Fragment>
      <div className="flex items-center gap-x-2.5">
        <Typography component="h2" id="iconography" variant="h3">
          Iconography
        </Typography>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          title="fluentui-system-icons"
          to="https://github.com/microsoft/fluentui-system-icons"
        >
          <LinkFilled className="h-10 w-10 -rotate-45" />
        </Link>
      </div>
      <div className="flex flex-wrap items-start gap-x-20 rounded bg-white p-5 shadow-md">
        <div className="min-h-60 space-y-2.5">
          <Typography component="h3" fontWeight="700" variant="b16">
            12 x 12
          </Typography>
          <div className="flex items-center gap-x-2.5">
            <LinkFilled className="h-3 w-3 -rotate-45" />
            <ColorFilled className="h-3 w-3" />
            <ChevronUpFilled className="h-3 w-3 stroke-3 text-white" />
            <ChevronDownFilled className="h-3 w-3 stroke-3 text-white" />
          </div>
        </div>
        <div className="space-y-2.5">
          <Typography component="h3" fontWeight="700" variant="b16">
            16 x 16
          </Typography>
          <div className="flex items-center gap-x-2.5">
            <ErrorCircleFilled className="size-4 text-red-600" />
            <ErrorCircleFilled className="size-4 text-gray-950" />
          </div>
        </div>
        <div className="space-y-2.5">
          <Typography component="h3" fontWeight="700" variant="b16">
            20 x 20
          </Typography>
          <div className="flex items-center gap-x-2.5">
            <DismissFilled className="size-5" />
            <ArrowUpFilled className="h-5 w-5 text-white" />
            <ArrowDownloadFilled className="h-5 w-5 text-gray-950" />
          </div>
        </div>
        <div className="space-y-2.5">
          <Typography component="h3" fontWeight="700" variant="b16">
            28 x 28
          </Typography>
          <div className="flex items-center gap-x-2.5">
            <ArrowDownloadFilled className="h-7 w-7 text-gray-950" />
          </div>
        </div>
        <div className="space-y-2.5">
          <Typography component="h3" fontWeight="700" variant="b16">
            40 x 40
          </Typography>
          <div className="flex items-center gap-x-2.5">
            <ArrowUpFilled className="size-10" />
            <ArrowDownFilled className="size-10" />
            <ArrowLeftFilled className="size-10" />
            <ArrowRightFilled className="size-10" />
            <Multiplier1XFilled className="size-10" />
            <Multiplier2XFilled className="size-10" />
          </div>
        </div>
        <div className="space-y-2.5">
          <Typography component="h3" fontWeight="700" variant="b16">
            160 x 160
          </Typography>
          <div className="flex items-center gap-x-2.5">
            <DocumentTextFilled className="h-40 w-40" />
            <ArrowDownloadFilled className="h-40 w-40" />
            <ImageFilled className="h-40 w-40" />
            <TextFieldFilled className="h-40 w-40" />
          </div>
        </div>
        <div className="space-y-2.5">
          <Typography component="h3" fontWeight="700" variant="b16">
            200 x 200
          </Typography>
          <div className="flex items-center gap-x-2.5">
            <ErrorCircleFilled className="h-50 w-50 text-red-500" />
            <DocumentAddFilled className="size-50" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IconographyGuide;
